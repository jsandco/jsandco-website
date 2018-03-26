import { Slingshot }                from 'meteor/edgee:slingshot';

export default (file) =>
new Promise((resolve, reject) => {
  const upload = new Slingshot.Upload('Uploader')
  upload.send(file, (error, url) => {
    if (error) {
      reject(error);
    } else {
      resolve(url);
    }
  });
});
