import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <div>
                <span className="navbar-react">
                    <i className="fa fa-facebook">Fakebook</i>
                </span>
                <div className="collapse navbar-collapse" id="navbar">
                    <form role="form" id="signin" className="navbar-form navbar-right">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input type="text" placeholder="Email or Phone Number" id="email" ref="email" className="form-control"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}