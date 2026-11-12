import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import {sessions} from "#lib/server/sessions";
import { ADMIN_USER, ADMIN_PASSWORD } from "$app/env/private";

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get("username")?.toString();
        const password = data.get("password")?.toString();

        if ( username !== ADMIN_USER || password !== ADMIN_PASSWORD) {
            return fail(401, {error: "Usuario o contraseña incorrectos", username})
        }
        const sessionId = crypto.randomUUID(); // Genera un ID de sesión único
        sessions.add(sessionId); // Guarda el ID de sesion en la lista de sesiones activas
        cookies.set('session', sessionId, { // Establece la cookie de sesión en el navegador del usuario
            path: '/', // La cookie es accesible en todo el sitio
            httpOnly: true, // La cookie no es accesible desde JavaScript del lado del cliente
            sameSite: 'strict', // La cookie solo se enviará en solicitudes del mismo sitio
            maxAge: 60 * 60 * 24, // La cookie expira en 1 día
        });
        redirect(303, '/admin');
    }
} satisfies Actions;


