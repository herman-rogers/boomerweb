<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Projects extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'projects';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['type', 'name', 'subheading', 'image', 'description', 
        'project_link', 'code_link' ];

}

