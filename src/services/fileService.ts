import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';

class FileService {
  private s3;

  constructor() {
    this.s3 = new AWS.S3();
  }

  async uploadFile(file: Express.Multer.File) {
    const params: PutObjectRequest = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const data = await this.s3.upload(params).promise();
      return data.Location;
    } catch (error) {
      console.error('File upload error:', error);
      throw error;
    }
  }
}

export default new FileService();