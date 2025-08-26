const swaggerJSDoc: any = require('swagger-jsdoc');
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API AgriTech Management",
      version: "1.0.0",
      description: "Documentação da API AgriTech",
    },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
