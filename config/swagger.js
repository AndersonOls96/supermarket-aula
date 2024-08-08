const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Supermarket API',
    description: 'API para gerenciar produtos de um supermercado',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/ProductRoutes.js'];

// Gerar o swagger_output.json
swaggerAutogen(outputFile, endpointsFiles, doc);
