import React from 'react';
import { FormGroup, FormLabel, FormText, FormControl } from 'react-bootstrap'; 

const Input = (props) => {
    return (
        <FormGroup controlId="formBasicEmail">
            <FormLabel>{props.label}</FormLabel>
            {/* 
                Lấy data được truyền vào các props
            */}
            <FormControl 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange}    
            />
            <FormText className="text-muted">
                {props.errorMessage}
            </FormText>
        </FormGroup>
    );
}

export default Input;
