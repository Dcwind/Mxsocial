import React, { Component, PropTypes } from 'react';
// import $ from 'jquery';
import { createContainer } from 'meteor/react-meteor-data';

class NavBar extends Component{

    constructor(props){
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
        const users = Meteor.users.find({}, { fields: { profile: 1 } }).fetch();
        const usernames = users.map((user) => {
            return user.profile.fullname;
        });

        $('#typeahead').typeahead({
            name: 'users',
            local: usernames
        });
    }    

    handleSubmit(e){
        e.preventDefualt();

        const searchText = (this.refs.searchText.value).trim();

        if(searchText !== ""){
            FlowRouter.go('/user/' + searchText);
        }
    }
    render(){
        const fullname = '${currentUser.profile.firstname} ${currentUser.profile.lastname}';

        const {
            currentUser,
            ready,
        } = this.props;

        if (!ready) {
            return <div>Loading...</div>;
        }

        return(
            <div className="navbar navbar-blue navbar-fixed-top">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="navbar">
                        <span className="sr-only"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <a href="/dashboard" className="navbar-brand logo">
                <i className="fa fa-facebook"></i>
            </a>

            <nav className="collapse navbar-collapse">
                <form onSubmit={this.handleSubmit} role="form" className="navbar-form navbar-left">
                    <div className="input-group input-group-sm bs-example">
                        <input type="text" ref="searchText" className="form-control tt-query" id="typeahead"/>
                        <div className="input-group-btn searchBtn">
                            <button type="submit" className="btn btn-default">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/dashboard">
                            <i className="fa fa-home"> News Feed</i>
                        </a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                            <i className="fa fa-user"> {fullname}</i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="/profile">Edit Profile</a>
                            </li>
                            <li>
                                <a href="/signout">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                
            </nav>
            </div>
            
            
             
        )
    }
}

NavBar.propTypes = {
    currentUser: PropTypes.object,
    ready: PropTypes.bool,
};

export default createContainer(() => {
    const currentUser = Meteor.user();

    return {
        currentUser,
        ready: !!currentUser,
    };
}, NavBar);

