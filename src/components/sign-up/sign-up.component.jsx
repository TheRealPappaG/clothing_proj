import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../assets/firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super()
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password and confirm password do not match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })
        }
        catch(error){
            console.error(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className = "sing-up">
                <h2 className = "title"> I do not have an account</h2>
                <span>Sign up with yout email and password</span>
                <form className = "sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput 
                        type = "text"
                        name = "displayName"
                        value = {displayName}
                        label = "Name"
                        onChange = {this.handleChange}
                        required
                    />
                    <FormInput 
                        type = "email"
                        name = "email"
                        value = {email}
                        label = "Email"
                        onChange = {this.handleChange}
                        required
                    />
                    <FormInput 
                        type = "password"
                        name = "password"
                        value = {password}
                        label = "Password"
                        onChange = {this.handleChange}
                        required
                    />
                    <FormInput 
                        type = "password"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        label = "Confirm Password"
                        onChange = {this.handleChange}
                        required
                    />
                    <CustomButton type = "submit">Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp