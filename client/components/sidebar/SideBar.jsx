import React, {Component} from 'react';

export default class SideBar extends Component{
    // constructor(props){
    //     super(props);
        
    //     this.setState({

    //     });
    //     this.lalla = this.lalla.bind(this);
    // }
    getLink(){
        const link = [
            {_id:1, href:'/profile',icon:'fa fa-user fa-2x',text:'Profile'},
            {_id:1, href:'/dashboard',icon:'fa fa-rss fa-2x',text:'News Feed'},
            {_id:1, href:'/messages',icon:'fa fa-comment fa-2x',text:'Messages'},
            {_id:1, href:'/friends',icon:'fa fa-users fa-2x',text:'Friends'}
        ]
    }

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