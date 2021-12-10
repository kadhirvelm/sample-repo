/**
 * Copyright (c) 2021 - REPLACE_ME, Inc
 */

export const ORIGIN = process.env.ORIGIN ?? "127.0.0.1";
export const PORT = process.env.BACKEND_PORT ?? 3002;

export const getBackendUrlFromFrontend = () =>
    process.env.NODE_ENV === "development" ? `http://${ORIGIN}:${PORT}` : window.location.origin;
