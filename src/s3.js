// Load the SDK and UUID
const AWS  = require('aws-sdk');
var s3Obj = [];

// S3 Parameters and Base Access
var params = {};
const baseAPI = new AWS.S3({apiVersion: '2006-03-01'});

// S3 Functions
s3Obj.setPrefix = (prefix) => {
    params["Prefix"] = prefix;
};

s3Obj.setDelimiter = (delimiter) => {
    params["Delimiter"] = delimiter;
};

s3Obj.configureBucket = (bucket) => {
    params["Bucket"] = bucket;
};

s3Obj.getBucket = () => {
    return params["Bucket"];
};

s3Obj.getAllObjects = () => {
    return objectPromise = baseAPI.listObjects(params).promise();
};

s3Obj.getSpecificObjects = (prefix, delimiter) => {
    s3Obj.setPrefix(prefix);
    s3Obj.setDelimiter(delimiter);

    return objectPromise = baseAPI.listObjects(params).promise();
};

module.exports = s3Obj;