/**
 * Copyright (c) 2021 - REPLACE_ME, Inc
 */

import { ISampleService } from "@sample/api";

export function sampleEndpoint(
    payload: ISampleService["sampleEndpoint"]["payload"],
): Promise<ISampleService["sampleEndpoint"]["response"]> {
    return new Promise((resolve) => {
        resolve({ newPayload: `You sent: ${payload}` });
    });
}
