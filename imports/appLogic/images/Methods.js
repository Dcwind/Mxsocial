
import { Meteor } from 'meteor/meteor';
import Images from './Images';

Meteor.methods({
    'Images.changeAvatar': function changeAvatar(ImageId) {
        if (ImageId) {
            const Image = Images.findOne({ _id: ImageId });
            if (Image !== undefined) {
                Meteor.users.update(Meteor.userId(), {
                    $set: {
                        'profile.avatar': Image.link(),
                    },
                });
            }
        }
    },
});

