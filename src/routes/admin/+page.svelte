<main class="container">
    <header class="topbar">
        <h1>Panel De Productos</h1>
        
        <form method="POST" action="?/logout">
            <button type="submit">Cerrar Sesión</button>
        </form>
    </header>

<div>
    <h2>Bienvenido al Panel de Administración</h2>
    <p>Esta es una página provisional para el panel de administración.</p>
</div>
</main>

<style>
:global(body) {
    margin: 0;
    font-family: system-ui, sans-serif;
    background-color: #f3f7f4;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
}

h1 {
    margin: 0;
    color: #1c7c42;
    font-size: 1.5rem;
}

button {
    font-family: inherit;
    padding: 8px 16px;
    background-color: transparent;
    color: #1c7c42;
    border: 1px solid #1c7c42;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

}

button:hover {
    background-color: #1c7c42;
    color: white;
}
</style>
