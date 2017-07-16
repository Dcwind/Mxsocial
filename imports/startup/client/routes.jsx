import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { render } from 'react-dom';
import {mount} from 'react-mounter';

import HomeLayoutComponent from '../../ui/layouts/HomeLayoutComponent';
import DashBoardLayoutComponent from '../../ui/layouts/DashBoardLayoutComponent';
import Main from '../../ui/components/Main';
import SideBar from '../../ui/components/SideBar';

publicRoutes = FlowRouter.group({
    name: "publicroutes"
});

privateRoutes = FlowRouter.group({
    name: "privateroutes",
    triggersEnter: [
            function(context,redirect){ 
                if(!Meteor.userId() ) { 
                    return FlowRouter.go('/') 
                } 
            }
        ]

});

publicRoutes.route('/',{
    name:'Home',
    action:function(){
        mount(HomeLayoutComponent,{})
    }
});

privateRoutes.route('/dashboard',{
    name:'Dashboard',
    action:function(){
        mount(DashBoardLayoutComponent,{
            sidebar: <SideBar/>,
            content: <Main/>
        })
    }
});

publicRoutes.route('signout',{
    name:'signout',
    action: function(){
        Meteor.logout(function(){
            FlowRouter.go('/');
        })
    }
});

