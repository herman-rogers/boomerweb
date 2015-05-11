<?php
namespace App\Services\Validation;

class ProjectValidator extends Validator {
    
    public $rules = array(
        'type' => array( 'required' ),
        'name' => array( 'required', 'max:255' ),
        'image' => array( 'required' ),
        'subheading' => array( 'max:255' ),
        'description' => array('required', 'max:255')
    );

}