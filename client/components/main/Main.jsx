import React, {Component} from 'react';
import StatusBar from './StatusBar';

export default class Main extends Component{
    render(){
        return(
            <div className="col-sm-9 col-sm-11" id="main">
                <div className="full col-sm-9">
                    <div className="row">
                        <div className="col sm 9"> 
                            <StatusBar/>
                            Posts 
                            <button className="btn btn-md">More</button>
                        </div>
                        <div className="col-sm-3">
                            Ads
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
