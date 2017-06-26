import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Images from '../../appLogic/images/Images';

export default class StatusBar extends Component{
    constructor(props){
        super(props)

        this.state ={
            imageId:'',
            fileName:''
        };
        this.resetFields = this.resetFields.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    resetFields() {
        this.refs.sharing.value = '';
        this.refs.sharing.focus();
    }

    submitForm(event) {
        event.preventDefault();
        const message = this.refs.sharing.value.trim();
        const imageId = this.state.imageId;
        let imageURL = '';

        if (imageId) {
            const image = Images.findOne({ _id: imageId });
            if (image) {
                imageURL = image.link();
            }
        } else {
            imageURL = '';
        }

        Meteor.call('Posts.insert', message, imageURL, (error) => {
            if (error) {
                console.log(error);
            } else {
                this.setState({ image: '', fileName: '' });
                this.resetFields();
            }
        });
    }

    uploadFile(e){
        e.preventDefault();
        
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            const file = e.currentTarget.files[0];

            if (file) {
                const upload = Images.insert({
                    file: e.currentTarget.files[0],
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                }, false);

                upload.on('end', (error, fileObj) => {
                    if (error) {
                        console.log('Error during upload:', error);
                        this.setState({ imageId: '', fileName: '' });
                    } else {
                        this.setState({ imageId: fileObj._id, fileName: fileObj.name });
                    }
                });

                upload.start();
            }
        }
        
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-content">
                    <div className="panel-heading">
                        update status
                    </div>

                    <form action="" className="form center-block">
                        <input type="hidden"  ref="imageid" value={this.state.image}/>
                        <div className="panel-body">
                            <div className="form-group">
                                <textarea id="sharing"  className="form-control input-lg" placeholder="what do you want to share?" ref="sharing">

                                </textarea>
                                <h3>{this.state.filename||''}</h3>
                            </div>
                            <div>
                                <ul className="pull-left list-inline">
                                    <li>
                                        <input type="file" onChange={this.uploadFile} ref="file" id="file" className="filepicker"/>
                                    </li>
                                    <button className="btn btn-primary btn-sm postbutton">Post</button>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}