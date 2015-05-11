<?php
namespace App\Services\Validation;

class PostValidator extends Validator {
    
    public $rules = array(
        'title' => array('required', 'max:255'),
        'image' => array('required'),
        'post_body' => array('required'),
        'author' => array('required', 'max:255')
    );

}