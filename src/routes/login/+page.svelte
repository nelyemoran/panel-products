<script lang="ts">
import type { PageProps } from "./$types";
  let { form }: PageProps = $props();

</script>

<main>
    <form method="POST">
        <h1>INICIAR SESIÓN</h1>
        <div class="field">
            <label for="username">Usuario</label>
            <input id="username" type="text" value={form?.username ?? ''} name="username" autocomplete="username" placeholder="escribe tu usuario" required />
        </div>
        <div class="field">
            <label for="password">Contraseña</label>
            <input id="password" type="password" name="password" autocomplete="current-password" placeholder="contraseña" required>
        </div>
        {#if form?.error}
            <p class="error">{form.error}</p>
        {/if}
    <button type="submit">Iniciar sesión</button>
    </form>
</main>

<style>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f7f4;
}
:global(body) {
    margin: 0;
    font-family: system-ui, sans-serif;
}
form {
    background-color: white;
    width: 100%;
    max-width: 360px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
h1 {
    text-align: center;
    color: #1c7c42;
    font-size: 1.5rem;
    margin-top: 0;
}
label{
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
}
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    font-family: inherit;
}
input:focus {
    outline: none;
    border-color: #1c7c42;
}
button {
    width: 100%;
    padding: 12px;
    background-color: #1c7c42;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: inherit;
}
button:hover {
    background-color: #15602f;
}

.error {
    color: #b00020;
    background-color: #fdecea;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 0 0 16px;
}

</style>