# Prueba Tecnica- Seat Map Builder

### Evolución cronológica del proyecto

- Primero estructuré los pasos a seguir y como iba a implementar las funcionalidades del proyecto... 
- Creé los tipos de data a utilizar, sus interfaces y types. 
- Luego pude añadir las funcionalidades principales del proyecto en el archivo services/mapServices, permitiendo poder crear, seleccionar eliminar filas y asientos, asi como etiquetarlas =>
   - createNewRows
   - deleteSelectedRows
   - toggleRowSelection
   - toggleSeatSelection
   - deleteSeat
- Una vez teniendo las funcionalidades, la logica continuaba con crear los componentes a utilizar... SeatMap (conteniendo los subcomponentes de rows y seat) y ControlsPanel(conteniendo lo subcomponentes de formulario y sus buttons)
- Al diseñar y crear los componentes principales, se refactorizó el panel de control para que unicamente tenga el formulario de creado de filas y su etiquetado.
- Luego se pudo avanzar al renderizado de las filas y los asientos, con sus consecuentes mejoras