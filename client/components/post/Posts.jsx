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
                              <b>Luke Ascarbar</b>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}