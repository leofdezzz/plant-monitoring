# 🌿 Plant Monitoring Dashboard

Un dashboard en tiempo real para monitorizar las condiciones ambientales de tus plantas. Este proyecto visualiza datos de temperatura y humedad, ayudándote a mantener tus plantas felices y saludables.

![Plant Monitoring Dashboard](/plant.png)

## ✨ Características

- **Monitorización en Tiempo Real**: Visualización instantánea de la temperatura y humedad actuales.
- **Gráficos Históricos**: Gráfico interactivo (Chart.js) que muestra la evolución de las lecturas a lo largo del tiempo.
- **Actualización Automática**: Los datos se refrescan automáticamente cada 15 segundos sin necesidad de recargar la página.
- **Diseño Responsivo**: Interfaz limpia y moderna adaptada a dispositivos móviles y de escritorio.
- **Indicadores Visuales**: Diseño intuitivo con tarjetas y estadísticas claras.

## 🛠️ Tecnologías

Este proyecto está construido con:

- **[Astro](https://astro.build/)**: Framework web para construir sitios rápidos y optimizados.
- **[Chart.js](https://www.chartjs.org/)**: Librería para la visualización de datos en gráficos.
- **HTML5 & CSS3**: Estilizado moderno con variables CSS y diseño flexbox.
- **JavaScript (ES6+)**: Lógica del cliente para la obtención de datos y renderizado de gráficos.

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en tu terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza tu build localmente                 |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 📂 Estructura del Proyecto

```text
/
├── public/
│   └── plant.png        # Imágenes estáticas
├── src
│   ├── pages
│   │   ├── api          # Endpoints de API simulados
│   │   └── index.astro  # Página principal del dashboard
│   └── ...
└── package.json
```
