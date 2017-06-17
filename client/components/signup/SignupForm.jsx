import React, {Component} from 'react';

export default class SignupForm extends Component{
     render(){
         return (
             <div className="row">
                 <div className="signup">
                     <h1>Sign Up
                         <h5 className="text-muted">Its's free and always will be.</h5>
                     </h1>
                 </div>
                 <form action="">
                     <div className="col-sm-9">
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