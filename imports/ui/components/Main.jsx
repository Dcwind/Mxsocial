import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import StatusBar from './StatusBar';
import Post from './Post';
import Ad from './Ad';
import Posts from '../../appLogic/posts/Posts';
import Ads from '../../appLogic/ads/Ads';

class Main extends Component{
    render(){

        var adObj = {
                      _id:1,
                      text:'My First Ad',
                      title:'Some Company',
                      image:'http://placehold.it/150x150'
                    };

        const posts = this.props.posts.map((post) => {
            return <Post key={post._id} post={post} />;
        });

        return(
            <div className="col-sm-9 col-sm-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9"> 
                                <StatusBar/>
                                {posts}
                                <button className="btn btn-md">More</button>
                            </div>
                            <div className="col-sm-3"> 
                                <Ads ad={adObj}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    posts: PropTypes.array,
    ads: PropTypes.array,
};

export default createContainer(() => {
    Meteor.subscribe('Posts.list');
    Meteor.subscribe('Ads.list');

    return {
        posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
        ads: Ads.find({}, {}).fetch(),
    };
}, Main);
