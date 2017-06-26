import React, {Component} from 'react'; 

export default class FeaturesList extends Component{
    

    getFeatures(){
    const features = [ 
        {icon:"fa fa-image fa-2x",bigtext:"See photos and updates",littletext:"from friends in News Feed"},
        {icon:"fa fa-share fa-2x", bigtext:"share lastest happenings", littletext:"with friends on your Timeline"},
        {icon:"fa fa-Search fa-2x",bigtext:"Find more",littletext:"find of what you\'re looking for with Fakebook search"} 
    ]

        return features.map(function(feature){
            return(
                <li key={feature.icon}>
                    <h3 className="btn btn-lg">
                        <i className={feature.icon}></i>
                        <span>
                            <strong>{feature.bigtext}</strong>
                            <small> {feature.littletext}</small>
                        </span>
                    </h3>
                </li>
            )
        })
    }
    
    render(){
        console.log(this.features);
        
        return(
            <div>
                <h2 className="col-md-11 featurelist hidden-xs">
                    Connect with friends and the world around you.
                </h2>
                <ul className="ds-btn hidden-xs">
                    {this.getFeatures()}
                </ul>
            </div>
        )
    }
}

