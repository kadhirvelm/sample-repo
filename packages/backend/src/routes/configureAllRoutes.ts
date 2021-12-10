/**
 * Copyright (c) 2021 - REPLACE_ME, Inc
 */

import Express from "express";
import { configureFrontendRoutes } from "./configureFrontendRoutes";

export function configureAllRoutes(app: Express.Express) {
    configureFrontendRoutes(app);
}
