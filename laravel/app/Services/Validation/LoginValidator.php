<?php
namespace App\Services\Validation;

class LoginValidator extends Validator {
    
    public $rules = array(
        'email' => array('required', 'email'),
        'password' => array('required'),
    );

}