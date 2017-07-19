import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Images from '../../appLogic/images/images'; 
import Avatar from './Avatar';

 class Profile extends Component {
     constructor(props){
         super(props)

         this.setState({
             klass: 'img-circle img-responsive custom-input-file',
             editMode: false,
             email: '',
         })

         this.uploadFile = this.uploadFile.bind(this);
     }

    componentWillReceiveProps(newProps) {
        if (newProps.ready === true) {
            this.setState({ email: newProps.currentUser.emails[0].address });
        }
    }

     uploadFile(e){
         e.preventDefualt();


     }

    render(){
        
        const {
            currentUser,
            ready,
        } = this.props;

        if (!ready) {
            return <div>Loading...</div>;
        }

        return (
            <div className="row">
                <div className="col-md-2 hidden-xs" align="center">
                <Avatar user={this.currentUser ? this.currentUser._id:''} klass={this.state.klass} />
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

export default createContainer(() => {
    const currentUser = Meteor.user();

    return {
        currentUser,
        ready: !!currentUser
    };

},Profile)