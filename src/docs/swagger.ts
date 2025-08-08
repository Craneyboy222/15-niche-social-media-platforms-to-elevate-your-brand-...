import { SwaggerDocumentOptions } from '@nestjs/swagger';

const options: SwaggerDocumentOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Enterprise Application API',
      version: '1.0.0',
      description: 'API documentation for the enterprise application with features like user registration, real-time sharing, and chat functionality.',
    },
    servers: [
      {
        url: 'https://api.example.com/v1',
        description: 'Production server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export default options;