<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Projects;
use App\Services\Validation\ProjectValidator;
use App\Services\Validation\Exceptions\ValidationException;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class ProjectController extends Controller {

    protected $_validation;
    
    public function __construct(ProjectValidator $validator) {
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
					'projects' => []
			];
			
			$projects = \DB::table('projects')
                ->orderBy('created_at', 'desc')->get();;
			
			foreach($projects as $project){
				$response['projects'][] = [
				    'id' => $project->id,
                    'type' => $project->type,
                    'name' => $project->name,
				    'subheading' => $project->subheading,
                    'image' => $project->image,
                    'description' => $project->description,
                    'project_link' => $project->project_link,
                    'code_link' => $project->code_link,
                    'download_link' => $project->download_link,
                    'updated_at' => $project->updated_at,
			    ];
			}
			
		} catch (Exception $e){
			$statusCode = 404;
		} finally {
			return Response::json($response,$statusCode);
		}
	}
    
    public $restful = true;

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
        $input = $request->input('project');
        
        try{
            $validateData = $this->_validation->validate($input);
        }
        catch ( ValidationException $e ) {
            $errors['error'] = $e->get_errors();
            return Response::json($errors, 422);
        }
        
        $createProject = new Projects;
        $response = [
            'projects' => []    
        ];
        try{
            $statusCode = 200;
            $response['projects'] = $createProject->fill($input);
            $createProject->save();
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
                'download_link' => $projects->download_link,
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
	public function update(Request $request, $model)
	{   
        $model->update($request->input()['project']);
        $response['projects'][] = $model;
        return $response;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($project)
	{
        $project->delete();
        $response['projects'][] = $project;
        return Response::json($response, 200);
	}

}
