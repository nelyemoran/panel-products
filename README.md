# Panel de productos

Mini panel administrativo hecho con SvelteKit y TypeScript. Es un proyecto de práctica para aprender autenticación, formularios y rutas protegidas.

## Funcionalidades

- [x] Pantalla de inicio de sesión con diseño propio
- [x] Validación de usuario y contraseña con form actions
- [x] Sesión con cookie (`httpOnly` y `sameSite`)
- [x] Credenciales guardadas en variables de entorno
- [ ] Rutas protegidas con `hooks.server.ts`
- [ ] Cierre de sesión
- [ ] Lista de productos
- [ ] Crear, editar y eliminar productos

## Tecnologías

- SvelteKit
- TypeScript
- CSS

## Cómo correrlo

1. Clona el repositorio y entra a la carpeta.
2. Instala las dependencias: `npm install`
3. Copia `.env.example` a `.env` y completa los valores de usuario y contraseña.
4. Inicia el servidor: `npm run dev`

## Lo que estoy aprendiendo

- Form actions: recibir y validar formularios en el servidor, con mensajes de error
- Sesiones con cookies
- Variables de entorno en SvelteKit
- Protección de rutas con hooks