import { Meteor } from 'meteor/meteor';
import Ads from '../Ads';

Meteor.publish('Ads.list', function() {
    return Ads.find({}, {});
});