<script lang="ts">
    import type {PageProps} from "./$types";

    let { data } : PageProps = $props();
</script>

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

<!--Tabla de Productos-->
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            {#each data.products as product (product.id)}
                <tr>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price.toLocaleString('es-CO')}</td>
                    <td class="num">{product.stock}</td>
                </tr>
                {:else}
                    <tr>
                        <td colspan="4">No hay productos disponibles.</td>
                    </tr>
                {/each}
        </tbody>
    </table>
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

/*Tabla de Productos*/
table {
    width: 100%;
    background-color: white;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
}

th {
    background-color: #a8e7b8;
    color: #1c7c42;
}
tbody tr:hover {
    background-color: #f9fbfa;
}

.num {
    text-align: right;
}
</style>
