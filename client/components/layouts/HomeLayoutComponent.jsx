import React, { Component } from 'react';
import SignupForm from '../signup/SignupForm';
import Header from '../header/Header';
import FeaturesList from '../features/FeaturesList'

class HomeLayoutComponent extends Component {
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <FeaturesList/>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <SignupForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default HomeLayoutComponent;