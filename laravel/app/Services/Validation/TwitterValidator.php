<?php
namespace App\Services\Validation;

class TwitterValidator extends Validator {
    
    public $rules = array(
        'text' => array( 'required', 'max:255' ),
    );

}