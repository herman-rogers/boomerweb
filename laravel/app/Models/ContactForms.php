<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactForms extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'contactforms';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'email', 'message'];

}

