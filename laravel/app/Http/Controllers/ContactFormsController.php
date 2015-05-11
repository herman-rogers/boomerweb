<?php namespace App\Http\Controllers;
      use Illuminate\Support\Facades\Response;
      use Illuminate\Http\Request;
      
      use App\Http\Controllers\Controller;
      use App\Http\Requests;
      use App\ContactForms;
      use Config;
      use Mail;
      use App\Services\Validation\ContactValidator;
      use App\Services\Validation\Exceptions\ValidationException;

      class ContactFormsController extends Controller {
          
          protected $_validation;
          
          public function __construct(ContactValidator $validator) {
              $this->_validation = $validator;
          }
          
          /**
           * Display a listing of the resource.
           *
           * @return Response
           */
          public function index()
          {
              try {
                  $statusCode = 200;
                  $response = [
                          'contactforms' => []
                  ];
                  
                  $contactForms = ContactForms::all();
                  
                  foreach($contactForms as $form){
                      $response['contactforms'][] = [
                          'id' => $form->id,
                          'name' => $form->name,
                          'email' => $form->email,
                          'message' => $form->message,
                          'created_at' => $form->created_at,
                      ];
                  }
                  
              }
              catch (Exception $e) {
                  $statusCode = 400;
              }
              finally {
                  return Response::json($response,$statusCode);
              }
          }

          /**
           * Store a newly created resource in storage.
           *
           * @return Response
           */
          public function store(Request $request)
          {   
              $input = $request->input('contactform');

              try{
                  $validateData = $this->_validation->validate($input);
              }
              catch ( ValidationException $e ) {
                  $errors['error'] = $e->get_errors();
                  return Response::json($errors, 422);
              }
              
              $createContact = new ContactForms;
              $response = [
                  'contactforms' => []    
              ];
              
              try{
                  $statusCode = 200;
                  $response['contactforms'] = $createContact->fill($input);
                  $createContact->save();
                  $this->sendContactRequest($response['contactforms']);
              } 
              catch (\Exception $e) {
                  $statusCode = 400;
              }
              finally {
                  return Response::json($response, $statusCode);
              }
          }
          
          public function sendContactRequest($response) {
              $sendEmailAddress = Config::get('mail.username');
              
              $data = [ 'name' => $response['name'],
                        'email' => $response['email'],
                        'message' => $response['message'],
                        'address' => $sendEmailAddress,
                             ];
              
              Mail::queue([], [], function($message) use ($data){
                  $message->to($data['address'])
                      ->subject('BoomerWeb Contact Inquiry');
                                  $message->to($data['address'])
                      ->setBody("\rName: " . $data['name'] .
                              "\r\rE-mail: " . $data['email'] .
                              "\r\r\rMessage: " . $data['message']);
              });
              
          }

      }
