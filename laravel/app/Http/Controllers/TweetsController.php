<?php namespace App\Http\Controllers;

      use App\Http\Controllers\Controller;
      use App\Http\Requests;

      use Illuminate\Support\Facades\Response;
      use Illuminate\Http\Request;

      // Stateless API Call : No Model Associated
      class TweetsController extends Controller {

          const consumerKey = 'QcxgpbhN5TvkDtZBbieDK2e2j';
          const consumerSecret = 'ft8GkCUl8qYvzGP9zMqQ9IUjIvYAuoOJWCWRHM9rBXB8mQIFeu';
          const accessToken = '38107167-rL3s09W9gXDLMFqAahupdygVslXO5mZSQrEt2wuFl';
          const accessTokenSecret = 'C87FT468SDwjDt6vt1aL3RS6p37BNzqQ2LQGoOfucoXEI';
          
          /**
           * Display a listing of the resource.
           *
           * @return Response
           */
          public function index()
          {   
              $connection = $this->getAuthorizedTwitterURL();
              $status = $connection->get("statuses/user_timeline", 
                  array("count" => 25, "exclude_replies" => true));
              
              $query['tweets'] = $status;
              
              return Response::json($query, 200);
          }
          
          /**
           * Store a newly created resource in storage.
           *
           * @return Response
           */
          public function store(Request $request)
          {
              $statusUpdate = $request->input('tweet');
              $connection = $this->getAuthorizedTwitterURL();
              
              $status = $connection->post('statuses/update', array('status' => $statusUpdate['text']));
              $query['tweets'] = $request->input('tweet');
              
              return Response::json($query, 200);
          }
          
          private function getAuthorizedTwitterURL(){
              $tokens = array('oauth_token' => self::accessToken,
                    'oauth_token_secret' => self::accessTokenSecret );
              
              $connection = new \Twitter(self::consumerKey, self::consumerSecret, 
                  $tokens['oauth_token'], $tokens['oauth_token_secret']);
              
              $connection->host = 'https://api.twitter.com/1.1/';
              
              return $connection;
          }

      }