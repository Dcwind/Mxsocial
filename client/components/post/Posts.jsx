import React, {Component} from 'react';

export default class Posts extends Component{
    render(){
        return(
          <div className="col-sm-12">
              <div className="panel panel-white post panel-shadow">
                  <div className="post-heading">
                      <div className="pull-left image"> 
                          Avatar
                      </div>
                      <div className="pull-left meta">
                          <div className="title h5">
                              <b>Luke Ascarbar</b>&nbsp; made a post
                          </div>
                          <h6 className="text-muted time">An hour ago</h6>
                      </div>
                  </div>
                  <div className="col-md-12 post-description">
                      <h3>Hello World !</h3>
                      <br/>
                  </div>
                  <div className="col-md-12">Image
                      <br/>
                  </div>
                  <div className="actions">
                      <a href="" className="btn btn-default stat-item">
                          <i className="fa fa-thumbs-up icon"></i>&nbsp; 10 Likes
                      </a>
                  </div>
                  <div className="post-footer">
                      Comments List
                  </div>
              </div>
          </div>
        )
    }
}