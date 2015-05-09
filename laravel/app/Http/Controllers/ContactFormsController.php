<?php namespace App\Http\Controllers;
      use Illuminate\Support\Facades\Response;
      use Illuminate\Http\Request;
      
      use App\Http\Controllers\Controller;
      use App\Http\Requests;
      use App\ContactForms;
      use \Config;
      use \Mail;

      class ContactFormsController extends Controller {

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
              $contactform = $request->input('contactform');
              $response = [
                          'contactforms' => []
              ];
              
              try {
                  $response['contactforms'][] = ContactForms::create(array(
                      'name' => $contactform['name'],
                      'email' => $contactform['email'],
                      'message' => $contactform['message']
                  ));
                  
              }
              catch ( \Exception $e) {
                  return Response::json($response, 400);
              }
              $this->sendContactRequest($response['contactforms'][0]);
              return Response::json($response, 200);
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
