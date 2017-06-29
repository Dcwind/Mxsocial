import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import Header from '../components/Header';
import FeaturesList from '../components/FeaturesList'

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