<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">

    <title>Lista del Super</title>
</head>
<body>
    <h1>Lista del Super</h1>
    <form>
        <div class="div_form">
            <input type="text" name ="input" id = "input"  placeholder="Ingresar Articulo">
            <button id="boton">Ingresar</button>
            <button type="reset" id="limpiar">Limpiar</button>
        </div>
    </form>
    <details open = "true">
        <summary>Lista de Compras!</summary>
        <div class="div-principal"></div>
        <ul class="ul-principal"></ul>
    </details>
    <details open ="true">
        <summary>Lista ya comprados!</summary>
        <div class="div-secundario"></div>
        <ul class="ul-secundario"></ul>
    </details>
    <script src="./js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>

</html>

