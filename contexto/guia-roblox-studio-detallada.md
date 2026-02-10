# 🎮 Guía Completa de Roblox Studio para Niños
## De Principiante a Creador de Juegos

---

## 📚 Tabla de Contenidos

1. [Nivel 1: Arquitecto de Mundos](#nivel-1)
2. [Nivel 2: Terreno y Efectos Visuales](#nivel-2)
3. [Nivel 3: Programación con Luau](#nivel-3)
4. [Nivel 4: Tu Primer Juego Completo](#nivel-4)

---

<a name="nivel-1"></a>
## 🟢 NIVEL 1: Arquitecto de Mundos

### 📝 Paso 1: Instalación y Configuración Inicial

**Objetivo:** Instalar Roblox Studio y familiarizarte con la interfaz.

#### Descarga e Instalación

1. **Crear cuenta de Roblox:**
   - Ve a [www.roblox.com](https://www.roblox.com)
   - Haz clic en "Sign Up" (Registrarse)
   - Pide ayuda a un adulto para crear tu cuenta
   - Elige un nombre de usuario único (no podrás cambiarlo después)
   - Crea una contraseña segura
   - Añade tu fecha de nacimiento

2. **Descargar Roblox Studio:**
   - Ve a [create.roblox.com](https://create.roblox.com)
   - Haz clic en "Start Creating" (Empezar a Crear)
   - El navegador descargará Roblox Studio automáticamente
   - Si no descarga, haz clic en "Download Studio"

3. **Instalar el programa:**
   - **Windows:** Abre el archivo RobloxStudio.exe y sigue las instrucciones
   - **Mac:** Abre el archivo .dmg y arrastra Roblox Studio a Aplicaciones
   - Espera a que termine la instalación (puede tardar 2-5 minutos)

4. **Primer inicio:**
   - Abre Roblox Studio desde tu escritorio
   - Inicia sesión con tu cuenta de Roblox
   - Verás la pantalla de inicio con plantillas

#### Elegir tu Primera Plantilla

En la pantalla de inicio verás varias opciones:

- **Baseplate** ⭐ (RECOMENDADO PARA EMPEZAR): Una plataforma verde simple y vacía
- **Flat Terrain**: Terreno plano con pasto
- **Classic Baseplate**: Plataforma gris clásica
- **Village**: Pueblo con casas ya construidas
- **Suburban**: Vecindario moderno
- **Castle**: Castillo medieval
- **Pirate Island**: Isla pirata
- **Racing**: Pista de carreras
- **Obby**: Plantilla de juego de obstáculos

**Para esta guía, selecciona "Baseplate"** y haz clic en "Create" (Crear).

#### Conocer la Interfaz de Roblox Studio

Cuando se abra tu proyecto, verás varias secciones:

**1. Viewport (Centro - La pantalla grande):**
- Es tu mundo 3D donde construyes
- Aquí verás todo lo que creas
- Puedes moverte libremente por este espacio

**2. Barra de Herramientas Superior:**
- **Home**: Herramientas básicas (Part, Terrain, etc.)
- **Model**: Herramientas de modelado avanzadas
- **Avatar**: Configurar personajes
- **Test**: Probar tu juego
- **View**: Mostrar/ocultar ventanas
- **Plugins**: Extensiones adicionales

**3. Explorer (Derecha):**
- Lista jerárquica de todos los objetos en tu juego
- Organizado como un árbol de carpetas
- Elementos principales:
  - **Workspace**: Donde están todos los objetos visibles del mundo
  - **Players**: Información de jugadores
  - **Lighting**: Configuración de luces y atmósfera
  - **ReplicatedStorage**: Objetos compartidos
  - **ServerScriptService**: Donde van tus scripts principales
  - **StarterGui**: Interfaz de usuario (botones, textos en pantalla)
  - **StarterPlayer**: Configuración del jugador
  - **StarterPack**: Herramientas que el jugador tiene al inicio

**4. Properties (Derecha abajo):**
- Muestra todas las propiedades del objeto seleccionado
- Aquí cambias colores, tamaños, nombres, etc.
- Se actualiza según lo que selecciones

**5. Toolbox (Abajo):**
- Biblioteca de modelos, imágenes, audio y plugins
- Contenido creado por Roblox y la comunidad
- Puedes buscar y añadir recursos gratis

**6. Output (Abajo, puede estar oculta):**
- Muestra mensajes de tus scripts
- Muestra errores si algo sale mal
- Muy importante para programar
- Abre con: View → Output

#### Controles de Cámara (¡MUY IMPORTANTE!)

Practica estos controles hasta que te sientas cómodo:

**Movimiento básico:**
- **W**: Mover hacia adelante
- **S**: Mover hacia atrás
- **A**: Mover a la izquierda
- **D**: Mover a la derecha
- **E**: Subir (flotar hacia arriba)
- **Q**: Bajar (flotar hacia abajo)
- **Shift + W/A/S/D**: Moverte el doble de rápido

**Control de cámara:**
- **Clic derecho + mover ratón**: Girar la vista (mantén presionado el botón derecho)
- **Rueda del ratón**: Zoom in/out (acercar/alejar)
- **Clic central + arrastrar**: Mover la cámara lateralmente (pan)

**Atajos útiles:**
- **F**: Enfocar el objeto seleccionado (muy útil si te pierdes)
- **Ctrl + 1**: Activar herramienta Select (seleccionar)
- **Ctrl + 2**: Activar herramienta Move (mover)
- **Ctrl + 3**: Activar herramienta Scale (escalar)
- **Ctrl + 4**: Activar herramienta Rotate (rotar)

#### ✏️ Ejercicio 1: Dominar la Navegación

**Tiempo estimado: 10 minutos**

1. Practica volar alrededor de la plataforma verde
2. Sube muy alto usando E (hasta que la plataforma se vea pequeña)
3. Baja hasta estar debajo de la plataforma usando Q
4. Practica girar la cámara con clic derecho mientras te mueves
5. Usa F para volver a enfocar la plataforma si te pierdes
6. Intenta moverte rápido con Shift + W
7. Practica hasta que puedas moverte sin pensar en los controles

**Consejo:** Si te pierdes, selecciona "Baseplate" en el Explorer y presiona F.

---

### 📝 Paso 2: Crear y Entender las Parts (Objetos Básicos)

**Objetivo:** Aprender a crear objetos 3D y entender cómo funcionan.

#### ¿Qué son las Parts?

Las Parts son los bloques de construcción fundamentales en Roblox. Todo lo que ves en cualquier juego de Roblox está hecho de Parts o combinaciones de Parts. Son como piezas de LEGO digitales.

#### Crear tu Primera Part

1. **Ubicar el botón Part:**
   - Mira la barra superior
   - Busca la pestaña **"Home"** (debe estar seleccionada por defecto)
   - En la sección "Insert", verás un botón gris que dice **"Part"**
   - Tiene una pequeña flecha hacia abajo ▼ a su lado

2. **Ver las opciones de Parts:**
   - Haz clic en la flecha ▼ junto a "Part"
   - Verás un menú con diferentes formas:

**Tipos de Parts disponibles:**

- **Block** 📦: Cubo/bloque rectangular (el más usado)
- **Sphere** ⚽: Esfera perfecta (pelota)
- **Cylinder** 🥫: Cilindro (como una lata)
- **Wedge** 📐: Rampa triangular (para hacer rampas)
- **CornerWedge** 📐: Esquina triangular (para techos)
- **Part** 📦: Igual que Block (opción por defecto)

3. **Insertar un Block:**
   - Haz clic en "Block"
   - Aparecerá un bloque gris en el centro de tu pantalla
   - Tiene un tamaño de 4x4x4 studs por defecto

#### Entender el Sistema de Coordenadas

Roblox usa un sistema de coordenadas 3D:

- **Eje X (Rojo)**: Izquierda ↔ Derecha
- **Eje Y (Verde)**: Abajo ↕ Arriba
- **Eje Z (Azul)**: Adelante ↔ Atrás

**Unidad de medida:**
- Roblox usa "studs" como unidad
- 1 stud ≈ 28 centímetros en el mundo real
- Un personaje de Roblox mide aproximadamente 5 studs de alto

#### Seleccionar Objetos

**Método 1 - Clic directo:**
- Haz clic en cualquier objeto en el Viewport
- Verás un borde azul brillante alrededor del objeto seleccionado
- Aparecerán flechas de colores (herramienta Move)

**Método 2 - Desde el Explorer:**
- Ve a la ventana Explorer (derecha)
- Expande "Workspace" haciendo clic en la flecha ▶
- Verás tu Part listada como "Part"
- Haz clic en "Part" en el Explorer
- El objeto se seleccionará en el Viewport

**Seleccionar múltiples objetos:**
- Mantén presionado **Ctrl** (Windows) o **Cmd** (Mac)
- Haz clic en cada objeto que quieras seleccionar
- Todos mostrarán bordes azules
- Las propiedades que compartan se pueden cambiar juntas

#### Renombrar Objetos (Organización Importante)

Es muy importante dar nombres descriptivos a tus objetos para encontrarlos fácilmente después.

1. Selecciona tu Part
2. Mira la ventana **Properties** (abajo a la derecha)
3. La primera propiedad es **"Name"**
4. Haz clic en el campo donde dice "Part"
5. Escribe un nombre descriptivo: "MiPrimerBloque"
6. Presiona **Enter**
7. El nombre cambiará en el Explorer

**Reglas para nombres:**
- No uses espacios (usa MayúsculasParaSeparar o guiones_bajos)
- Sé descriptivo: "ParedIzquierda" es mejor que "Part1"
- Evita caracteres especiales (!, @, #, etc.)

#### Propiedades Básicas de una Part

Cuando seleccionas una Part, en Properties verás muchas opciones. Las más importantes son:

**Propiedades de Identificación:**
- **Name**: Nombre del objeto
- **ClassName**: Tipo de objeto (Part, MeshPart, etc.)

**Propiedades de Transformación:**
- **Position**: Ubicación en el mundo (X, Y, Z)
- **Orientation**: Rotación en grados (X, Y, Z)
- **Size**: Tamaño del objeto (X, Y, Z)

**Propiedades de Apariencia:**
- **Color**: Color del objeto (selector de color)
- **Material**: Material visual (Plastic, Wood, Metal, etc.)
- **Transparency**: Transparencia (0 = sólido, 1 = invisible)
- **Reflectance**: Qué tan reflectante es (0 a 1)

**Propiedades de Física:**
- **Anchored**: Si está fijo o puede moverse con física
- **CanCollide**: Si otros objetos pueden chocar con él
- **Massless**: Si tiene masa o no afecta la física

#### ✏️ Ejercicio 2: Crear una Colección de Formas

**Tiempo estimado: 15 minutos**

Vamos a crear una exhibición de todas las formas básicas:

1. **Crear las formas:**
   - Crea 1 Block
   - Crea 1 Sphere
   - Crea 1 Cylinder
   - Crea 1 Wedge
   - Crea 1 CornerWedge

2. **Renombrar cada una:**
   - Selecciona el Block → Properties → Name: "Bloque1"
   - Selecciona la Sphere → Name: "Esfera1"
   - Selecciona el Cylinder → Name: "Cilindro1"
   - Selecciona el Wedge → Name: "Rampa1"
   - Selecciona el CornerWedge → Name: "Esquina1"

3. **Organizarlas en fila:**
   - Usa la herramienta Move (las flechas de colores)
   - Coloca cada forma en fila sobre la plataforma verde
   - Deja espacio entre cada una (unos 6 studs)

4. **Verificar en el Explorer:**
   - Abre el Explorer
   - Expande Workspace
   - Deberías ver tus 5 objetos con sus nuevos nombres

**Desafío extra:** Intenta crear una forma usando solo Wedges (como una pirámide).

---

### 📝 Paso 3: Herramientas de Transformación (Move, Scale, Rotate)

**Objetivo:** Dominar las tres herramientas esenciales para manipular objetos.

#### Herramienta 1: MOVE (Mover)

La herramienta Move te permite cambiar la posición de los objetos en el espacio 3D.

**Activar la herramienta:**
- Método 1: Está activa por defecto al seleccionar un objeto
- Método 2: Presiona **Ctrl + 2**
- Método 3: Clic en el icono Move en la barra superior (Home tab)

**Entender las flechas de colores:**

Cuando seleccionas un objeto con Move activo, verás 3 flechas:

- **Flecha ROJA**: Mueve en el eje X (izquierda ↔ derecha)
- **Flecha VERDE**: Mueve en el eje Y (abajo ↕ arriba)
- **Flecha AZUL**: Mueve en el eje Z (adelante ↔ atrás)

**Cómo usar Move:**

1. **Movimiento en un solo eje:**
   - Haz clic en una flecha de color
   - Mantén presionado el botón del ratón
   - Arrastra en la dirección de la flecha
   - El objeto se moverá solo en ese eje
   - Suelta cuando esté en la posición deseada

2. **Movimiento libre:**
   - Haz clic en el centro del objeto (no en las flechas)
   - Arrastra libremente
   - El objeto se moverá en el plano de la cámara

3. **Movimiento en un plano (2 ejes):**
   - Verás pequeños cuadrados entre las flechas
   - Haz clic en un cuadrado para mover en 2 ejes a la vez
   - Ejemplo: cuadrado rojo-verde mueve en X e Y

**Configurar el incremento de movimiento:**

En la parte superior verás "Move: 1"

- Haz clic en el número para ver opciones
- Opciones disponibles: 0.2, 0.5, 1, 2, 4, 5 studs
- **1 stud** (recomendado para principiantes): Movimiento preciso
- **0.2 studs**: Movimiento muy preciso (para detalles)
- **5 studs**: Movimiento rápido (para objetos grandes)

**Desactivar el incremento (movimiento libre):**
- Desmarca la casilla junto al número
- Ahora puedes mover con precisión total
- Útil para posicionamiento exacto

#### Herramienta 2: SCALE (Escalar/Cambiar Tamaño)

La herramienta Scale te permite cambiar el tamaño de los objetos.

**Activar la herramienta:**
- Método 1: Presiona **Ctrl + 3**
- Método 2: Clic en el icono Scale en Home tab (parece una caja con flechas hacia afuera)

**Entender los controles de Scale:**

Cuando activas Scale en un objeto, verás:

- **6 puntos blancos** en las esquinas (escalar proporcionalmente)
- **6 caras de colores** en los lados (estirar en una dirección)
  - Caras ROJAS: Estirar en eje X (ancho)
  - Caras VERDES: Estirar en eje Y (alto)
  - Caras AZULES: Estirar en eje Z (profundidad)

**Cómo usar Scale:**

1. **Escalar proporcionalmente (mantener forma):**
   - Arrastra cualquier **punto blanco** de las esquinas
   - El objeto crecerá o se reducirá manteniendo sus proporciones
   - Perfecto para hacer algo más grande o pequeño sin deformarlo

2. **Estirar en una dirección:**
   - Arrastra una **cara de color**
   - El objeto se estirará solo en esa dirección
   - Ejemplo: arrastra cara verde hacia arriba para hacer un objeto más alto

3. **Escalar con números exactos:**
   - Selecciona el objeto
   - Ve a Properties → **Size**
   - Verás 3 números: X, Y, Z
   - Cambia los números manualmente
   - Ejemplo: Size (10, 1, 10) = plataforma plana de 10x10

**Configurar el incremento de escala:**

En la parte superior verás "Scale: 10%"

- Opciones: 5%, 10%, 25%, 50%, 100%
- 10% es bueno para ajustes precisos
- 100% duplica o reduce a la mitad el tamaño

**Límites de tamaño:**
- Tamaño mínimo: 0.05 studs en cualquier dimensión
- Tamaño máximo: 2048 studs en cualquier dimensión
- Si intentas exceder estos límites, Roblox lo impedirá

#### Herramienta 3: ROTATE (Rotar/Girar)

La herramienta Rotate te permite girar objetos en cualquier dirección.

**Activar la herramienta:**
- Método 1: Presiona **Ctrl + 4**
- Método 2: Clic en el icono Rotate en Home tab (flecha circular)

**Entender los círculos de rotación:**

Cuando activas Rotate, verás 3 círculos de colores:

- **Círculo ROJO**: Gira alrededor del eje X (como una rueda de carro)
- **Círculo VERDE**: Gira alrededor del eje Y (como una puerta)
- **Círculo AZUL**: Gira alrededor del eje Z (como un volante)

**Cómo usar Rotate:**

1. **Rotación básica:**
   - Haz clic en un círculo de color
   - Arrastra en la dirección que quieres girar
   - El objeto rotará en ese eje
   - Suelta cuando tenga la orientación deseada

2. **Rotación libre:**
   - Haz clic fuera de los círculos de colores
   - Arrastra para rotar libremente según la vista de la cámara

3. **Rotar con números exactos:**
   - Ve a Properties → **Orientation**
   - Cambia los valores X, Y, Z en grados
   - Ejemplo: (0, 90, 0) = girado 90° en el eje Y

**Configurar el incremento de rotación:**

En la parte superior verás "Rotate: 15°"

- Opciones: 5°, 15°, 30°, 45°, 90°
- **15°** (recomendado): Buen balance entre precisión y velocidad
- **5°**: Rotación muy precisa
- **90°**: Rotación en ángulos rectos perfectos

**Desactivar el incremento:**
- Desmarca la casilla para rotación libre
- Útil para ángulos específicos no estándar

#### Atajos de Teclado Esenciales

Memoriza estos atajos para trabajar más rápido:

**Herramientas:**
- **Ctrl + 1**: Select (seleccionar)
- **Ctrl + 2**: Move (mover)
- **Ctrl + 3**: Scale (escalar)
- **Ctrl + 4**: Rotate (rotar)

**Edición:**
- **Ctrl + D**: Duplicar objeto seleccionado
- **Ctrl + C**: Copiar
- **Ctrl + V**: Pegar
- **Ctrl + X**: Cortar
- **Delete**: Borrar objeto seleccionado
- **Ctrl + Z**: Deshacer última acción
- **Ctrl + Y**: Rehacer acción deshecha
- **Ctrl + G**: Agrupar objetos seleccionados
- **Ctrl + U**: Desagrupar

**Vista:**
- **F**: Enfocar objeto seleccionado
- **Ctrl + Shift + F**: Enfocar todos los objetos

**Otros:**
- **Ctrl + S**: Guardar proyecto
- **F5** o **F8**: Probar juego (Play)
- **Shift + F5**: Detener prueba (Stop)

#### ✏️ Ejercicio 3: Construir una Casa Básica

**Tiempo estimado: 25 minutos**

Vamos a construir una casa simple usando las tres herramientas.

**Parte 1: Las Paredes**

1. Crea un Block
2. Renómbralo: "ParedFrontal"
3. Usa Scale para cambiar su tamaño:
   - Properties → Size: (12, 8, 0.5)
   - Esto crea una pared delgada y alta
4. Usa Move para posicionarla
5. Duplica la pared (Ctrl + D)
6. Renombra: "ParedTrasera"
7. Muévela hacia atrás (flecha azul) unos 12 studs
8. Duplica de nuevo para crear "ParedIzquierda"
9. Usa Rotate para girarla 90° (Orientation Y = 90)
10. Posiciónala en el lado izquierdo
11. Duplica para crear "ParedDerecha"
12. Posiciónala en el lado derecho

**Parte 2: El Techo**

1. Crea un nuevo Block
2. Renómbralo: "Techo"
3. Escala: Size (13, 0.5, 13)
4. Muévelo arriba de las paredes (flecha verde)
5. Centra sobre las paredes

**Parte 3: El Piso**

1. Crea un Block
2. Renómbralo: "Piso"
3. Escala: Size (12, 0.5, 12)
4. Muévelo al nivel del suelo entre las paredes

**Parte 4: La Puerta (Desafío)**

1. Crea un Block
2. Renómbralo: "Puerta"
3. Escala: Size (3, 6, 0.3)
4. Posiciónalo en la pared frontal
5. Cambia su color en Properties → Color (elige marrón)
6. Cambia Material a "Wood"

**Parte 5: Columnas Decorativas**

1. Crea un Cylinder
2. Renómbralo: "Columna1"
3. Escala: Size (1, 8, 1)
4. Posiciónalo al lado de la puerta
5. Duplica para crear "Columna2"
6. Posiciónala al otro lado de la puerta

**Verificación:**
- Tu casa debe tener 4 paredes, techo, piso, puerta y 2 columnas
- Todos los objetos deben tener nombres descriptivos
- Presiona F5 para probar y caminar dentro de tu casa

**Desafío extra:**
- Añade ventanas (bloques con material Glass y Transparency 0.5)
- Crea un techo inclinado usando Wedges
- Añade una chimenea con Cylinders

---


### 📝 Paso 4: El Sistema de Anclaje (Anchored) - Física en Roblox

**Objetivo:** Entender cómo funciona la física en Roblox y cuándo anclar objetos.

#### ¿Qué es el Anclaje?

En Roblox, todos los objetos tienen física realista por defecto. Esto significa que:

- Los objetos caen por la gravedad (como en el mundo real)
- Los objetos pueden chocar entre sí
- Los objetos pueden rodar, deslizarse y rebotar
- Los objetos tienen masa y peso

**Anchored = true** significa que el objeto está "pegado" en su lugar y ignora la física.
**Anchored = false** significa que el objeto tiene física activa.

#### ¿Por Qué se Caen Mis Construcciones?

Cuando creas una Part nueva, por defecto viene con **Anchored = false**. Si la colocas en el aire y presionas Play, caerá al suelo por la gravedad.

Esto es un problema para construcciones como:
- Casas y edificios
- Plataformas flotantes
- Decoraciones
- Obstáculos de juegos

Pero es útil para:
- Pelotas y objetos que deben rodar
- Objetos que el jugador puede empujar
- Proyectiles y objetos dinámicos

#### Cómo Anclar un Objeto

**Método 1: Usando Properties (Recomendado para principiantes)**

1. Selecciona la Part que quieres anclar
2. Mira la ventana **Properties** (derecha abajo)
3. Busca la sección **"Part"** (cerca del inicio)
4. Encuentra la propiedad **"Anchored"**
5. Verás una casilla de verificación
6. Haz clic para marcarla ✓
7. El objeto ahora está anclado

**Método 2: Atajo de Teclado (Más rápido)**

1. Selecciona la Part
2. Presiona **Alt + A** (Windows) o **Option + A** (Mac)
3. Esto activa/desactiva el anclaje instantáneamente
4. Presiona de nuevo para desanclar

**Método 3: Anclar Múltiples Objetos**

1. Selecciona varios objetos (mantén Ctrl y haz clic en cada uno)
2. En Properties, marca **Anchored**
3. Todos los objetos seleccionados se anclarán a la vez
4. Muy útil para anclar construcciones completas

#### Identificar Objetos Anclados Visualmente

Cuando seleccionas un objeto:
- **Anclado**: El borde de selección es más grueso y sólido
- **No anclado**: El borde es más delgado

También puedes ver el estado en Properties.

#### Otras Propiedades de Física Importantes

Cuando trabajas con física, estas propiedades también son importantes:

**CanCollide:**
- **true**: Otros objetos chocan con este (sólido)
- **false**: Otros objetos lo atraviesan (fantasma)
- Útil para efectos especiales o zonas invisibles

**Massless:**
- **true**: El objeto no tiene masa (no afecta física)
- **false**: El objeto tiene masa según su tamaño y material
- Útil para accesorios que no deben añadir peso

**CustomPhysicalProperties:**
- Permite ajustar densidad, fricción, elasticidad
- Avanzado, no necesario para principiantes

#### ✏️ Ejercicio 4: Experimento de Gravedad

**Tiempo estimado: 10 minutos**

Vamos a experimentar con la física de Roblox.

**Experimento 1: La Caída Libre**

1. Crea un Block nuevo
2. Renómbralo: "BloqueGravedad"
3. Usa Move para subirlo muy alto (Y = 50)
4. Asegúrate que **Anchored = false** (sin marcar)
5. Presiona **F5** para probar el juego
6. Observa: ¡El bloque cae al suelo!
7. Presiona **Shift + F5** para detener

**Experimento 2: Objeto Flotante**

1. Selecciona el mismo bloque
2. Muévelo de nuevo arriba (Y = 50)
3. Ahora marca **Anchored = true**
4. Presiona **F5** para probar
5. Observa: ¡El bloque flota en el aire!
6. Detén la prueba

**Experimento 3: Torre Inestable**

1. Crea 5 bloques apilados verticalmente
2. Deja todos con **Anchored = false**
3. Presiona F5
4. Observa: ¡La torre se derrumba!
5. Detén la prueba

**Experimento 4: Torre Estable**

1. Selecciona todos los bloques de la torre (Ctrl + clic)
2. Marca **Anchored = true** para todos
3. Presiona F5
4. Observa: ¡La torre permanece firme!
5. Detén la prueba

**Experimento 5: Pelota que Rueda**

1. Crea una Sphere
2. Renómbrala: "Pelota"
3. Colócala en una rampa (crea un Wedge)
4. Ancla el Wedge pero NO la Sphere
5. Presiona F5
6. Observa: ¡La pelota rueda por la rampa!

**Conclusión del ejercicio:**
- Construcciones = Anchored true
- Objetos dinámicos = Anchored false
- Siempre prueba con F5 para verificar

---

### 📝 Paso 5: Colores, Materiales y Apariencia

**Objetivo:** Hacer que tus creaciones se vean increíbles con colores y materiales.

#### Sistema de Colores en Roblox

Roblox tiene dos formas de manejar colores:

1. **Color** (Color3): Selector de color RGB moderno
2. **BrickColor**: Paleta de colores clásicos de Roblox (más limitada)

#### Cambiar el Color de un Objeto

**Método 1: Selector de Color (Recomendado)**

1. Selecciona una Part
2. En **Properties**, busca **"Color"**
3. Verás un cuadro pequeño mostrando el color actual
4. Haz clic en el cuadro de color
5. Se abrirá un selector de colores
6. Puedes elegir de tres formas:
   - **Rueda de color**: Haz clic en cualquier parte
   - **Valores RGB**: Ingresa números (0-255) para Rojo, Verde, Azul
   - **Valores HSV**: Matiz, Saturación, Valor
7. El objeto cambia de color inmediatamente

**Método 2: BrickColor (Colores Clásicos)**

1. En **Properties**, busca **"BrickColor"**
2. Haz clic en el menú desplegable
3. Verás una lista de colores con nombres
4. Algunos colores populares:
   - "Bright red" - Rojo brillante
   - "Bright blue" - Azul brillante
   - "Bright green" - Verde brillante
   - "Bright yellow" - Amarillo brillante
   - "Really black" - Negro profundo
   - "Institutional white" - Blanco puro
   - "Medium stone grey" - Gris medio
   - "Bright orange" - Naranja brillante
   - "Bright violet" - Violeta brillante
   - "Dark green" - Verde oscuro

**Consejo:** Usa Color para más opciones, BrickColor para colores clásicos de Roblox.

#### Materiales en Roblox

Los materiales cambian cómo se ve la superficie de un objeto. Cada material tiene propiedades visuales únicas.

**Cómo cambiar el material:**

1. Selecciona una Part
2. En **Properties**, busca **"Material"**
3. Haz clic en el menú desplegable
4. Elige un material de la lista

#### Guía Completa de Materiales

**Materiales Básicos:**

- **Plastic** (Plástico)
  - Material por defecto
  - Suave y simple
  - Bueno para prototipos
  - Uso: Objetos genéricos

- **SmoothPlastic** (Plástico Suave)
  - Versión más suave de Plastic
  - Sin líneas de textura
  - Aspecto más moderno
  - Uso: Construcciones limpias y modernas

**Materiales Naturales:**

- **Wood** (Madera)
  - Textura de madera con vetas
  - Color marrón por defecto
  - Uso: Casas, muebles, árboles, puentes

- **WoodPlanks** (Tablas de Madera)
  - Madera con patrón de tablas
  - Más detallada que Wood
  - Uso: Pisos, paredes de cabañas

- **Grass** (Pasto)
  - Textura de césped
  - Verde por defecto
  - Hace sonido de pasto al caminar
  - Uso: Suelos de jardín, campos

- **Ground** (Tierra)
  - Textura de tierra/barro
  - Marrón por defecto
  - Uso: Caminos, suelos naturales

- **Sand** (Arena)
  - Textura granulada
  - Beige por defecto
  - Hace sonido de arena al caminar
  - Uso: Playas, desiertos

- **Rock** (Roca)
  - Textura de piedra rugosa
  - Gris por defecto
  - Uso: Montañas, cuevas, muros

- **Slate** (Pizarra)
  - Piedra más oscura y lisa
  - Uso: Construcciones de piedra elegantes

- **Granite** (Granito)
  - Piedra con patrón moteado
  - Uso: Encimeras, edificios lujosos

- **Marble** (Mármol)
  - Piedra blanca con vetas
  - Muy elegante
  - Uso: Palacios, estatuas, edificios lujosos

- **Basalt** (Basalto)
  - Roca volcánica oscura
  - Uso: Zonas volcánicas, construcciones oscuras

- **Sandstone** (Arenisca)
  - Piedra de color arena
  - Uso: Desiertos, construcciones antiguas

- **Limestone** (Caliza)
  - Piedra clara y suave
  - Uso: Edificios históricos

**Materiales de Construcción:**

- **Concrete** (Concreto)
  - Textura de cemento
  - Gris por defecto
  - Uso: Edificios modernos, bunkers

- **Brick** (Ladrillo)
  - Patrón de ladrillos
  - Rojo por defecto
  - Uso: Casas clásicas, chimeneas

- **Cobblestone** (Adoquín)
  - Piedras redondeadas
  - Uso: Caminos antiguos, castillos

- **Pavement** (Pavimento)
  - Asfalto liso
  - Negro/gris
  - Uso: Carreteras, estacionamientos

**Materiales Metálicos:**

- **Metal** (Metal)
  - Metal brillante y reflectante
  - Uso: Máquinas, robots, naves espaciales

- **CorrodedMetal** (Metal Corroído)
  - Metal oxidado y viejo
  - Uso: Estructuras abandonadas, chatarra

- **DiamondPlate** (Placa de Diamante)
  - Metal con patrón antideslizante
  - Uso: Plataformas industriales, vehículos

**Materiales Especiales:**

- **Glass** (Cristal)
  - Transparente y reflectante
  - Perfecto para ventanas
  - Uso: Ventanas, acuarios, vitrinas

- **Ice** (Hielo)
  - Transparente y resbaladizo
  - ¡Los jugadores resbalan al caminar!
  - Uso: Niveles de hielo, decoración invernal

- **Neon** (Neón)
  - ¡Brilla en la oscuridad!
  - Emite luz propia
  - Muy popular para efectos
  - Uso: Luces, señales, efectos futuristas

- **ForceField** (Campo de Fuerza)
  - Efecto de energía brillante
  - Semi-transparente
  - Animación ondulante
  - Uso: Barreras de energía, efectos sci-fi

- **Fabric** (Tela)
  - Textura de tejido
  - Uso: Ropa, cortinas, alfombras

- **Foil** (Papel Aluminio)
  - Muy reflectante y brillante
  - Uso: Decoraciones, efectos especiales

**Materiales Orgánicos:**

- **Snow** (Nieve)
  - Textura de nieve
  - Blanco por defecto
  - Uso: Escenas invernales

- **Mud** (Barro)
  - Textura de lodo
  - Marrón oscuro
  - Uso: Pantanos, zonas húmedas

- **LeafyGrass** (Pasto Frondoso)
  - Pasto más detallado
  - Uso: Jardines, bosques

- **Pebble** (Guijarros)
  - Piedras pequeñas
  - Uso: Caminos, decoración

#### Propiedades de Transparencia y Reflectividad

**Transparency (Transparencia):**

1. En **Properties**, busca **"Transparency"**
2. Es un número entre 0 y 1:
   - **0** = Completamente sólido (opaco)
   - **0.5** = Semi-transparente (se ve a través)
   - **1** = Completamente invisible
3. Arrastra el control deslizante o escribe el número
4. Útil para:
   - Ventanas (0.3 - 0.5)
   - Efectos fantasmales (0.7 - 0.9)
   - Objetos invisibles pero sólidos (1.0 con CanCollide true)

**Reflectance (Reflectividad):**

1. En **Properties**, busca **"Reflectance"**
2. Es un número entre 0 y 1:
   - **0** = Sin reflejos (mate)
   - **0.5** = Reflejos moderados
   - **1** = Muy reflectante (como espejo)
3. Funciona mejor con materiales como Metal, Glass, Ice
4. Útil para:
   - Espejos (0.8 - 1.0)
   - Agua (0.3 - 0.5)
   - Metales pulidos (0.5 - 0.7)

#### ✏️ Ejercicio 5: Paleta de Materiales

**Tiempo estimado: 20 minutos**

Vamos a crear una exhibición de materiales para aprender cómo se ve cada uno.

**Parte 1: Crear la base**

1. Crea 20 bloques pequeños
2. Tamaño de cada uno: Size (4, 4, 4)
3. Organízalos en una cuadrícula de 4x5
4. Ancla todos (selecciona todos, Anchored = true)

**Parte 2: Aplicar materiales diferentes**

Asigna un material diferente a cada bloque:

Fila 1:
- Bloque 1: Plastic
- Bloque 2: Wood
- Bloque 3: Metal
- Bloque 4: Concrete

Fila 2:
- Bloque 5: Brick
- Bloque 6: Grass
- Bloque 7: Sand
- Bloque 8: Rock

Fila 3:
- Bloque 9: Glass (Transparency 0.5)
- Bloque 10: Ice (Transparency 0.3)
- Bloque 11: Neon (Color brillante)
- Bloque 12: ForceField

Fila 4:
- Bloque 13: Marble
- Bloque 14: Granite
- Bloque 15: Slate
- Bloque 16: Cobblestone

Fila 5:
- Bloque 17: Fabric
- Bloque 18: Snow
- Bloque 19: Mud
- Bloque 20: WoodPlanks

**Parte 3: Añadir etiquetas**

Para cada bloque, crea un TextLabel flotante:
1. Crea una Part pequeña encima de cada bloque
2. Añade un SurfaceGui (clic + en la Part en Explorer)
3. Dentro del SurfaceGui, añade un TextLabel
4. Escribe el nombre del material en el TextLabel

**Parte 4: Probar con diferentes luces**

1. Presiona F5 para probar
2. Observa cómo se ven los materiales
3. Ve a Lighting en Explorer
4. Cambia ClockTime para ver los materiales en diferentes horas
5. Observa especialmente Glass, Ice, Neon y Metal

#### ✏️ Ejercicio 6: Crear un Arcoíris Brillante

**Tiempo estimado: 15 minutos**

1. Crea 7 bloques en fila
2. Tamaño de cada uno: Size (4, 1, 4)
3. Cambia el material de TODOS a **Neon**
4. Asigna colores del arcoíris:
   - Bloque 1: Rojo (RGB: 255, 0, 0)
   - Bloque 2: Naranja (RGB: 255, 127, 0)
   - Bloque 3: Amarillo (RGB: 255, 255, 0)
   - Bloque 4: Verde (RGB: 0, 255, 0)
   - Bloque 5: Azul (RGB: 0, 0, 255)
   - Bloque 6: Añil (RGB: 75, 0, 130)
   - Bloque 7: Violeta (RGB: 148, 0, 211)
5. Ancla todos los bloques
6. Presiona F5 y cambia la hora a medianoche (Lighting → ClockTime = 0)
7. ¡Observa cómo brillan en la oscuridad!

**Desafío extra:**
- Crea un letrero de neón con tu nombre
- Usa bloques delgados con material Neon
- Organiza los bloques para formar letras

---


## 🟡 NIVEL 2: Terreno y Efectos Visuales

### 📝 Paso 6: La Toolbox y Recursos de la Comunidad

**Objetivo:** Aprender a usar modelos de la comunidad de forma segura.

#### ¿Qué es la Toolbox?

La Toolbox es una biblioteca gigante con millones de recursos gratuitos creados por Roblox y la comunidad.

**Tipos de recursos disponibles:**
- **Models**: Objetos 3D (árboles, casas, vehículos)
- **Images**: Texturas e imágenes
- **Meshes**: Formas 3D personalizadas
- **Audio**: Música y efectos de sonido
- **Plugins**: Herramientas para Roblox Studio
- **Videos**: Contenido de video

#### Abrir la Toolbox

**Método 1:**
- Ve a **View** → **Toolbox**

**Método 2:**
- Presiona **Alt + T** (Windows) o **Option + T** (Mac)

La Toolbox aparecerá en la parte inferior de la pantalla.

#### Buscar y Usar Modelos

1. En la Toolbox, haz clic en la pestaña **"Marketplace"**
2. En el buscador, escribe lo que necesitas (ejemplo: "tree")
3. Verás resultados con imágenes
4. Haz clic en cualquier modelo para insertarlo en tu mundo
5. El modelo aparecerá en el centro de tu cámara

#### ⚠️ Seguridad en la Toolbox

**IMPORTANTE:** No todos los modelos son seguros. Algunos pueden contener scripts maliciosos.

**Reglas de seguridad:**
1. **Verifica el creador**: Busca la marca azul ✓ (creador verificado)
2. **Lee las reseñas**: Mira los comentarios de otros usuarios
3. **Revisa los scripts**: Antes de usar, abre el modelo en Explorer y revisa si tiene scripts
4. **Usa creadores conocidos**: Roblox oficial es siempre seguro
5. **Pide ayuda a un adulto**: Si no estás seguro

**Cómo revisar un modelo:**
1. Inserta el modelo en tu mundo
2. En Explorer, expande el modelo (clic en ▶)
3. Busca objetos llamados "Script" o "LocalScript"
4. Si ves scripts que no entiendes, elimina el modelo
5. Si no hay scripts o son simples, es seguro

#### Categorías Populares

**Naturaleza:**
- Árboles (trees)
- Rocas (rocks)
- Plantas (plants)
- Flores (flowers)

**Construcciones:**
- Casas (houses)
- Edificios (buildings)
- Puentes (bridges)
- Torres (towers)

**Vehículos:**
- Coches (cars)
- Aviones (planes)
- Barcos (boats)
- Trenes (trains)

**Decoración:**
- Muebles (furniture)
- Lámparas (lamps)
- Cuadros (paintings)

#### ✏️ Ejercicio 6: Crear un Parque

**Tiempo estimado: 20 minutos**

1. Busca e inserta:
   - 5 árboles diferentes
   - 2 bancos (bench)
   - 1 fuente (fountain)
   - 3 farolas (street lamp)
   - Flores y arbustos

2. Organiza todo en un área
3. Usa Move para posicionar cada elemento
4. Crea caminos con bloques planos (Material: Pavement)
5. Añade pasto con bloques (Material: Grass)

---

### 📝 Paso 7: Crear Modelos y Grupos

**Objetivo:** Organizar múltiples objetos como uno solo.

#### ¿Por Qué Crear Modelos?

Cuando construyes algo con varias Parts (como una mesa con 5 piezas), es útil agruparlas para:
- Moverlas todas juntas
- Copiarlas como un conjunto
- Organizarlas en el Explorer
- Guardarlas para reutilizar

#### Crear un Modelo (Agrupar)

**Método 1: Usando el menú**
1. Selecciona varios objetos (Ctrl + clic en cada uno)
2. Clic derecho en uno de los objetos seleccionados
3. Selecciona **"Group"** del menú
4. Todos los objetos se agruparán en un Model

**Método 2: Atajo de teclado**
1. Selecciona varios objetos
2. Presiona **Ctrl + G** (Windows) o **Cmd + G** (Mac)
3. Se crea el grupo instantáneamente

#### Desagrupar un Modelo

**Método 1: Menú**
1. Selecciona el Model
2. Clic derecho → **"Ungroup"**

**Método 2: Atajo**
1. Selecciona el Model
2. Presiona **Ctrl + U** (Windows) o **Cmd + U** (Mac)

#### Renombrar y Organizar Modelos

1. Selecciona el Model en Explorer
2. En Properties → Name, cámbialo a algo descriptivo
3. Ejemplo: "MesaComedor", "SillaOficina", "ArbolGrande"

#### PrimaryPart (Parte Principal)

Cuando creas un modelo, puedes definir una "parte principal":

1. Selecciona el Model en Explorer
2. En Properties, busca **"PrimaryPart"**
3. Haz clic y selecciona la parte más importante del modelo
4. Esto ayuda a posicionar el modelo correctamente

#### ✏️ Ejercicio 7: Crear Muebles

**Tiempo estimado: 30 minutos**

**Parte 1: Mesa**
1. Crea 1 bloque plano (tablero): Size (8, 0.5, 4)
2. Crea 4 cilindros (patas): Size (0.5, 4, 0.5)
3. Posiciona las patas en las esquinas del tablero
4. Selecciona todo y agrupa (Ctrl + G)
5. Renombra: "Mesa"
6. Cambia Material a Wood
7. Ancla todo

**Parte 2: Silla**
1. Crea 1 bloque (asiento): Size (2, 0.5, 2)
2. Crea 4 cilindros (patas): Size (0.3, 2, 0.3)
3. Crea 1 bloque (respaldo): Size (2, 3, 0.3)
4. Posiciona todo para formar una silla
5. Agrupa y renombra: "Silla"
6. Material: Wood
7. Ancla todo

**Parte 3: Duplicar**
1. Selecciona la silla
2. Duplica 3 veces (Ctrl + D)
3. Posiciona las 4 sillas alrededor de la mesa
4. Selecciona mesa + 4 sillas
5. Agrupa todo: "ComedorCompleto"

---

## 🟠 NIVEL 3: Programación con Luau

### 📝 Paso 8: Mi Primer Script

**Objetivo:** Escribir tu primer código en Luau.

#### ¿Qué es Luau?

Luau es el lenguaje de programación de Roblox. Es como darle instrucciones al juego para que haga cosas automáticamente.

**Con código puedes:**
- Hacer que objetos cambien de color
- Crear puertas que se abren
- Hacer enemigos que se mueven
- Crear sistemas de puntos
- ¡Y mucho más!

#### Tipos de Scripts

**Script (Server Script):**
- Se ejecuta en el servidor
- Afecta a todos los jugadores
- Usa para: Lógica del juego, enemigos, puertas

**LocalScript:**
- Se ejecuta en el cliente (computadora del jugador)
- Solo afecta a ese jugador
- Usa para: Interfaces, efectos visuales personales

#### Crear tu Primer Script

1. En **Explorer**, busca **ServerScriptService**
2. Haz clic en el **+** junto a ServerScriptService
3. Busca y selecciona **"Script"**
4. Se creará un nuevo Script
5. Haz doble clic en el Script para abrirlo

#### La Ventana de Output

Antes de programar, abre la ventana Output:
- Ve a **View** → **Output**
- Esta ventana muestra mensajes de tus scripts
- Muy importante para ver resultados y errores

#### Tu Primer Código: print()

Borra todo el código que viene por defecto y escribe:

```lua
print("¡Hola mundo!")
```

**Ejecutar el código:**
1. Presiona **F5** para probar el juego
2. Mira la ventana Output
3. Verás: `¡Hola mundo!`
4. Presiona **Shift + F5** para detener

**¿Qué hace print()?**
- Muestra mensajes en la ventana Output
- Útil para probar código y encontrar errores
- Puedes imprimir texto, números, y más

#### Comentarios en el Código

Los comentarios son notas que no se ejecutan:

```lua
-- Esto es un comentario
print("Esto sí se ejecuta")
-- print("Esto NO se ejecuta")
```

Usa `--` para hacer comentarios. Son útiles para explicar tu código.

#### ✏️ Ejercicio 8: Mensajes Personalizados

**Tiempo estimado: 10 minutos**

Crea un script que imprima:
1. Tu nombre
2. Tu edad
3. Tu juego favorito
4. Un mensaje divertido

```lua
-- Mi primer script
print("Mi nombre es [TU NOMBRE]")
print("Tengo [TU EDAD] años")
print("Mi juego favorito es [JUEGO]")
print("¡Estoy aprendiendo a programar!")
```

---

### 📝 Paso 9: Variables y Cambiar Propiedades

**Objetivo:** Usar variables y modificar objetos con código.

#### ¿Qué es una Variable?

Una variable es como una caja donde guardas información para usarla después.

```lua
local miNombre = "Alex"
local miEdad = 9
local esDivertido = true
```

**Tipos de datos:**
- **string** (texto): Entre comillas `"así"`
- **number** (número): Sin comillas `9`, `3.14`, `100`
- **boolean** (verdadero/falso): `true` o `false`

#### Usar Variables

```lua
local nombre = "María"
local edad = 10

print("Hola, me llamo " .. nombre)
print("Tengo " .. edad .. " años")
```

El `..` une (concatena) texto.

#### Acceder a Objetos del Workspace

Para modificar un objeto con código, primero debes encontrarlo:

```lua
local miBloque = workspace.MiBloque
```

Esto busca un objeto llamado "MiBloque" en el Workspace.

#### Cambiar Propiedades con Código

**Cambiar color:**
```lua
local parte = workspace.MiBloque
parte.BrickColor = BrickColor.new("Bright red")
```

**Cambiar tamaño:**
```lua
local parte = workspace.MiBloque
parte.Size = Vector3.new(10, 5, 10)
```

**Cambiar posición:**
```lua
local parte = workspace.MiBloque
parte.Position = Vector3.new(0, 10, 0)
```

**Cambiar material:**
```lua
local parte = workspace.MiBloque
parte.Material = Enum.Material.Neon
```

#### ✏️ Ejercicio 9: Bloque Mágico

**Tiempo estimado: 15 minutos**

1. Crea un bloque en el mundo
2. Renómbralo: "BloqueMagico"
3. Crea un Script en ServerScriptService
4. Escribe este código:

```lua
local bloque = workspace.BloqueMagico

-- Cambiar propiedades
bloque.BrickColor = BrickColor.new("Bright blue")
bloque.Material = Enum.Material.Neon
bloque.Size = Vector3.new(8, 8, 8)
bloque.Transparency = 0.3

print("¡Bloque mágico creado!")
```

5. Presiona F5 y observa los cambios

---

### 📝 Paso 10: Bucles y Eventos

**Objetivo:** Hacer que el código se repita y responda a acciones.

#### Bucles: Repetir Código

**Bucle for (repetir N veces):**
```lua
for i = 1, 5 do
    print("Número: " .. i)
end
```

Esto imprime números del 1 al 5.

**Bucle while (repetir mientras sea verdad):**
```lua
local contador = 0

while contador < 3 do
    print("Contador: " .. contador)
    contador = contador + 1
    wait(1)  -- Espera 1 segundo
end
```

**wait() - Función importante:**
- `wait(1)` pausa el código por 1 segundo
- `wait(0.5)` pausa por medio segundo
- Siempre usa wait() en bucles infinitos

#### Bucle Infinito con wait()

```lua
while true do
    print("Esto se repite para siempre")
    wait(2)  -- Espera 2 segundos entre repeticiones
end
```

#### Eventos: Responder a Acciones

**Evento Touched (cuando algo toca un objeto):**

```lua
local parte = workspace.MiBloque

parte.Touched:Connect(function(otraParte)
    print("¡Alguien me tocó!")
end)
```

**Detectar si es un jugador:**
```lua
local parte = workspace.MiBloque

parte.Touched:Connect(function(otraParte)
    local humano = otraParte.Parent:FindFirstChild("Humanoid")
    if humano then
        print("¡Un jugador me tocó!")
    end
end)
```

#### ✏️ Ejercicio 10: Bloque de Colores

**Tiempo estimado: 15 minutos**

Crea un bloque que cambie de color constantemente:

1. Crea un bloque: "BloqueColores"
2. Crea un Script en ServerScriptService:

```lua
local bloque = workspace.BloqueColores

while true do
    bloque.BrickColor = BrickColor.new("Bright red")
    wait(1)
    bloque.BrickColor = BrickColor.new("Bright blue")
    wait(1)
    bloque.BrickColor = BrickColor.new("Bright green")
    wait(1)
    bloque.BrickColor = BrickColor.new("Bright yellow")
    wait(1)
end
```

---

## 🔴 NIVEL 4: Tu Primer Juego Completo

### 📝 Paso 11: Crear un Obby Básico

**Objetivo:** Construir un juego de obstáculos completo.

#### ¿Qué es un Obby?

Un Obby (Obstacle Course) es un juego donde saltas de plataforma en plataforma para llegar a la meta.

#### Paso 1: Configurar el Spawn

1. Ve a **Model** → **Spawn**
2. Aparecerá un SpawnLocation (plataforma con círculo)
3. Posiciónalo al inicio de tu obby
4. En Properties:
   - **Neutral** = true
   - **Duration** = 0

#### Paso 2: Crear Plataformas

1. Crea bloques para las plataformas
2. Tamaño recomendado: Size (6, 1, 6)
3. Ancla todas (Anchored = true)
4. Organízalas en un camino
5. Deja espacios para saltar entre ellas

#### Paso 3: Crear Lava (Kill Part)

1. Crea un bloque grande debajo de las plataformas
2. Renómbralo: "Lava"
3. Color: Rojo brillante
4. Material: Neon
5. CanCollide = false
6. Añade un Script dentro de la Lava:

```lua
local lava = script.Parent

lava.Touched:Connect(function(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        humano.Health = 0
    end
end)
```

#### Paso 4: Crear Checkpoints

1. Crea varios SpawnLocation a lo largo del obby
2. Renombra: "Checkpoint1", "Checkpoint2", etc.
3. Crea una carpeta en Workspace: "Checkpoints"
4. Mueve todos los checkpoints a esa carpeta
5. Crea un Script en ServerScriptService:

```lua
local checkpoints = workspace.Checkpoints:GetChildren()

for _, checkpoint in pairs(checkpoints) do
    checkpoint.Touched:Connect(function(parte)
        local humano = parte.Parent:FindFirstChild("Humanoid")
        if humano then
            local jugador = game.Players:GetPlayerFromCharacter(parte.Parent)
            if jugador then
                jugador.RespawnLocation = checkpoint
                checkpoint.BrickColor = BrickColor.new("Bright green")
            end
        end
    end)
end
```

#### Paso 5: Crear la Meta

1. Crea un bloque grande al final
2. Renómbralo: "Meta"
3. Material: Neon
4. Color: Dorado
5. Añade Sparkles (clic + en la Meta → Sparkles)
6. Añade un Script dentro:

```lua
local meta = script.Parent

meta.Touched:Connect(function(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        local jugador = game.Players:GetPlayerFromCharacter(parte.Parent)
        if jugador then
            print(jugador.Name .. " ¡ganó!")
        end
    end
end)
```

#### ✏️ Ejercicio 11: Tu Obby Completo

**Tiempo estimado: 60 minutos**

Crea un obby con:
- 1 spawn inicial
- 15 plataformas
- 3 checkpoints
- Lava debajo
- 1 meta al final
- Decoración (árboles, rocas)

---

### 📝 Paso 12: Publicar tu Juego

**Objetivo:** Compartir tu juego con el mundo.

#### Guardar tu Proyecto

1. Ve a **File** → **Save to Roblox**
2. Elige un nombre para tu juego
3. Haz clic en **Save**

#### Configurar el Juego

1. Ve a **File** → **Game Settings**
2. Configura:
   - **Name**: Nombre del juego
   - **Description**: Descripción corta
   - **Genre**: Tipo de juego (All Genres)
   - **Max Players**: 10 (recomendado)

#### Publicar

1. Ve a **File** → **Publish to Roblox**
2. Si es la primera vez, haz clic en **Create new game**
3. Si ya existe, selecciónalo y haz clic en **Overwrite**

#### Configurar en el Sitio Web

1. Ve a [create.roblox.com](https://create.roblox.com)
2. Haz clic en **Creations** → **Experiences**
3. Encuentra tu juego y haz clic en él
4. Configura:
   - **Icon**: Imagen cuadrada (512x512)
   - **Thumbnail**: Captura de pantalla del juego
   - **Description**: Descripción detallada
   - **Public/Private**: Elige si es público o privado

#### Hacer el Juego Público

1. En la configuración del juego
2. Ve a **Access**
3. Selecciona **Public**
4. Haz clic en **Save**

¡Felicidades! Tu juego ya está publicado y tus amigos pueden jugarlo.

---

## 🎉 ¡Completaste la Guía!

Has aprendido:
- ✅ Construcción básica en 3D
- ✅ Herramientas de transformación
- ✅ Física y anclaje
- ✅ Colores y materiales
- ✅ Programación en Luau
- ✅ Crear un juego completo
- ✅ Publicar tu juego

**Próximos pasos:**
- Experimenta con diferentes tipos de juegos
- Aprende sobre TweenService para animaciones
- Explora DataStores para guardar datos
- Únete a la comunidad de Roblox DevForum

¡Sigue creando y divirtiéndote! 🚀
