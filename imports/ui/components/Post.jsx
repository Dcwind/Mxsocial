import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Avatar from './Avatar';

 class Post extends Component{

    
    render(){
        if (this.props.post.imageurl){
              dimage = (
                <div>
                    <div className="panel-thumbnail">
                        <img src={this.props.post.imageurl} className="img-responsive postimage"/>
                    </div>
                </div>
              )
        }
      
        return(
          <div className="col-sm-12">
              <div className="panel panel-white post panel-shadow">
                  <div className="post-heading">
                      <div className="pull-left image"> 
                          <Avatar></Avatar>
                          <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/>
                      </div>
                      <div className="pull-left meta">
                          <div className="title h5">
                              <b>Luke Ascarbar</b>&nbsp; made a post
                          </div>
                          <h6 className="text-muted time">An hour ago</h6>
                      </div>
                  </div>
                  <div className="col-md-12 post-description">
                      <h3>{this.props.post.message}</h3>
                      <br/>
                  </div>
                  <div className="col-md-12"> 
                      {dimage}
                      <br/>
                  </div>
                  <div className="actions">
                      <a href="" className="btn btn-default stat-item">
                          <i className="fa fa-thumbs-up icon"></i>&nbsp; 
                      </a>
                      10 Likes
                  </div>
                  <div className="post-footer">
                      Comments List
                  </div>
              </div>
          </div>
        )
    }
}

// displaying passed in props from Main

export default createContainer((props)=> {

}, Post);