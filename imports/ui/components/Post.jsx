import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Avatar from './Avatar';

 class Post extends Component{

    constructor(props){
        super(orops)

        this.likePost = this.likePost.bind(this);
    }

    likePost(e){
        e.preventDefualt();

        const {
            post,
        } = this.props;

        Meteor.call('Posts.like', post._id, (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
    render(){

         const {
            ready,
            post,
            user,
        } = this.props;


        if (!ready) {
            return <div>Loading...</div>;
        }

        if (post.imageurl){
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
                          <Avatar 
                            avatar={user.profile.avatar} 
                            firstName={user.profile.firstname} 
                            lastName={user.profile.lastname} 
                            klass="img-circle avatar" 
                          />

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
    const userhandle = Meteor.subscribe('Users.User', '_id', props.post.user._id);
    const currentUser = Meteor.user();

    let user = null;
    if (userhandle.ready()) {
        user = Meteor.users.findOne({ _id: props.post.user._id });
    }

    return {
        currentUser,
        user,
        ready: !!currentUser && user !== null,
    };
    
}, Post);