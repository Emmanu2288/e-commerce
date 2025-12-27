# 🛒 MiTienda - E‑Commerce React App

MiTienda es una aplicación de e‑commerce desarrollada con **React + Vite**, que permite a los usuarios navegar productos, ver detalles, agregarlos al carrito y completar un checkout con integración a **Firebase Firestore**.

---

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) → Frontend rápido y modular
- [React Router](https://reactrouter.com/) → Navegación entre páginas
- [Bootstrap](https://getbootstrap.com/) → Estilos y grid responsivo
- [Firebase](https://firebase.google.com/) → Base de datos Firestore y configuración
- Context API → Manejo global del carrito
- CSS modular → Estilos separados por componente/página

---

## 📁 Estructura de archivos
```
📦 e-commerce
📁src
 📂assets
  -🖼️logo.png               -> Logo de la tienda
  - react.svg
 📂components
  📂 CartWidget
   - Cartwidget.jsx         -> Icono del carrito en la Navbar que muestra la cantidad de ítems y navega al carrito al hacer clic
   📂common
    📂Button
    - Button.css
    - Button.jsx            -> Componente reutilizable de botón con variantes
    📂 Footer
    - Footer.css
    - Footer.jsx            -> Footer del sitio con enlaces y copyright
    📂 ItemCount
    - ItemCount.css
    - Itemcount.jsx         -> Selector de cantidad para agregar al carrito
    📂 ItemDetail
    - ItemDetail.css
    - ItemDetail.jsx        -> Vista detallada de un producto
    📂 ItemList
    - ItemList.css
    - ItemList.jsx          -> Listado de productos en grilla
    📂 Spinner
    - Spinner.css
    - Spinner.jsx           -> Indicador de carga
    📂 NavBar
    - NavBar.css
    - NavBar.jsx            -> Barra de navegación con enlaces y carrito
  📂containers
   📂ItemDetailContainer
    - ItemListContainer.jsx  -> Conecta lógica de producto individual con el componente visual ItemDetail
    📂ItemListContainer
    - ItemListContainer.jsx  -> Conecta lógica de listado de productos con el componente visual ItemList
  📂context
   -CartContext.jsx          -> Contexto global del carrito, maneja estado y funciones como addItem, removeItem, etc.
  📂hooks
   - useCart.js            -> Hook personalizado para acceder y modificar el carrito desde cualquier componente
   - useFetchProducts.js   -> Hook para obtener productos desde Firestore
   - useLocalStorage.js    -> Hook para sincronizar datos con localStorage (ej. persistencia del carrito)
  📂layout                
   - Layout.jsx            -> Layout principal con Navbar y Footer
  📂pages
   📂Cart
    - CartPage.jsx         -> Carrito de compras
    📂Checkout
    - CheckoutForm.jsx     -> Formulario de checkout
    📂Contact
    - ContactPage.jsx      -> Formulario de contacto (guarda en Firestore)
    📂Home                
    - Home.jsx             -> Página principal con listado de productos
  📂services
   - contactService.js     -> Lógica para mensajes de contacto
   - orderService.js       -> Lógica para órdenes 
   - productService.js     -> Lógica para productos
  📂utils
   📂Firebase
    - firebase.js          -> Configuración de Firebase y export de db
  - App.css                -> Estilos globales
  - App.jsx                -> Componente raíz, define rutas y layout
  - index.css              -> Estilos globales
  - main.jsx               -> Punto de entrada de la app, renderiza App
📄 .env                    -> Variables de entorno
📄 .gitignore
📄 index.html
📄 package-lock.json
📄 package.json
📋 README.md
📄 vite.config.js
```

## 🧠 Cómo usar

1. Cloná el repositorio o descargá los archivos.
```bash
git clone https://github.com/Emmanu2288/Prode-2026
```
2. npm install.
```bash
npm install
```
3. Configurar Firebase:
 * Crear un proyecto en Firebase.
 * Copiar las credenciales en `src/utils/Firebase/firebase.js` (en este caso al estar en .env  ***reemplazarlas*** por las siguientes)
 ```bash
const firebaseConfig = {
  apiKey: "-------",
  authDomain: "------",
  projectId: "------",
  storageBucket: "-----",
  messagingSenderId: "-------",
  appId: "------"
};
 ```
4. Ejecutar en desarrollo:
```bash
npm run dev
```
---

## ✨ Funcionalidades
- 📦 Listado de productos con categorías (Electrónica, Joyería, Ropa, etc.)
- 🔍 Detalle de producto con descripción, precio y stock
- 🛒 Carrito de compras con cantidad ajustable
- 💳 Checkout con guardado de órdenes en Firestore
- 📬 Formulario de contacto con guardado de mensajes en Firestore
- 🎨 UI responsiva con Bootstrap y estilos propios

## 📌 Próximas mejoras
- Autenticación de usuarios con Firebase Auth
- Historial de órdenes por usuario
- Integración con pasarela de pagos
- Panel de administración para productos

## 👨‍💻 Autor
Proyecto desarrollado por Manu como práctica de React, Vite y Firebase.

---

## 🛠️ Tecnologías utilizadas

- React
- Vite
- React Router
- Bootstrap
- Firebase
- Context API
- CSS modular
- Hooks personalizados


---

## 📬 Contacto

¿Querés colaborar, sugerir mejoras o expandir el simulador para fases eliminatorias?  
Abrí un issue o escribí directamente.

---

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y recreativos.
