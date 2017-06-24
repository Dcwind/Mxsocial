import React, {Component} from 'react';

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
        FS.Utility.eachFile(e,(file)=>{
            Images.insert(file,(err,fileObj)=>{
                this.setState({
                    image:fileObj._id,
                    filename:fileObj.data.blob.name
                });
            });
        });
        
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