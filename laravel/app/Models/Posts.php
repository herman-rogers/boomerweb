<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'posts';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['title', 'image', 'post_body', 'author'];

}

