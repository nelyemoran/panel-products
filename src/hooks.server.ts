//Protege /admin
import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";
import { sessions } from "#lib/server/sessions";

export const handle : Handle = async ({ event, resolve }) => { // Manejador de solicitudes entrantes
    const isLoggedIn = sessions.has(event.cookies.get('session') ?? ''); // Verifica si hay una sesión activa mediante la cookie de sesión
    if (event.url.pathname.startsWith('/admin') && !isLoggedIn) {//protege la ruta /admin, si no hay sesión activa redirige a /login
        redirect(303, '/login');
    } 
    return resolve(event); // Continúa con la resolución normal de la solicitud
}