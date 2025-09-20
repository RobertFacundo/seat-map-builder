# Prueba Tecnica- Seat Map Builder

**¡El proyecto está en vivo!** 

Puedes ver una demostración interactiva aquí: [https://seat-map-builder.vercel.app](https://seat-map-builder.vercel.app)

## 1. Evolución Cronológica del Proyecto
Desarrollé este proyecto en varias fases, empezando por la definición de la estructura y la lógica, para luego pasar a la construcción de los componentes y la implementación de las funcionalidades clave.

### - Definición de la Estructura y Lógica:

- Planifiqué los pasos iniciales y la arquitectura del proyecto, decidiendo cómo iba a implementar las distintas funcionalidades.

- Creé los tipos de datos (types/index.ts) y las interfaces para la estructura del mapa de asientos, incluyendo Seat y Row. A la interfaz Row le añadí las propiedades x e y para gestionar la posición de cada fila.

- Implementé las funciones principales en el archivo de servicios (services/mapServices.ts), lo que me permitió manejar la lógica de negocio de la aplicación: createNewRows, deleteSelectedRows, toggleRowSelection, toggleSeatSelection y deleteSeat.

### - Construcción y Refactorización de Componentes:

- Creé los componentes principales: SeatMapComponent (que actúa como contenedor de las filas), RowComponent y SeatComponent.

- Refactoricé el ControlsPanel para que tuviera un enfoque más claro, centrando su funcionalidad en la creación y el etiquetado de filas.
  
- Implementé el renderizado inicial de las filas y los asientos, y realicé mejoras visuales en los componentes.

### - Implementación de la Funcionalidad "Drag and Drop" de Filas:

- Para añadir la funcionalidad de arrastre, utilicé la librería @dnd-kit/core. Envolví el componente SeatMapComponent con DndContext para habilitar el contexto de arrastre.

- En el RowComponent, usé el useDraggable hook para que cada fila fuera arrastrable.

- Implementé la lógica en el useSeatMap hook, donde la función handleDragEnd actualiza la posición (x, y) de la fila en el estado global del mapa de asientos.

- Para solucionar el conflicto entre el arrastre y los clics de selección, opté por una estrategia de "handle de arrastre". Creé un div específico (el "handle") dentro del RowComponent que contiene las propiedades del useDraggable (ref, listeners, attributes).

- Este diseño me permitió que el resto de la fila fuera clickeable para la selección, mientras que el arrastre solo se activa al interactuar con el "handle". También implementé la lógica de e.stopPropagation() en los asientos para evitar que los clics en ellos se propagaran y activaran la selección de la fila.
  
### - Implementación del Etiquetado Rápido de Filas (Batch Labeling):

- Añadí la funcionalidad de etiquetado por lotes para re-etiquetar múltiples filas seleccionadas con un patrón de numeración consistente.

- Creé una nueva función en el archivo de servicios (services/mapServices.ts), batchLabelSelectedRows, que itera sobre las filas seleccionadas y les asigna una nueva etiqueta y un nombre de sección basados en la entrada del usuario.

- Para mantener la consistencia del mapa, diseñé la lógica para que solo las filas seleccionadas se re-etiquetaran. Las filas no seleccionadas conservan su numeración y propiedades originales, lo que previene re-indexaciones inesperadas.

- Refactoricé los componentes (ControlsPanel y SeatComponent) para soportar esta funcionalidad. Creé un formulario dedicado (BatchLabelingForm) para capturar la etiqueta base y el índice de inicio, y me aseguré de que el tooltip de los asientos reflejara con precisión la nueva etiqueta y sección de la fila.
  
### - Estilos
Antes de implementar las funcionalidades de importación y exportación en formato JSON, decidí priorizar la estilización completa de la aplicación. Esta fase incluyó:

- Estilos de componentes: Estilicé las filas, asientos y el panel de control para mejorar la interfaz de usuario.

- Gestión de fuentes: Integré una fuente de Google Fonts para unificar la tipografía de la aplicación.

- Mejoras de UI: Agregué efectos de hover, colores de selección y un fondo cohesivo para una experiencia de usuario más atractiva.

### - Implementación de Funcionalidades de Importación y Exportación JSON
- Exportación de Mapas: Implementé una función de exportación que permite al usuario descargar el estado actual del mapa de asientos como un archivo .json. Antes de la descarga, se solicita un nombre para el archivo, lo que facilita la gestión y organización de los mapas.

- Importación de Mapas: Desarrollé una función de importación que permite al usuario cargar un archivo .json de su sistema. Esta función incluye una validación robusta del esquema de datos para asegurar que el archivo importado sea compatible con la aplicación, previniendo errores de renderizado. Si el archivo es válido, reemplaza el estado actual del mapa, permitiendo la reanudación de una sesión de trabajo guardada previamente.

- Manejo del Estado Consistente: Para asegurar la correcta serialización y deserialización de los datos, unifiqué todas las variables de estado del mapa (rows, nextYPosition, nextRowId, nextSeatId) en un solo objeto. 

## 2. Gestión del Proyecto y Cronograma
Este proyecto fue completado en un plazo de **72 horas**, con una dedicación total de **17 horas y 5 minutos**. El trabajo se organizó en bloques de tiempo a lo largo de varios días para gestionar la carga de manera eficiente.

*Tengo total disponibilidad (24/7) para distribuir los bloques de trabajo en cualquier franja horaria para gestionar la carga de manera eficiente.*

### Distribución de Tareas por Día

* **17 de Septiembre**
    * **Bloque 1:** (13:09 - 16:48 | **3h 39m**) - Definición de interfaces de tipos, implementación de la lógica inicial, y estructura de los componentes principales (`SeatMap` y `ControlsPanel`).
    * **Bloque 2:** (17:36 - 20:22 | **2h 46m**) - Mejoras en la funcionalidad de agregar filas y creación de funciones pertinentes en los servicios.
* **18 de Septiembre**
    * **Bloque 3:** (13:39 - 17:23 | **3h 44m**) - Implementación de la funcionalidad de "Drag and Drop", rotación de filas y etiquetado por lotes (`batch labeling`).
    * **Bloque 4:** (18:09 - 21:03 | **2h 54m**) - Estilización completa del proyecto y reajustes de código para asegurar la coherencia visual.
    * **Bloque 5:** (23:15 - 01:17 | **2h 02m**) - Implementación de la funcionalidad de importación y exportación de archivos JSON.
* **19 de Septiembre**
    * **Bloque 6:** (10:59 - 12:16 | **1h 17m**) - Implementación de la responsividad, ajustes finales en los estilos de la aplicación, y configuración del favicon y el título.
    * **Bloque 7:** (15:17 - 16:00 | **43m**) - Completando la documentación final y los entregables del proyecto.

## 3. Arquitectura y Estructura del Código

### Árbol de Directorios

La arquitectura del proyecto sigue una estructura de "feature-based", separando la lógica de negocio y los componentes de la interfaz de usuario en directorios dedicados (`hooks`, `services`, y `components`). Este enfoque facilita la escalabilidad y la mantenibilidad, permitiendo a los desarrolladores ubicar rápidamente la lógica y la UI de cualquier funcionalidad.

```bash
src
    │   prompts.jsonl
    │
    ├───app
    │       globals.css
    │       icon.png
    │       layout.tsx
    │       page.module.css
    │       page.tsx
    │
    ├───components
    │       BatchLabelingForm.tsx
    │       ControlsPanel.tsx
    │       CreateRowsForm.tsx
    │       Footer.tsx
    │       Header.tsx
    │       Row.tsx
    │       RowActions.tsx
    │       RowRotation.tsx
    │       Seat.tsx
    │       SeatMap.tsx
    │
    ├───hooks
    │       useBatchLabelingForm.ts
    │       useCreateRowsForm.ts
    │       useSeatMap.ts
    │
    ├───public
    ├───services
    │       mapServices.ts
    │       validation.ts
    │
    ├───styles
    │       BatchLabelingForm.module.css
    │       Buttons.module.css
    │       ControlsPanel.module.css
    │       CreateRowsForm.module.css
    │       Footer.module.css
    │       Row.module.css
    │       RowActions.module.css
    │       RowRotation.module.css
    │       Seat.module.css
    │       SeatMap.module.css
    │
    └───types
            index.ts
```

### Esquema de Datos y Lógica

La aplicación gestiona su estado global mediante un único objeto central, `SeatMap`, que se define en `types/index.ts`. Esta estructura jerárquica y coherente es fundamental para el manejo de la lógica de negocio y simplifica la serialización (para importar y exportar datos) y la persistencia del estado. 

A continuación, se detalla la estructura de los datos:

* **`SeatMap`**: El objeto principal que contiene todas las filas (`Row[]`) y los metadatos necesarios para gestionar la creación de nuevos elementos de forma consistente.
* **`Row`**: Cada fila es un objeto con propiedades que definen su identidad, apariencia y posición.
* **`Seat`**: Cada asiento es un objeto simple con propiedades para su identificación y estado.

Este esquema bien definido garantiza la robustez de la aplicación y la integridad de los datos en todas sus funcionalidades.

```typescript
export interface Seat {
  id: string;
  label: string;
  isSelected: boolean;
}

export interface Row {
  id: string;
  label: string;
  section: string;
  color: string;
  seats: Seat[];
  isSelected: boolean;
  x: number;
  y: number;
  rotation: number;
}

export interface SeatMap {
  rows: Row[];
  nextYPosition: number;
  nextRowId: number;
  nextSeatId: number;
}
```

## 4. Decisiones de Diseño y Supuestos

### Arquitectura del Estado y Lógica

Una de las decisiones principales fue la separación de responsabilidades entre la lógica de negocio y la interfaz de usuario.

Para lograrlo:

- Uso de Hooks Personalizados: Toda la lógica del mapa (gestión del estado, funciones de manipulación y cálculo) se extrajo en el useSeatMap hook. Esto permite que los componentes de la UI (como SeatMapComponent y ControlsPanel) sean puros y solo se centren en renderizar la interfaz y manejar eventos de usuario. Este enfoque promueve la reutilización de la lógica y hace que el código sea más legible y fácil de mantener.

- Gestión de Estado (Prop Drilling): Para este MVP, se decidió utilizar el paso de propiedades (prop drilling) para comunicar el estado a través de los componentes. Para la escala actual del proyecto, esta es una solución simple, legible y eficiente. Se consideró que el uso de librerías más complejas como React Context o Redux habría introducido una complejidad innecesaria y boilerplate para un proyecto de este tamaño, comprometiendo la agilidad del desarrollo.

### Supuestos y Compromisos del MVP

Para cumplir con el cronograma, se hicieron los siguientes supuestos que podrían ser considerados para futuras mejoras:

- Escalabilidad: Se asumió que la aplicación manejaría un número de filas y asientos en un rango moderado. En un entorno de producción con miles de elementos, sería necesario implementar técnicas de rendimiento como la virtualización de listas (react-window o react-virtualized) para optimizar el renderizado y la fluidez.

- Experiencia de Usuario: La rotación de filas se implementó a través de un campo de entrada numérico. En una versión futura, esto podría mejorarse con un control de rotación más visual e intuitivo, como un "handle" de rotación interactivo directamente en el componente de la fila, lo que ofrecería una experiencia de usuario más fluida.
## 5. Registro de Colaboración con IA

La Inteligencia Artificial (Geminis) fue una herramienta fundamental en el desarrollo de este proyecto, sirviendo como un compañero de programación en lugar de un simple generador de código. Se utilizó para:

- Validación y Corroboración: Corroborar la lógica y las decisiones de arquitectura que definí, desde la estructura de los tipos de datos hasta la separación de componentes en la interfaz de usuario.

- Resolución Colaborativa de Problemas: Ayudar a diagnosticar y resolver problemas complejos, como los conflictos de scroll y la implementación de las transiciones CSS en los gradientes.

- Refactorización y Mejoras: Explorar en conjunto posibles mejoras y optimizaciones, como la refactorización de la lógica en hooks y el diseño del README.md.

Para documentar este proceso de manera transparente y detallada, se ha incluido el archivo prompts.jsonl. Este documento contiene un registro curado de las interacciones clave con la IA, mostrando las preguntas que se hicieron, el propósito de cada una y las decisiones que se tomaron como resultado de la colaboración.

## 6. Comentarios y Mejoras Futuras

Este proyecto fue desarrollado bajo un plazo de tiempo limitado, priorizando un MVP funcional con una arquitectura limpia. Soy consciente de que hay áreas que se podrían mejorar para un entorno de producción. Las siguientes son posibles evoluciones para el proyecto:

### Gestión de Estilos

Por simplicidad y agilidad, se utilizaron módulos de CSS. Sin embargo, para un proyecto más grande, se podría refactorizar para usar una librería de estilos como Sass, Styled Components, o una librería de componentes como MUI, lo que permitiría una gestión más organizada y escalable de los estilos sin presentar una dificultad significativa.

### Gestión de Estado

Para un proyecto de mayor escala, el prop drilling actual podría volverse complejo. Se podría refactorizar el estado para utilizar React Context API, lo que proporcionaría un acceso más directo al estado del mapa sin la necesidad de pasar props a través de múltiples niveles de componentes.


### Experiencia de Usuario (UX)

Se podrían implementar mejoras significativas en la interfaz para una mayor fluidez. Esto incluiría:

- Un control de rotación más intuitivo directamente en la fila seleccionada, en lugar de usar un campo numérico.

- Una funcionalidad de deshacer y rehacer para revertir cambios accidentales.

- La posibilidad de agregar bloques de texto y formas geométricas al mapa para una mayor personalización.

- También se podría diseñar un panel de control diferente y optimizado para dispositivos móviles, para mejorar la usabilidad en pantallas pequeñas.
  
### Escalabilidad y Rendimiento

En un escenario de producción con miles de filas y asientos, el rendimiento podría optimizarse mediante la virtualización de listas (por ejemplo, con react-window o react-virtualized). Esto asegura que el navegador solo renderice los elementos visibles en pantalla, mejorando la fluidez y el rendimiento general de la aplicación.

### Robustez y Calidad del Código

Para hacer la aplicación más robusta, se podría:

- Añadir una validación de formularios más completa para manejar entradas de usuario inválidas.

- Implementar pruebas unitarias para la lógica de negocio en los servicios (mapServices.ts) para garantizar la fiabilidad del código.

### Manejo de Layouts Avanzados

La lógica podría expandirse para incluir la creación de filas con geometrías curvas o secciones predefinidas, ideales para estadios y teatros.

### Persistencia de Datos

Se podría implementar la persistencia de datos automática usando localStorage para que el estado del mapa no se pierda al recargar la página.

### 7. Agradecimientos

Estoy realmente contento con la oportunidad de participar en esta prueba. No solo ha sido entretenido trabajar en este proyecto, sino que me ha permitido aprender e implementar soluciones que nunca había hecho antes. 

Muchas Gracias!

--

Desarrollado por Facundo Robert | [Portfolio](https://facundorobert.vercel.app/)





