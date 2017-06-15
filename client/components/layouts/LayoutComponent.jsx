import React, { Component } from 'react';

class LayoutComponent extends Component{
    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas rowoffcanvas-left push-down-50">
                        Navbar
                        {this.props.sidebar}
                        {this.props.content}
                    </div>
                </div>   
            </div>
        )
    }
}

export default LayoutComponent;