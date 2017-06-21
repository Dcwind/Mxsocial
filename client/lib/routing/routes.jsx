import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import {mount} from 'react-mounter';

import HomeLayoutComponent from '../../components/layouts/HomeLayoutComponent';
import DashBoardLayoutComponent from '../../components/layouts/LayoutComponent'

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
            sidebar: <div>Sidebar</div>,
            content: <Main/>
        })
    }
});

// console.log("test");