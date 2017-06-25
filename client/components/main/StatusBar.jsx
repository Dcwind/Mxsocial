import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class StatusBar extends Component{
    constructor(props){
        super(props)

        this.state ={
            image:'',
            filename:''
        };

        this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile(e){
        e.preventDefault();
        
        if (event.currentTarget.files && event.currentTarget.files[0]) {
            const file = event.currentTarget.files[0];

            if (file) {
                const upload = Images.insert({
                    file: event.currentTarget.files[0],
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                }, false);

                upload.on('end', (error, result) => {
                    if (error) {
                        console.log('Error during upload:', error);
                        this.setState({ imageId: '', fileName: '' });
                    } else {
                        this.setState({ imageId: result._id, fileName: result.name });
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