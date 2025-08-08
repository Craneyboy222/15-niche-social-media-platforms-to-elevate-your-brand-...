import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export const uploadFile = async (bucketName: string, key: string, fileContent: Buffer) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fileContent
  };
  return s3.upload(params).promise();
};

export const getFile = async (bucketName: string, key: string) => {
  const params = {
    Bucket: bucketName,
    Key: key
  };
  return s3.getObject(params).promise();
};

export const deleteFile = async (bucketName: string, key: string) => {
  const params = {
    Bucket: bucketName,
    Key: key
  };
  return s3.deleteObject(params).promise();
};

console.log('Storage utilities initialized.');