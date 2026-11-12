import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    ADMIN_USER: {},
    ADMIN_PASSWORD: {}
});