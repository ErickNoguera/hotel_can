# 🎬 Erick Film – Catálogo de Películas (Frontend + Backend)

Aplicación full-stack desarrollada para practicar arquitectura cliente-servidor, manejo de componentes, consumo de API y estructura profesional de proyectos.  
Incluye un frontend en React (o similar) y un backend en Node.js — ambos pensados para crecer y escalar.

---

## 🚀 Características Principales

### 🎭 Frontend (React / JavaScript)
- Componentes reutilizables organizados por vistas.  
- Manejo de estado con Hooks.  
- Consumo de API mediante `fetch`.  
- Estilos personalizados (CSS / CSS-Modules / Styled Components).  
- Diseño adaptable y escalable.  

### 🛠️ Backend (Node.js)
- Servidor modular en Node.js.  
- Rutas separadas por responsabilidad.  
- Controladores para lógica limpia.  
- Estructura preparada para integrar base de datos, autenticación o servicios externos.  

---

## 🧰 Stack Tecnológico

| Tecnología     | Rol                          |
|---------------|------------------------------|
| React         | Interfaz de usuario (Frontend) |
| JavaScript    | Lógica del cliente y servidor |
| Node.js       | Servidor backend             |
| CSS / HTML    | Estilos y estructura visual  |
| Git / GitHub  | Control de versiones         |

---

## 🎯 Objetivo del Proyecto

Este proyecto forma parte de mi portafolio como muestra de:

- Desarrollo full-stack desde cero.  
- Buenas prácticas de arquitectura y modularidad.  
- Consumo de API desde el cliente y lógica backend separada.  
- Código limpio, organizado y mantenible.  
- Preparación para escalar con nuevas funcionalidades.  

---

## 📦 Instalación y Ejecución

Clona el repositorio y entra en la carpeta:

```
git clone https://github.com/ErickNoguera/erick_film.git
cd erick_film
```

▶️ Frontend
cd front
npm install
npm start      # o npm run dev

Abre en tu navegador:
http://localhost:3000

🖥️ Backend
cd back
npm install
npm run dev    # o el comando que hayas configurado

📁 Estructura del Proyecto
```
erick_film/
│
├── front/               # Interfaz de usuario
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── views/       # Vistas/páginas
│   │   ├── assets/      # Imágenes, estilos
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── back/                # Servidor / API
│   ├── src/
│   │   ├── routes/      # Endpoints
│   │   ├── controllers/ # Lógica por ruta
│   │   ├── utils/       # Funciones auxiliares
│   │   ├── server.js    # Inicialización
│   │   └── app.js       # Configuración del servidor
│   ├── package.json
│
└── README.md            # Este archivo
``` 
🎥 Funcionalidades

Catálogo de películas con listado.

Vista de detalles para cada película (título, imagen, descripción, etc.).

Consumo de API desde frontend hacia backend.

Estructura modular, limpia y mantenible.

Usuario puede navegar la interfaz (UI básica).

🚧 Posibles Mejoras Futuras

Integrar base de datos real para persistencia (PostgreSQL, MongoDB, etc.).

Añadir sistema de usuarios + autenticación (login, roles).

Agregar filtros, búsqueda, paginación, categorías, rating.

Función de “favoritos” o “watchlist”.

Conectar con APIs externas como TMDB.

Desplegar en producción en servicios como Vercel, Render, Railway o AWS.

🤝 Contribuciones

1 Haz un fork del proyecto.

2 Crea una nueva branch:
```
git checkout -b feature/NuevaFeature
```

3 Aplica tus cambios y haz commit:
```
git commit -m "Agrega nueva funcionalidad"
```

4 Sube la branch:
```
git push origin feature/NuevaFeature
```

5 Abre un Pull Request.

Todas las contribuciones son bienvenidas 🙌

👨‍💻 Autor

Erick Noguera
Desarrollador Backend / Fullstack

🔗 LinkedIn: www.linkedin.com/in/erickyosethnogueraolaizola

🐙 GitHub: https://github.com/ErickNoguera

⭐ Apoya este Proyecto

Si te gustó este repo, dame una ⭐ en GitHub 😉
