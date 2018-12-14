import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';
import './components.scss';

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error:{
                message:""
            }
        }
    }

    LoginHelper(){
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
            this.setState({error});
        })
    }

    render(){
        return(
        <div className="user">
        <header className="user__header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
        <h1 className="user__title">Not a member yet? <Link to = {'/register'}>Sign Up!</Link></h1>
        </header>

    <div className="form">

        <div className="form__group">
            <input type="email" onChange = {e => this.setState({email: e.target.value})} placeholder="Email" className="form__input" />
        </div>

        <div className="form__group">
            <input type="password" onChange = {e => this.setState({password: e.target.value})} placeholder="Password" className="form__input" />
        </div>

        <button type="submit" className="btn"  onClick = {() => {this.LoginHelper()}} >Log in</button>
        <div className = "alert alert-danger">{this.state.error.message}</div>
        </div>
    </div>
        );
    }
}

export default Register;
