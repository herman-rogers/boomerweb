<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Posts;
use App\Services\Validation\PostValidator;
use App\Services\Validation\Exceptions\ValidationException;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class PostsController extends Controller {
    
    protected $_validation;
    
    public function __construct(PostValidator $validator) {
        $this->_validation = $validator;
    }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		try{
			$statusCode = 200;
			$response = [
					'posts' => []
			];
			
			$posts = \DB::table('posts')
                ->orderBy('created_at', 'desc')->get();
			
			foreach($posts as $post){
				$response['posts'][] = [
				    'id' => $post->id,
				    'title' => $post->title,
                    'image' => $post->image,
                    'post_body' => $post->post_body,
                    'author' => $post->author,
				    'created_at' => $post->created_at,
			    ];
			}
			
		} catch (Exception $e){
			$statusCode = 400;
		} finally {
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
        $input = $request->input('post');
        
        try{
            $validateData = $this->_validation->validate($input);
        } catch ( ValidationException $e ) {
            $errors['error'] = $e->get_errors();
            return Response::json($errors, 422);
        }
        
        $createPost = new Posts;
        $response = [
            'posts' => []    
        ];
        try{
            $statusCode = 200;
            $response['posts'] = $createPost->fill($input);
            $createPost->save();
        } 
        catch (\Exception $e) {
            $statusCode = 400;
        }
        finally {
            return Response::json($response, $statusCode);
        }
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
    public $restful = true;

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request, $model)
	{   
        $model->update($request->input()['post']);
        $response['posts'][] = $model;
        return $response;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($post)
	{
        $post->delete();
        $response['posts'][] = $post;
        return Response::json($response, 200);
	}

}
