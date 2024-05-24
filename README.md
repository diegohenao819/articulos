# Prueba técnica para CloudLabs Learning

Este proyecto es una aplicación para crear y eliminar artículos, incluyendo imágenes. La aplicación tiene un backend hecho en Node con Express, y guarda los datos en MongoDB. La interfaz está desarrollada con React.

## Tecnologías Utilizadas

- React
- Axios
- Multer
- MongoDB
- Express

## Instalación
npm install


# Ejecución del Proyecto en modo desarrollo:
npm run dev


# Funcionalidades Principales
Crear ítems: Formulario para crear un artículo y adjuntar una imagen.
Eliminar ítems: Opción para eliminar artículos existentes.
Ver detalles de ítems: Opción para ver los detalles de cada artículo.


# Estructura del Proyecto
src
├── assets
│   └── ...
├── components
│   ├── ArticuloCard.jsx
│   ├── ArticuloDetalles.jsx
│   ├── NavBar.jsx
│   ├── Spinner.jsx
│   ├── articuloCard.css
│   ├── articuloDetalles.css
│   └── navbar.css
├── helpers
│   └── Global.jsx
├── pages
│   ├── ArticulosPage.jsx
│   ├── Crear.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
├── router
│   ├── Routers.jsx
│   └── App.jsx
├── general.css
├── index.css
├── main.jsx
└── ...



# Descripción de Componentes y Páginas
ArticulosPage.jsx: Página principal que muestra todos los artículos.
Crear.jsx: Página con un formulario para crear un nuevo artículo y adjuntar una imagen.
Home.jsx: Página de inicio.
NotFound.jsx: Página de error para rutas no encontradas.
ArticuloCard.jsx: Componente que representa una tarjeta de artículo individual.
ArticuloDetalles.jsx: Componente que muestra los detalles de un artículo específico.
NavBar.jsx: Componente de la barra de navegación.
Spinner.jsx: Componente de carga.



# API
https://articulo-blog.vercel.app/api/

# Endpoints
GET /api/articulos: Obtiene una lista de artículos.
POST /api/articulos: Crea un nuevo artículo.
GET /api/articulos/:id: Obtiene los detalles de un artículo.
DELETE /api/articulos/:id: Elimina un artículo.