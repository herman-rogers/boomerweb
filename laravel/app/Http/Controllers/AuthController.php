<?php namespace App\Http\Controllers;

use Auth;
use \Request;
use \Session;
use \App\User;
use DB;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Response;
use App\Services\Validation\LoginValidator;
use App\Services\Validation\Exceptions\ValidationException;

class AuthController extends Controller {

      protected $_validation;
    
      public function __construct(LoginValidator $validator) {
          $this->_validation = $validator;
      }

      /**
       * Handle an authentication attempt.
       *
       * @return Response
       */
      public function authenticate( ) {
          $input = Request::input('session');
          $credentials = ['email' => $input['email'], 'password' => $input['password']];
          
          try {
                $validateData = $this->_validation->validate($input);
                Auth::attempt($credentials);
          }
          catch ( ValidationException $e ) {
              $errors['error'] = $e->get_errors();
              return \Response::json($errors, 422);
          }
          
          if( !Auth::attempt($credentials ) ) {
              $errors['error'] = [ 'authentification' => 'invalid credentials' ];
              return Response::json($errors, 422);
          }

          $user = DB::table('users')->where('email', $input['email'])->first();
          $token = Session::token();
          $response['session'] = [
              'auth_token' => $token,
              'account_id' => $user->id
              ];
          return $response;
          
      }
      
      public function logout( ) {
          Auth::logout();
      }
}