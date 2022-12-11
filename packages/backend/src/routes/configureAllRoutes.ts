/**
 * Copyright (c) 2021 - REPLACE_ME, Inc
 */

import { SampleServiceBackend } from "@sample/api";
import Express from "express";
import { sampleEndpoint } from "../services/sampleService";
import { configureFrontendRoutes } from "./configureFrontendRoutes";

const mockGetToken = () => null;

export function configureAllRoutes(app: Express.Express) {
    configureFrontendRoutes(app);

    SampleServiceBackend(app, mockGetToken, {
        sampleEndpoint: sampleEndpoint,
    });
}
