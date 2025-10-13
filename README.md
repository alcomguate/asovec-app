# ASOVEC App

Sistema de gestión de pagos de mantenimiento para inmuebles desarrollado con Next.js 14 y NextUI v2.

## 📋 Descripción

ASOVEC App es una aplicación web para la gestión de pagos de mantenimiento de propiedades inmobiliarias. Permite visualizar inmuebles organizados por manzanas, registrar pagos de mantenimiento y llevar un control detallado de las transacciones.

## ✨ Características

- 🏠 **Gestión de Inmuebles**: Visualización de propiedades organizadas por manzana y lote
- 💳 **Registro de Pagos**: Interfaz intuitiva para registrar pagos de mantenimiento
- 📅 **Control Temporal**: Seguimiento de pagos por mes y año
- 🎨 **UI Moderna**: Interfaz responsive construida con NextUI y Tailwind CSS
- 🌙 **Modo Oscuro**: Soporte para temas claro y oscuro
- 📱 **Responsive**: Diseño adaptable para dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework de React con App Router
- [NextUI v2](https://nextui.org/) - Biblioteca de componentes UI
- [HeroUI](https://heroui.com/) - Componentes adicionales de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript con tipos
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones
- [React DatePicker](https://reactdatepicker.com/) - Selector de fechas
- [next-themes](https://github.com/pacocoursey/next-themes) - Gestión de temas

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ instalado
- npm, yarn, pnpm o bun como gestor de paquetes

### 1. Clonar el repositorio

```bash
git clone https://github.com/alcomguate/asovec-app.git
cd asovec-app
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env.local` y configura las variables:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores:

```bash
ASOVEC_HOSTNAME="http://localhost"
ASOVEC_PORT=8081
ASOVEC_DEBUG=True
ASOVEC_API_KEY="tu_clave_api_aqui"
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
asovec-app/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   │   ├── inmueble/      # Endpoints de inmuebles
│   │   └── pagoinmueble/  # Endpoints de pagos
│   ├── inmueble/          # Páginas de inmuebles
│   ├── pago/              # Páginas de pagos
│   └── ingresopago/       # Página de ingreso de pagos
├── components/            # Componentes reutilizables
│   ├── inmueble/          # Componentes específicos de inmuebles
│   │   ├── FilterManzana/ # Filtro de manzanas
│   │   ├── MonthSelector/ # Selector de meses
│   │   └── PagoMantenimientoModal/ # Modal de pagos
│   ├── navbar.tsx         # Barra de navegación
│   └── theme-switch.tsx   # Selector de tema
├── config/                # Configuraciones
├── public/                # Archivos estáticos
├── styles/                # Estilos globales
└── types/                 # Definiciones de tipos TypeScript
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo con Turbopack
npm run dev

# Construir para producción
npm run build

# Ejecutar versión de producción
npm run start

# Linting y formateo
npm run lint
```

## 🌐 API Endpoints

### Inmuebles

- `GET /api/inmueble/[manzanaId]` - Obtiene inmuebles por manzana
- `POST /api/pagoinmueble` - Registra un nuevo pago de mantenimiento

### Estructura de Datos

#### Inmueble
```typescript
interface Inmueble {
  id: string;
  manzana: string;
  lote: string;
  direccion?: string;
  nombreTitular?: string;
}
```

#### Pago
```typescript
interface Pago {
  descripcion: string;
  fecha: string;
  monto: number;
  inmueble: {
    direccion: string;
    lote: string;
    manzana: string;
  };
}
```

## 🎨 Personalización de Temas

El proyecto utiliza `next-themes` para el manejo de temas. Los temas están configurados en:

- `tailwind.config.js` - Configuración de colores y temas
- `app/providers.tsx` - Proveedor de temas
- `components/theme-switch.tsx` - Componente para cambiar tema

## 📱 Funcionalidades Principales

### 1. Visualización de Inmuebles
- Lista de inmuebles organizados por manzana
- Vista en grid responsive (1 columna en móvil, 4 en desktop)
- Información detallada de cada propiedad

### 2. Registro de Pagos
- Modal con formulario completo
- Validación de campos requeridos
- Selector de fecha con DatePicker
- Notificaciones toast para feedback

### 3. Navegación
- Rutas dinámicas para manzanas
- Parámetros de búsqueda para filtrado
- Navegación programática entre páginas

## 🔒 Seguridad

- Variables de entorno para configuración sensible
- API Keys protegidas en el servidor
- Validación de formularios en cliente y servidor
- Sanitización de datos de entrada

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en el dashboard
3. Despliega automáticamente

### Otros Proveedores

```bash
# Construir para producción
npm run build

# La carpeta .next/ contiene los archivos optimizados
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Equipo ASOVEC** - Desarrollo inicial

## 🙏 Agradecimientos

- NextUI por los componentes de UI
- Vercel por la plataforma de despliegue
- La comunidad de Next.js por la documentación y recursos

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
