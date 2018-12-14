import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import './components.scss';

class Profile extends Component{

    signOutHelper(){
        firebaseApp.auth().signOut().then(() =>  {
            console.log("User has signed out");
        }).catch(err => {
            console.log("err", err);
        })
    }

    render(){
        return(
            <div className="info">
                <div className="headline">Mr. Khan is sorry.</div>
                <br />
                <p className="google"> - Google Assistant</p>
                <button className="logout" type="submit" onClick={()=>this.signOutHelper()}>Log Out</button>
            </div>
        );
    }
}

export default Profile;