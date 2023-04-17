// FINISH WITH BONUS PHASE 2 FOR MERN TWITTER AWS

const AWS = require("aws-sdk");
const multer = require("multer");
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const NAME_OF_BUCKET = "5tack"; // <-- Use your bucket name here

 // SINGLE IMAGE UPLOAD
// public is false by default -> must specify if you want a file to be public
const singleFileUpload = async ({ file, public = false }) => {
    const { originalname, buffer } = file;
    const path = require("path");
  
    // Set the name of the file in your S3 bucket to the date in ms plus the
    // extension name.
    // adding time makes sure that the file name is unique
    const Key = new Date().getTime().toString() + path.extname(originalname);
    const uploadParams = {
      Bucket: NAME_OF_BUCKET,
      Key: public ? `public/${Key}` : Key, // will prepend /public if public param is true
      Body: buffer
    };
    const result = await s3.upload(uploadParams).promise();
  
    // Return the link if public. If private, return the name of the file in your
    // S3 bucket as the key in your database for subsequent retrieval.
    return public ? result.Location : result.Key;
  };


  // MULTIPLE IMAGE UPLOAD
  const multipleFilesUpload = async ({files, public = false}) => {
    return await Promise.all(
      files.map((file) => {
        return singleFileUpload({file, public});
      })
    );
  };


  // FOR reconstructing large images that were sent in parts
  const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
      callback(null, "");
    },
  });
  
  // nameOfKey must match name of where you stored data on the frontend
  const singleMulterUpload = (nameOfKey) =>
    multer({ storage: storage }).single(nameOfKey);
  const multipleMulterUpload = (nameOfKey) =>
    multer({ storage: storage }).array(nameOfKey);
  
  module.exports = {
    s3,
    singleFileUpload,
    multipleFilesUpload,
    singleMulterUpload,
    multipleMulterUpload
  };

  // install the needed multer instance on routes where you want to receive files