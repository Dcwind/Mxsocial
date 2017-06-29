import React, { Component } from 'react';
import Navbar from '../components/NavBar';

class DashBoardLayoutComponent extends Component{
    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas rowoffcanvas-left push-down-50">
                        <Navbar/>
                        {this.props.sidebar}
                        {this.props.content}
                    </div>
                </div>   
            </div>
        )
    }
}

export default DashBoardLayoutComponent;