//Cierre de sesión
import { redirect } from "@sveltejs/kit";
import { sessions } from "#lib/server/sessions";
import type { Actions } from "./$types";

export const actions = {
    logout: async ({ cookies }) => {
        const sessionId = cookies.get('session'); // Obtiene el ID de sesión de la cookie
        if (sessionId) {
            sessions.delete(sessionId); // Elimina el ID de sesión de la lista de sesiones activas  
        }
        cookies.delete('session', { path: '/' }); // Elimina la cookie de sesión del navegador del usuario
        redirect(303, '/login'); // Redirige al usuario a la página de inicio de sesión
    } 
} satisfies Actions;