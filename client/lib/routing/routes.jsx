import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import {mount} from 'react-mounter';

import HomeLayoutComponent from '../../components/layouts/HomeLayoutComponent';
import LayoutComponent from '../../components/layouts/LayoutComponent'

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

privateRoutes.route('/',{
    name:'Dashboard',
    action:function(){
        mount(LayoutComponent,{
            sidebar: <div>Sidebar</div>,
            content: <div>content</div>
        })
    }
});

// console.log("test");