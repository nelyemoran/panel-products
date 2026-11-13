import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";
import { sessions } from "#lib/server/sessions";

export const handle : Handle = async ({ event, resolve }) => {
    const isLoggedIn = sessions.has(event.cookies.get('session') ?? '');
    if (event.url.pathname.startsWith('/admin') && !isLoggedIn) {
        redirect(303, '/login');
    } 
    return resolve(event);
}