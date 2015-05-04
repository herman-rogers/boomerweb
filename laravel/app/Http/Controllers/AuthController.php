<?php namespace App\Http\Controllers;
      
use Auth;
use \Request;
use \Session;
use \App\User;
use DB;
use Illuminate\Routing\Controller;

class AuthController extends Controller {

      /**
       * Handle an authentication attempt.
       *
       * @return Response
       */
      public function authenticate( ) {
          $session = Request::input('session');
          $credentials = ['email' => $session['email'], 'password' => $session['password']];
          
          if (!Auth::attempt($credentials))
          {
                throw new \Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException('x-Basic');
          }

          $user = DB::table('users')->where('email', $session['email'])->first();
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