import s3PublicUrl from 'node-s3-public-url';
import { Meteor } from 'meteor/meteor';
import { Slingshot } from 'meteor/edgee:slingshot';

Slingshot.fileRestrictions('Uploader', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/svg', 'image/gif', 'image/svg+xml'],
  maxSize: 1 * 1024 * 1024, // 1MB limit (use null for unlimited)
});

Slingshot.createDirective('Uploader', Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.private.AWSAccessKeyId,
  AWSSecretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
  bucket: Meteor.settings.private.AWSBucket,
  acl: 'public-read',
  region: 'eu-central-1',
  authorize() {
    if (!this.userId) throw new Meteor.Error('need-login', "Vous ne pouvez pas télécharger d'images sans être connecté");
    return true
  },
  key(image) {
    return `images/${image.name}`;
  },
});
