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
                                <input type="file" name="avatar" id="avatar" className="fileInput change-avatar"/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="col-md-9 col-xs-9">
                    <h2>Luke Ascarbar</h2>
                    <table className="table table-user-information">
                        <tbody>
                            <tr>
                                <td>Email</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}