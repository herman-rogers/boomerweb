<?php

namespace App\Services\Validation;

use Illuminate\Validation\Factory as IlluminateValidator;
use App\Services\Validation\Exceptions\ValidationException;

abstract class Validator {
    
    protected $_validator;
    
    public function __construct( IlluminateValidator $validator ) {
        $this->_validator = $validator;
    }
    
    public function validate( array $data, array $rules = array( ), array $customErrors = array( ) ) {
        if( empty( $rules ) && !empty( $this->rules ) && is_array( $this->rules ) ) {#
            // no rules passed, use the default rules defined in subclass
            $rules = $this->rules;
        }
        $validation = $this->_validator->make( $data, $rules, $customErrors );
        if($validation->fails( ) ) {
            //validation failed, throw exception
            throw new ValidationException( $validation->messages( ) );
        }
        return true;
    } 

}