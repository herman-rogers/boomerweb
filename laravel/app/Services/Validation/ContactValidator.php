<?php
namespace App\Services\Validation;

class ContactValidator extends Validator {
    
    public $rules = array(
        'name' => array( 'required', 'max:255' ),
        'email' => array( 'required', 'email' ),
        'message' => array( 'required', 'max:255' )
    );

}