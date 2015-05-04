<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use \App\User;
use App\Http\Requests;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class UserController extends Controller {

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
					'users' => []
			];
			
			$users = User::all();
			
			foreach($users as $user){
				$response['users'][] = [
				    'id' => $user->id,
				    'email' => $user->email,
			    ];
			}
			
		} catch (Exception $e){
			$statusCode = 404;
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
		try {
            $response = [
                'user' => []    
            ];
            $statusCode = 200;
            $user = User::find($id);
            
            $response['users'][] = [
                'id' => $user->id,
                'email' => $user->email,
            ];
            
        } catch (\Exception $e) {
            $statusCode = 404;
        } finally {
            return Response::json($response, $statusCode);
        }
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
