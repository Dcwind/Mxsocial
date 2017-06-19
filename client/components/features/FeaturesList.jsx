import React, {Component} from 'react'; 

export default class FeaturesList extends Component{
    features: [ 
        {icon:"fa fa-image fa-2x",bigtext:"See photos and updates",littletext:"from friends in News Feed"},
        {icon:"fa fa-share fa-2x", bigtext:"share lastest happenings", littletext:"with friends on your Timeline"},
        {icon:"fa fa-Search fa-2x",bigtext:"Find more",littletext:"find of what you\'re looking for with Fakebook search"} 
    ]
    render(){
        var rows = this.features.map(function(feature){
            return(
                <li key={feature.icon}>
                    <h3 className="btn btn-lg">
                        <i className={feature.icon}></i>
                        <span>
                            <strong>{feature.bigtext}</strong>
                            <small>{feature.littletext}</small>
                        </span>
                    </h3>
                </li>
            )
        })
        return(

        )
    }
}