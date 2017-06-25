import { Meteor } from 'meteor/meteor';
import {FS} from 'meteor/cfs:filesystem';
import {Collection} from 'meteor/cfs:collection';

Images = new FS.Collection('images',{
    store:[new FS.Store.FileSystem('images',{path:'~/uploads'})]
});

Image.allow({
    insert:()=>{
        return true;
    },
    update:()=>{
        return true;
    },
    remove:()=>{
        return true;
    }
});
