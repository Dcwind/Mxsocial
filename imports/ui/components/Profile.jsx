import React, { Component } from 'react';

export default class Profile extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-2 hidden-xs" align="center">
                Avater
                    <div>
                        <label htmlFor="">
                            <div className="inputWrapper">
                                <input type="file" name="" id="" className="fileInput change-avatar"/>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}