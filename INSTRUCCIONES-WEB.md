# 🎮 Web de Guías Roblox Studio - LISTA ✅

## ✨ ¿Qué se ha creado?

Una aplicación web interactiva que muestra las guías de Roblox Studio paso a paso, sin necesidad de autenticación.

## 📁 Estructura del Proyecto

```
roblox/
├── contexto/                          # Guías en Markdown
│   ├── guia-roblox-studio-detallada.md
│   ├── guia-roblox-studio-ninos.md
│   └── perfilweb.md
│
└── guia-web/                          # Aplicación Web
    ├── app/
    │   ├── guia/[id]/page.tsx        # Página dinámica de cada guía
    │   ├── page.tsx                   # Página principal
    │   ├── layout.tsx                 # Layout global
    │   └── globals.css                # Estilos
    ├── components/
    │   ├── GuideClient.tsx            # Componente principal
    │   ├── StepNavigation.tsx         # Navegación lateral
    │   └── StepContent.tsx            # Contenido del paso
    └── lib/
        └── guides.ts                  # Lee las guías desde /contexto
```

## 🚀 Cómo Iniciar

### Opción 1: Script rápido
```bash
./iniciar-web.sh
```

### Opción 2: Manual
```bash
cd guia-web
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

## 🎯 Características Implementadas

✅ **Sin autenticación** - Acceso directo a las guías
✅ **Navegación paso a paso** - Botones Anterior/Siguiente
✅ **Menú lateral** - Navegación rápida entre niveles
✅ **Markdown renderizado** - Formato bonito con código destacado
✅ **Diseño responsive** - Funciona en móvil y desktop
✅ **Progreso visual** - Indicador de paso actual
✅ **Dos guías disponibles**:
   - Guía Básica (guia-roblox-studio-ninos.md)
   - Guía Detallada (guia-roblox-studio-detallada.md)

## 📱 Pantallas

### Página Principal
- Lista de guías disponibles
- Descripción de cada guía
- Número de niveles
- Botón para comenzar

### Página de Guía
- Navegación lateral con todos los niveles
- Contenido del paso actual con formato
- Botones de navegación (Anterior/Siguiente)
- Indicador de progreso (Paso X de Y)
- Botón para volver al inicio

## 🎨 Tecnologías Usadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **React Markdown** - Renderizado de Markdown
- **Gray Matter** - Parser de Markdown

## 📝 Cómo Funciona

1. La aplicación lee los archivos `.md` de la carpeta `contexto/`
2. Parsea el contenido y lo divide por niveles (## 🟢, ## 🟡, etc.)
3. Genera rutas dinámicas para cada guía
4. Renderiza el contenido con formato bonito
5. Permite navegar paso a paso

## 🔧 Comandos Disponibles

```bash
npm run dev      # Modo desarrollo (http://localhost:3000)
npm run build    # Compilar para producción
npm run start    # Iniciar en producción
```

## 📦 Dependencias Instaladas

```json
{
  "next": "14.2.35",
  "react": "^18",
  "react-dom": "^18",
  "react-markdown": "^9.0.1",
  "gray-matter": "^4.0.3",
  "@tailwindcss/typography": "^0.5.15"
}
```

## 🎓 Uso para el Niño

1. Abre la web en el navegador
2. Elige una guía (Básica o Detallada)
3. Lee el paso actual
4. Practica en Roblox Studio
5. Haz clic en "Siguiente" cuando termines
6. Repite hasta completar todos los niveles

## 🌟 Ventajas

- **Simple**: Sin registro ni login
- **Offline**: Funciona localmente
- **Rápida**: Carga instantánea
- **Limpia**: Interfaz minimalista
- **Educativa**: Enfocada en el aprendizaje

## 🔄 Actualizar Guías

Para actualizar el contenido:

1. Edita los archivos `.md` en `contexto/`
2. Guarda los cambios
3. Recarga la página web
4. Los cambios se reflejan automáticamente

## 🎉 ¡Listo para Usar!

La web está completamente funcional y lista para que el niño aprenda Roblox Studio paso a paso.
