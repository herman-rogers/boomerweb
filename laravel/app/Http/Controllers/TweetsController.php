<?php namespace App\Http\Controllers;

      use App\Http\Controllers\Controller;
      use App\Http\Requests;
      use App\Posts;

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
              $tokens = array('oauth_token' => self::accessToken,
                              'oauth_token_secret' => self::accessTokenSecret );
              
              $connection = new \Twitter(self::consumerKey, self::consumerSecret, 
                  $tokens['oauth_token'], $tokens['oauth_token_secret']);
              
              $connection->host = 'https://api.twitter.com/1.1/';
              
              $statues = $connection->get("statuses/user_timeline", 
                  array("count" => 10, "exclude_replies" => true));
              
              $query['tweets'] = $statues;
              
              return Response::json($query, 200);
          }

          /**
           * Store a newly created resource in storage.
           *
           * @return Response
           */
          public function store(Request $request)
          {
              //$post = $request->input('post');

              //$response = [
              //            'posts' => []
              //];
              
              //try {
              //    $response['posts'][] = Posts::create(array(
              //        'title' => $post['title'],
              //        'image' => 'http://placehold.it/900x300',
              //        'post_body' => $post['post_body'],
              //        'author' => $post['author'],
              //    ));
              
              //}
              //catch ( \Exception $e) {
              //    return Response::json($response, 400);
              //}
              //return Response::json($response, 200);
          }

          /**
           * Display the specified resource.
           *
           * @param  int  $id
           * @return Response
           */
          public function show($id)
          {
              //
          }

          /**
           * Remove the specified resource from storage.
           *
           * @param  int  $id
           * @return Response
           */
          public function destroy($post)
          {
              //$post->delete();
              //$response['posts'][] = $post;
              //return Response::json($response, 200);
          }

      }
