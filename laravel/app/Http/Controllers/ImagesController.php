<?php namespace App\Http\Controllers;

      use App\Http\Controllers\Controller;
      use App\Http\Requests;

      use Illuminate\Support\Facades\Response;
      use Illuminate\Http\Request;

      // Stateless API Call : No Model Associated
      class ImagesController extends Controller {
          
          /**
           * Display a listing of the resource.
           *
           * @return Response
           */
          public function index()
          {   
              $filePath = storage_path() . '/images/';
              $scannedDirectory = array_diff(scandir($filePath), array('..', '.'));
              $relativeHTMLPath = '../laravel/storage/images/';

              $idCount = 0;
              try{
                  $statusCode = 200;
                  $response = [
                          'images' => []
                  ];
                  
                  foreach($scannedDirectory as $image){
                      $getSize = getimagesize( $filePath . $image);
                      $imageSize =  $getSize[0] . 'x' . $getSize[1];
                      
                      $response['images'][] = [
                              'id' => $idCount,
                              'name' => $image,
                              'image_size' => $imageSize,
                              'image_url' => ( $relativeHTMLPath . $image )
                          ];
                      $idCount++;
                  }
                  
              }
              catch (Exception $e){
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
              return \Input::file('file')->move(storage_path() . '\\images\\',
                  \Input::file('file')->getClientOriginalName());
          }
          
          /**
           * Remove the specified resource from storage.
           *
           * @param  int  $id
           * @return Response
           */
          public function destroy(Request $request)
          {
              $imageName = $request->input('image_url');
              $filePath = storage_path() . '\\images\\' . $imageName;
              if( \File::exists($filePath)) {
                  \File::delete($filePath);
              }
              return $response = [ 'images' => [] ];
          }

      }