<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use \App\Posts;
use App\Http\Requests;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class PostsController extends Controller {

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
			
			$posts = Posts::all();
			
			foreach($posts as $post){
				$response['posts'][] = [
				    'id' => $post->id,
				    'title' => $post->title,
                    'post_body' => $post->post_body,
                    'author' => $post->author,
				    'date_created' => $post->date_created,
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
	public function store()
	{
		//
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
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
