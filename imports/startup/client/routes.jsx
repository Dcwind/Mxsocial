import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { render } from 'react-dom';
import {mount} from 'react-mounter';

import HomeLayoutComponent from '../../ui/layouts/HomeLayoutComponent';
import DashBoardLayoutComponent from '../../ui/layouts/DashBoardLayoutComponent';
import Main from '../../ui/components/main/Main';
import SideBar from '../../ui/components/sidebar/SideBar';

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