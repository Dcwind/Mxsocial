import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import {mount} from 'react-mounter';

import HomeLayoutComponent from '../../components/layouts/HomeLayoutComponent';
import DashBoardLayoutComponent from '../../components/layouts/DashBoardLayoutComponent';
import Main from '../../components/main/Main';
import SideBar from '../../components/sidebar/SideBar';

publicRoutes = FlowRouter.group({
    name: "publicroutes"
});

privateRoutes = FlowRouter.group({
    name: "privateroutes"
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

// console.log("test");