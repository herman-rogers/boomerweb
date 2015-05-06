<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use \App\Project;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class ProjectController extends Controller {

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
					'projects' => []
			];
			
			$projects = Project::all();
			
			foreach($projects as $projects){
				$response['projects'][] = [
				    'id' => $projects->id,
                    'type' => $projects->type,
                    'name' => $projects->name,
				    'subheading' => $projects->subheading,
                    'image' => $projects->image,
                    'description' => $projects->description,
                    'project_link' => $projects->project_link,
                    'code_link' => $projects->code_link,
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
                'projects' => []    
            ];
            $statusCode = 200;
            $user = Project::find($id);
            
            $response['projects'][] = [
                'id' => $projects->id,
                'type' => $projects->type,
                'name' => $projects->name,
                'subheading' => $projects->subheading,
                'image' => $projects->image,
                'description' => $projects->description,
                'project_link' => $projects->project_link,
                'code_link' => $projects->code_link,
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
