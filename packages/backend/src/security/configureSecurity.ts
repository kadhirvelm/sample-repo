/**
 * Copyright (c) 2021 - REPLACE_ME, Inc
 */

import cors from "cors";
import { Express } from "express";

const CORS_OPTIONS: cors.CorsOptions = {
    origin: [],
    methods: ["GET", "POST", "PUT", "DELETE"],
};

export function configureSecurity(app: Express) {
    app.use(process.env.NODE_ENV === "production" ? cors(CORS_OPTIONS) : cors());
}
