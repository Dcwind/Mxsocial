import React, {Component} from 'react';

export default class SideBar extends Component{
    // constructor(props){
    //     super(props);
        
    //     this.setState({

    //     });
    //     this.lalla = this.lalla.bind(this);
    // }

    render(){
        return (
            <div className="colunm col-sm-2 col-xs-1 sidebar-offcanvas">
                <ul className="nav">
                    <li>
                        <a href="#" className="visible-xs text-center">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                </ul>
                <ul className="nav hidden-xs" id="lg-menu">

                </ul>
            </div>
        )
    }
}