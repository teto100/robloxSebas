# 🎮 Guía Roblox Studio - Web

Web interactiva para seguir las guías de Roblox Studio paso a paso.

## 🚀 Instalación

```bash
cd guia-web
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📁 Estructura

```
guia-web/
├── app/
│   ├── guia/[id]/     # Páginas dinámicas de guías
│   ├── page.tsx       # Página principal
│   ├── layout.tsx     # Layout global
│   └── globals.css    # Estilos globales
├── components/
│   ├── GuideClient.tsx      # Componente principal de guía
│   ├── StepNavigation.tsx   # Navegación lateral
│   └── StepContent.tsx      # Contenido del paso
└── lib/
    └── guides.ts      # Utilidades para leer guías
```

## ✨ Características

- ✅ Navegación paso a paso
- ✅ Markdown renderizado
- ✅ Diseño responsive
- ✅ Sin autenticación
- ✅ Progreso visual
- ✅ Código con sintaxis destacada

## 🎨 Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- React Markdown
