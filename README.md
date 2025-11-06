# Proyecto Atlantec - Landing Page

Una landing page moderna construida con Astro, TypeScript y Tailwind CSS.

## 🚀 Características

- **Astro** - Framework estático moderno para sitios web rápidos
- **TypeScript** - Tipado estricto para mayor confiabilidad
- **Tailwind CSS** - Framework CSS utility-first para diseño responsive
- **Modo Oscuro** - Toggle automático y manual entre temas claro y oscuro
- **SEO Optimizado** - Meta tags para redes sociales y motores de búsqueda
- **Accesible** - Diseño conforme a estándares WCAG AA
- **Responsive** - Adaptable a todos los tamaños de pantalla

## 🏗️ Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .editorconfig
├── .vscode/
│   └── settings.json
├── astro.config.mjs
├── eslint.config.js
├── prettier.config.js
├── package.json
└── tsconfig.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en el terminal:

| Comando           | Acción                                            |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Instala las dependencias                          |
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/`   |
| `npm run preview` | Previsualiza la build localmente, antes de deploy |
| `npm run lint`    | Ejecuta ESLint en todos los archivos              |
| `npm run format`  | Formatea el código con Prettier                   |

## 🎨 Secciones Incluidas

- **Header** - Navegación fija con toggle de modo oscuro
- **Hero** - Sección principal con llamada a la acción
- **Features** - 3 características destacadas con iconos
- **Testimonials** - 3 testimonios de usuarios con estrellas
- **Pricing** - 3 planes de precios (Básico, Pro, Enterprise)
- **CTA** - Llamada final a la acción
- **Footer** - Enlaces organizados por categorías

## 🛠️ Herramientas de Desarrollo

- **Prettier** - Formateo automático de código
- **ESLint** - Linting para TypeScript y Astro
- **EditorConfig** - Configuración consistente del editor
- **VS Code Settings** - Formateo automático al guardar

## 🌙 Modo Oscuro

El modo oscuro se activa automáticamente según las preferencias del sistema y se puede alternar manualmente con el botón en el header. La preferencia se guarda en localStorage.

## 📱 Responsive Design

El diseño se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop**: Layout completo en grillas
- **Tablet**: Grillas adaptadas
- **Mobile**: Diseño de una columna

## 🚀 Deployment

Para construir el sitio para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/` y pueden ser desplegados en cualquier servidor estático.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
