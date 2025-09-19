# Prueba Tecnica- Seat Map Builder

## Evolución Cronológica del Proyecto
Desarrollé este proyecto en varias fases, empezando por la definición de la estructura y la lógica, para luego pasar a la construcción de los componentes y la implementación de las funcionalidades clave.

### 1- Definición de la Estructura y Lógica:

- Planifiqué los pasos iniciales y la arquitectura del proyecto, decidiendo cómo iba a implementar las distintas funcionalidades.

-Creé los tipos de datos (types/index.ts) y las interfaces para la estructura del mapa de asientos, incluyendo Seat y Row. A la interfaz Row le añadí las propiedades x e y para gestionar la posición de cada fila.

- Implementé las funciones principales en el archivo de servicios (services/mapServices.ts), lo que me permitió manejar la lógica de negocio de la aplicación: createNewRows, deleteSelectedRows, toggleRowSelection, toggleSeatSelection y deleteSeat.

### 2- Construcción y Refactorización de Componentes:

- Creé los componentes principales: SeatMapComponent (que actúa como contenedor de las filas), RowComponent y SeatComponent.

- Refactoricé el ControlsPanel para que tuviera un enfoque más claro, centrando su funcionalidad en la creación y el etiquetado de filas.
  
- Implementé el renderizado inicial de las filas y los asientos, y realicé mejoras visuales en los componentes.

### 3- Implementación de la Funcionalidad "Drag and Drop" de Filas:

- Para añadir la funcionalidad de arrastre, utilicé la librería @dnd-kit/core. Envolví el componente SeatMapComponent con DndContext para habilitar el contexto de arrastre.

- En el RowComponent, usé el useDraggable hook para que cada fila fuera arrastrable.

- Implementé la lógica en el useSeatMap hook, donde la función handleDragEnd actualiza la posición (x, y) de la fila en el estado global del mapa de asientos.

- Para solucionar el conflicto entre el arrastre y los clics de selección, opté por una estrategia de "handle de arrastre". Creé un div específico (el "handle") dentro del RowComponent que contiene las propiedades del useDraggable (ref, listeners, attributes).

- Este diseño me permitió que el resto de la fila fuera clickeable para la selección, mientras que el arrastre solo se activa al interactuar con el "handle". También implementé la lógica de e.stopPropagation() en los asientos para evitar que los clics en ellos se propagaran y activaran la selección de la fila.
  
### 4- Implementación del Etiquetado Rápido de Filas (Batch Labeling):

- Añadí la funcionalidad de etiquetado por lotes para re-etiquetar múltiples filas seleccionadas con un patrón de numeración consistente.

- Creé una nueva función en el archivo de servicios (services/mapServices.ts), batchLabelSelectedRows, que itera sobre las filas seleccionadas y les asigna una nueva etiqueta y un nombre de sección basados en la entrada del usuario.

- Para mantener la consistencia del mapa, diseñé la lógica para que solo las filas seleccionadas se re-etiquetaran. Las filas no seleccionadas conservan su numeración y propiedades originales, lo que previene re-indexaciones inesperadas.

- Refactoricé los componentes (ControlsPanel y SeatComponent) para soportar esta funcionalidad. Creé un formulario dedicado (BatchLabelingForm) para capturar la etiqueta base y el índice de inicio, y me aseguré de que el tooltip de los asientos reflejara con precisión la nueva etiqueta y sección de la fila.
  
### 5- Estilos
Antes de implementar las funcionalidades de importación y exportación en formato JSON, decidí priorizar la estilización completa de la aplicación. Esta fase incluyó:

- Estilos de componentes: Estilicé las filas, asientos y el panel de control para mejorar la interfaz de usuario.

- Gestión de fuentes: Integré una fuente de Google Fonts para unificar la tipografía de la aplicación.

- Mejoras de UI: Agregué efectos de hover, colores de selección y un fondo cohesivo para una experiencia de usuario más atractiva.