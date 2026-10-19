# Portafolio de Angello Ruiz

Portafolio personal creado con Next.js. Incluye una presentación, proyectos
front-end, habilidades y enlaces a repositorios de GitHub.

## Tecnologías

- Next.js 13 y React 18
- TypeScript y JavaScript
- Tailwind CSS 4
- Material UI y React Icons

## Requisitos

- Node.js 24.x
- npm

La versión de Node está declarada en `package.json`. Si usas Vercel, selecciona
también **Node.js 24.x** en la configuración del proyecto.

## Instalación y desarrollo

Instala las dependencias:

```bash
npm install
```

Inicia el servidor local:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Los cambios en el código
se reflejan automáticamente mientras el servidor está activo.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Next.js en modo desarrollo. |
| `npm run lint` | Ejecuta el linter de Next.js. |
| `npm run build` | Genera la compilación de producción. |
| `npm run start` | Sirve la compilación de producción; ejecútalo después de `npm run build`. |

Antes de compilar, detén el servidor de desarrollo para evitar que ambos
procesos compartan los archivos generados en `.next`.

## Estructura principal

```text
src/app/
├── page.tsx                   # Página principal
├── about-me/page.tsx          # Página "About me"
├── blog/page.tsx              # Página del blog
├── work-with-me/page.tsx      # Página de contacto/servicios
├── components/                # Componentes de la interfaz
├── globals.css                # Estilos globales y Tailwind CSS
└── layout.tsx                 # Layout, fuentes y metadatos
public/images/                 # Fotografías e imágenes del portafolio
```

Para agregar o reemplazar imágenes, guarda los archivos en `public/images/` y
úsalos desde la interfaz con una ruta como `/images/nombre-del-archivo.png`.

## Despliegue en Vercel

1. Importa el repositorio de GitHub en Vercel.
2. Configura la rama de producción, normalmente `main`.
3. En **Project Settings → General → Node.js Version**, selecciona **24.x**.
4. Despliega el proyecto. Los siguientes cambios en la rama de producción
   iniciarán nuevos despliegues si la integración con GitHub está habilitada.

Documentación útil: [Next.js](https://nextjs.org/docs) y
[despliegue de Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs).
