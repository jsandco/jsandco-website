import s3PublicUrl from 'node-s3-public-url';
import { Meteor } from 'meteor/meteor';
import AWS from 'aws-sdk';

AWS.config = new AWS.Config({
  region: 'eu-central-1',
  s3_signature_version:"v4"
});

AWS.config.accessKeyId = Meteor.settings.private.AWSAccessKeyId;
AWS.config.secretAccessKey = Meteor.settings.private.AWSSecretAccessKey;

const s3 = new AWS.S3();

export default {
  deleteFile(imageUrl, callback) {
    console.log(imageUrl)
    s3.deleteObject({
      Bucket: Meteor.settings.private.AWSBucket,
      Key: imageUrl.replace(Meteor.settings.private.S3UrlToBucket, ''),
    }, Meteor.bindEnvironment((error) => {
      console.log(error, callback, imageUrl)
      if (error) console.warn(error);
      if (!error && callback) callback(imageUrl);
    }));
  },
};
