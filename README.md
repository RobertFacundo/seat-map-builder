# Prueba Tecnica- Seat Map Builder

## Evolución Cronológica del Proyecto
El proyecto se desarrolló en varias fases, comenzando por la definición de la estructura y la lógica, para luego pasar a la construcción de los componentes y la implementación de las funcionalidades clave.

### 1- Definición de la Estructura y Lógica:

- Se planificaron los pasos iniciales y la arquitectura del proyecto, decidiendo cómo se iban a implementar las distintas funcionalidades.

- Se crearon los tipos de datos (types/index.ts) y las interfaces para la estructura del mapa de asientos, incluyendo Seat y Row. A la interfaz Row se le añadieron las propiedades x e y para gestionar la posición de cada fila.

- Se implementaron las funciones principales en el archivo de servicios (services/mapServices.ts), lo que permitió manejar la lógica de negocio de la aplicación: createNewRows, deleteSelectedRows, toggleRowSelection, toggleSeatSelection y deleteSeat.

### 2- Construcción y Refactorización de Componentes:

- Se crearon los componentes principales: SeatMapComponent (que actúa como contenedor de las filas), RowComponent y SeatComponent.

- El ControlsPanel se refactorizó para tener un enfoque más claro, centrando su funcionalidad en la creación y el etiquetado de filas.

- Se implementó el renderizado inicial de las filas y los asientos, y se hicieron mejoras visuales en los componentes.

### 3- Implementación de la Funcionalidad "Drag and Drop" de Filas:

- Para añadir la funcionalidad de arrastre, se utilizó la librería @dnd-kit/core. Se envolvió el componente SeatMapComponent con DndContext para habilitar el contexto de arrastre. .

- En el RowComponent, se utilizó el useDraggable hook para hacer que cada fila sea arrastrable.

- Se implementó la lógica en el useSeatMap hook, donde la función handleDragEnd actualiza la posición (x, y) de la fila en el estado global del mapa de asientos.

- Para solucionar el conflicto entre el arrastre y los clics de selección, se optó por una estrategia de "handle de arrastre". Se creó un div específico (el "handle") dentro del RowComponent que contiene las propiedades del useDraggable (ref, listeners, attributes).

- Este diseño permitió que el resto de la fila fuera clickeable para la selección, mientras que el arrastre solo se activa al interactuar con el "handle". Se implementó la lógica de e.stopPropagation() en los asientos para evitar que los clics en ellos se propaguen y activen la selección de la fila.
  
### 4- Implementación del Etiquetado Rápido de Filas (Batch Labeling):

- Se añadió la funcionalidad de **etiquetado por lotes** para re-etiquetar múltiples filas seleccionadas con un patrón de numeración consistente.

- Se creó una nueva función en el archivo de servicios (`services/mapServices.ts`), `batchLabelSelectedRows`, que itera sobre las filas seleccionadas y les asigna una nueva etiqueta y un nombre de sección basados en la entrada del usuario.

- Para mantener la consistencia del mapa, la lógica se diseñó para que solo las filas seleccionadas se re-etiqueten. Las filas no seleccionadas conservan su numeración y propiedades originales, lo que previene re-indexaciones inesperadas.

- Se refactorizaron los componentes (`ControlsPanel` y `SeatComponent`) para soportar esta funcionalidad. Se creó un formulario dedicado (`BatchLabelingForm`) para capturar la etiqueta base y el índice de inicio, y se aseguró de que el tooltip de los asientos reflejara con precisión la nueva etiqueta y sección de la fila.