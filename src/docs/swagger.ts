import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerAutogen from "swagger-autogen";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "2.0.0",
      contact: {
        name: "API Support",
        email: "support@yuanta.com.vn",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: string) {
  // Swagger page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`🚀 Docs available at http://localhost:${port}/api-docs`);
}
const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./src/routes/*.ts"];

let swagger: any = swaggerAutogen(outputFile, endpointsFiles, options);

swagger.then(() => {
  require("../index"); // Your project's root file
});

export default swaggerDocs;
