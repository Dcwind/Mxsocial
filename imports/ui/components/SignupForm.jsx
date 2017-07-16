import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';


export default class SignupForm extends Component{
    // registerError
    // mixins = [ReactMeteorData];
    //  getMeteorData(){
    //      let data = {};
    //      data.currentUser = Meteor.user();
    //      return data;
    //  }

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messageClass: 'hidden',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }



     displayError(message){
         this.setState({
             message:message,
             messageClass:'alert alert-danger registerError'
            });
     }

     handleSubmit(e){
         e.preventDefault();

         this.setState({
             message:'',
             messageClass:'hidden'
            });

         var that = this; 
         var first_name =this.refs.first_name.value.trim();
         var last_name =this.refs.last_name.value.trim();
         var email =this.refs.email.value.trim();
         var password =this.refs.password.value.trim();
         var user = {
             email:email,
             password:password, 
             profile:{fullname: (first_name + " " + last_name).toLowerCase(), 
             firstname:first_name, 
             lastname:last_name, 
             avatar:'http://placehold.it/150x150', 
             friends:[]
            } 
        };
         Accounts.createUser(user,(e)=> { 
             
             if(e){
                 that.displayError(e.reason);
             }else{
                 FlowRouter.go('/dashboard');
             }

         });
     }
     render(){
         return (
             <div className="row">
                 <div className="signup">
                     <h1>Sign Up
                         <h5 className="text-muted">Its's free and always will be.</h5>
                     </h1>
                 </div>
                 <form onSubmit={this.handleSubmit}>
                     
                     <div className="col-sm-9">
                         <div className={this.state.messageClass}>{this.state.message}</div>
                         <div className="row">
                             <div className="col-sm-6 form-group">
                                 <input name="first_name" placeholder="First Name" ref="first_name" className="form-control" type="text" />
                             </div>
                             <div className="col-sm-6 form-group">
                                 <input name="last_name" placeholder="Last Name" ref="last_name" className="form-control" type="text" />
                             </div>
                         </div>
                         <div className="form-group">
                             <input name="email" placeholder="Email or Phone Number" ref="email" className="form-control" type="text" />
                         </div>
                         <div className="form-group">
                             <input name="password" placeholder="Password" ref="password" className="form-control" type="password" />
                         </div>
                         <button type="submit" className="btn btn-block">Sign up</button>
                     </div>
                 </form>
             </div>
         )
     }
 }