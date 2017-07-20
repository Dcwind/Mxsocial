import React, { Component, PropTypes } from 'react';
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
         this.changeEmail = this.changeEmail.bind(this);
         this.toggleEdit = this.toggleEdit.bind(this);
     }

    componentWillReceiveProps(newProps) {
        if (newProps.ready === true) {
            this.setState({ email: newProps.currentUser.emails[0].address });
        }
    }

    toggleEdit() {
        this.setState({ editMode: !this.state.editMode });
    }


    changeEmail(e){
        e.preventDefualt();

        const newEmail = this.refs.email.value.trim();

        if (newEmail !== this.state.email) {
            Meteor.call('Users.changeEmail', newEmail, (error) => {
                if (error) {
                    console.log(error);
                }
            });

            this.setState({ email: newEmail });
        }
            this.toggleEdit();
        
    }

     uploadFile(e){
         e.preventDefualt();

         if (e.currentTarget.files && e.currentTarget.files[0]) {
            const file = e.currentTarget.files[0];

            if (file) {
                const upload = Images.insert({
                    file: e.currentTarget.files[0],
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                }, false);

                upload.on('end', (error, result) => {
                    if (error) {
                        console.log('Error during upload:', error);
                        this.setState({ ImageId: '', fileName: '' });
                    } else {
                        Meteor.call('Images.changeAvatar', result._id, (errorAvatar) => {
                            if (errorAvatar) {
                                console.log('Error during changeAvatar:', errorAvatar);
                            } else {
                                this.setState({ klass: 'img-circle img-responsive custom-input-file updated' });
                            }
                        });
                    }
                });

                upload.start();
            }
        }

     }

    render(){

        const {
            currentUser,
            ready
        } = this.props;

        if (!ready) {
            return <div>Loading...</div>;
        }

        const editMode = <input
            ref="email"
            defaultValue={this.state.email}
            onBlur={this.changeEmail}
            type="text"
        />;

        const fullName = `${currentUser.profile.firstname} ${currentUser.profile.lastname}`;
        const emailLink = `mailto:${currentUser.emails[0].address}`;
        const mailBlock = this.state.editMode ? editMode : <a href={emailLink}>{this.state.email}</a>;


        return (
            <div className="row">
                <div className="col-md-2 hidden-xs" align="center">
                <Avatar avatar={currentUser.profile.avatar} klass={this.state.klass} />
                    <div>
                        <label htmlFor="">
                            <div className="inputWrapper">
                                <input type="file" onChange={this.uploadFile} name="avatar" id="avatar" className="fileInput change-avatar"/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="col-md-9 col-xs-9">
                    <h2>{fullName}</h2>
                    <table className="table table-user-information">
                        <tbody>
                            <tr>
                                <td onClick={this.toggleEdit}>Email</td>
                                <td>{mailBlock}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    currentUser: PropTypes.object,
    ready: PropTypes.bool,
};

export default createContainer(() => {
    const currentUser = Meteor.user();

    return {
        currentUser,
        ready: !!currentUser
    };

},Profile)