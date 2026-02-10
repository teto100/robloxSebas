# 🎮 Guía de Roblox Studio para Niños

## 📚 Índice

- [Nivel 1: Arquitecto de Mundos](#nivel-1-arquitecto-de-mundos)
- [Nivel 2: Editor de Terreno y Efectos](#nivel-2-editor-de-terreno-y-efectos)
- [Nivel 3: Introducción al Código](#nivel-3-introducción-al-código)
- [Nivel 4: Creando un Juego Real](#nivel-4-creando-un-juego-real)

---

## 🟢 Nivel 1: Arquitecto de Mundos

### Paso 1: Instalación y Primer Contacto

**¿Qué vamos a hacer?**
Instalar Roblox Studio y aprender a moverte por el mundo 3D.

**Instrucciones detalladas:**

1. **Descargar Roblox Studio:**
   - Ve a [create.roblox.com](https://create.roblox.com)
   - Haz clic en "Start Creating" (Empezar a Crear)
   - Si no tienes cuenta, crea una (necesitarás ayuda de un adulto)
   - Descarga Roblox Studio para tu sistema operativo
   - Instala el programa siguiendo las instrucciones

2. **Abrir Roblox Studio:**
   - Abre Roblox Studio desde tu escritorio
   - Verás una pantalla con plantillas de juegos
   - Busca y selecciona **"Baseplate"** (es una plataforma verde simple)
   - Haz clic en "Create" (Crear)
   - Espera unos segundos mientras carga

3. **Conocer la Interfaz:**
   - **Viewport** (Centro): Es tu mundo 3D donde construyes
   - **Explorer** (Derecha): Lista de todos los objetos en tu juego
   - **Properties** (Derecha abajo): Detalles del objeto seleccionado
   - **Toolbox** (Abajo): Modelos y recursos gratuitos
   - **Home/Model/Test** (Arriba): Pestañas con herramientas

**Controles de Cámara (MUY IMPORTANTE):**
- **W**: Mover hacia adelante
- **S**: Mover hacia atrás
- **A**: Mover a la izquierda
- **D**: Mover a la derecha
- **E**: Subir
- **Q**: Bajar
- **Clic derecho + mover ratón**: Girar la vista (mantén presionado)
- **Rueda del ratón**: Acercar/Alejar zoom
- **F**: Enfocar el objeto seleccionado (muy útil si te pierdes)
- **Shift + W/A/S/D**: Moverte más rápido

**✏️ Ejercicio 1:** 
- Practica volando por el mapa durante 5 minutos
- Intenta ver la plataforma desde arriba (usa E para subir)
- Mira desde abajo (usa Q para bajar)
- Da vueltas alrededor usando clic derecho
- Practica hasta que te sientas cómodo moviéndote

---

### Paso 2: Crear y Manipular Objetos (Parts)

**¿Qué son las Parts?**
Las Parts son los bloques de construcción básicos en Roblox. Como piezas de LEGO digitales. Todo lo que ves en un juego de Roblox está hecho de Parts.

**Crear tu primera Part (paso a paso):**

1. Busca la pestaña **Home** en la parte superior (es la primera pestaña)
2. En la sección "Insert" verás un botón que dice **Part** con una flecha pequeña ▼
3. Haz clic en la flecha para ver las opciones:
   - **Block**: Cubo/Bloque rectangular (el más común)
   - **Sphere**: Esfera/Pelota perfecta
   - **Cylinder**: Cilindro (como un tubo)
   - **Wedge**: Rampa triangular (para hacer rampas)
   - **CornerWedge**: Esquina triangular
   - **Part**: Bloque simple (opción por defecto)

4. Haz clic en **Block** para empezar
5. Aparecerá un bloque gris en el centro de tu pantalla
6. Haz clic en él para seleccionarlo (verás un borde azul brillante alrededor)

**Entender el Explorer:**

1. Mira la ventana **Explorer** a la derecha
2. Busca **Workspace** (es donde están todos los objetos del mundo)
3. Haz clic en la flechita ▶ junto a Workspace para expandirlo
4. Verás tu Part listada como "Part"
5. Si haces clic en "Part" en el Explorer, también se selecciona en el mundo

**Renombrar objetos (MUY IMPORTANTE):**

1. Selecciona tu Part
2. En la ventana **Properties** (abajo a la derecha), busca la primera propiedad: **Name**
3. Haz clic en donde dice "Part" y cámbialo a "MiPrimerBloque"
4. Presiona Enter
5. Ahora es más fácil encontrarlo después

**✏️ Ejercicio 2:** 
- Crea 5 objetos diferentes: Block, Sphere, Cylinder, Wedge, CornerWedge
- Renombra cada uno: "Bloque1", "Esfera1", "Cilindro1", etc.
- Colócalos en fila sobre la plataforma verde
- Practica seleccionándolos desde el Explorer

---

### Paso 3: Herramientas Básicas (Mover, Escalar, Rotar)

**Herramienta Mover (Move) - La más importante:**

**IMPORTANTE:** Si no ves las flechas de colores, presiona **Ctrl + 2** para activar Move.

1. Selecciona cualquier Part haciendo clic en ella
2. Presiona **Ctrl + 2** para activar la herramienta Move
3. Verás aparecer **3 flechas de colores** en el objeto:
   - **Flecha ROJA**: Mueve en el eje X (izquierda/derecha)
   - **Flecha VERDE**: Mueve en el eje Y (arriba/abajo)
   - **Flecha AZUL**: Mueve en el eje Z (adelante/atrás)

**Si NO ves las flechas:**
- Verifica que el objeto esté seleccionado (borde azul)
- Presiona **Ctrl + 2** de nuevo
- Las flechas deben aparecer inmediatamente

4. **Cómo mover:**
   - Haz clic en una flecha y arrastra (mantén presionado el clic)
   - El objeto se moverá solo en esa dirección
   - Suelta el clic cuando esté donde quieres

5. **Mover libremente:**
   - Haz clic en el centro del objeto (no en las flechas)
   - Arrastra para mover en cualquier dirección

6. **Ajustar el movimiento:**
   - En la parte superior, verás "Move: 1 stud"
   - Haz clic en el número para cambiar el tamaño del paso
   - Opciones: 0.2, 0.5, 1, 2, 4, 5 studs
   - Studs = unidades de medida en Roblox (1 stud ≈ 28cm)

**Herramienta Escalar (Scale) - Cambiar tamaño:**

1. En la pestaña **Home** o **Model**, busca el icono **Scale** (parece una caja con flechas hacia afuera)
2. Haz clic en él
3. Verás **6 puntos blancos** en las esquinas del objeto
4. También verás **3 caras de colores** (rojo, verde, azul)

5. **Cómo escalar:**
   - Arrastra un **punto blanco** para cambiar el tamaño proporcionalmente
   - Arrastra una **cara de color** para estirar solo en esa dirección
   - Rojo = ancho, Verde = alto, Azul = profundidad

6. **Escalar con números exactos:**
   - Selecciona el objeto
   - En **Properties**, busca **Size**
   - Verás 3 números: X, Y, Z
   - Cámbialo manualmente (ejemplo: 10, 1, 10 para una plataforma plana)

**Herramienta Rotar (Rotate) - Girar objetos:**

1. Busca el icono **Rotate** (parece una flecha circular)
2. Haz clic en él
3. Verás **3 círculos de colores** alrededor del objeto:
   - **Círculo ROJO**: Gira en el eje X
   - **Círculo VERDE**: Gira en el eje Y (como una puerta)
   - **Círculo AZUL**: Gira en el eje Z

4. **Cómo rotar:**
   - Haz clic en un círculo y arrastra
   - El objeto girará en esa dirección
   - Por defecto gira de 15 en 15 grados

5. **Cambiar el ángulo de rotación:**
   - Arriba verás "Rotate: 15°"
   - Cámbialo a 5°, 15°, 30°, 45°, 90° según necesites

6. **Rotar con números exactos:**
   - En **Properties**, busca **Orientation**
   - Cambia los valores X, Y, Z manualmente

**Atajos de teclado (para ir más rápido):**
- **Ctrl + 2**: Activar herramienta Move
- **Ctrl + 3**: Activar herramienta Scale
- **Ctrl + 4**: Activar herramienta Rotate
- **Ctrl + D**: Duplicar el objeto seleccionado
- **Delete**: Borrar el objeto seleccionado
- **Ctrl + Z**: Deshacer
- **Ctrl + Y**: Rehacer

**✏️ Ejercicio 3:** Construye una casa simple:

1. **Paredes:**
   - Crea 4 bloques para las paredes
   - Escala cada uno: Size = (1, 8, 10) para paredes delgadas y altas
   - Muévelos para formar un cuadrado
   - Renombra: "Pared1", "Pared2", "Pared3", "Pared4"

2. **Techo:**
   - Crea 1 bloque grande
   - Escala: Size = (12, 0.5, 12) para que sea plano
   - Muévelo arriba de las paredes
   - Renombra: "Techo"

3. **Columnas:**
   - Crea 2 cilindros
   - Escala: Size = (1, 8, 1) para hacerlos altos y delgados
   - Colócalos en la entrada como columnas
   - Renombra: "Columna1", "Columna2"

4. **Desafío extra:** Añade una puerta usando un Wedge rotado

---

### Paso 4: El Anclaje (Anchored)

**¿Por qué se caen mis construcciones?**
En Roblox, los objetos tienen física real. Si no están anclados, ¡caen por la gravedad!

**Cómo anclar un objeto:**

1. Selecciona la Part
2. En la ventana **Properties** (Propiedades), busca **Anchored**
3. Marca la casilla ✅

**Regla importante:** Ancla siempre tus construcciones para que no se caigan.

**✏️ Ejercicio 4:** 
- Crea un bloque SIN anclar y presiona Play (▶️). ¿Qué pasa?
- Ahora áncalo y presiona Play de nuevo. ¿Qué cambió?

---

### Paso 5: Colores y Materiales

**Cambiar el color:**

1. Selecciona una Part
2. En **Properties**, busca **Color**
3. Haz clic en el cuadro de color y elige tu favorito

**Cambiar el material:**

1. En **Properties**, busca **Material**
2. Prueba diferentes materiales:
   - **Neon**: Brilla en la oscuridad
   - **Wood**: Madera
   - **Glass**: Cristal transparente
   - **Metal**: Metal brillante
   - **Grass**: Pasto

**✏️ Ejercicio 5:** Crea un arcoíris usando 7 bloques de diferentes colores. Usa material Neon para que brillen.

---

### Paso 6: La Toolbox (Caja de Herramientas)

**¿Qué es la Toolbox?**
Es una biblioteca gigante de modelos creados por otros usuarios que puedes usar gratis.

**Cómo usar la Toolbox:**

1. Ve a **View** → **Toolbox** (o presiona Alt+T)
2. Busca algo, por ejemplo: "tree" (árbol)
3. Haz clic en un modelo para insertarlo en tu mundo

**⚠️ Consejo de seguridad:** Solo usa modelos de creadores verificados (tienen una marca azul ✓).

**✏️ Ejercicio 6:** Busca y añade a tu mundo:
- 3 árboles
- 1 casa
- 1 coche

---

### Paso 7: Crear Modelos (Grupos de Objetos)

**¿Por qué crear modelos?**
Para mover varios objetos juntos, como si fueran uno solo.

**Cómo crear un modelo:**

1. Selecciona varias Parts (mantén Ctrl y haz clic en cada una)
2. Clic derecho → **Group** (o Ctrl+G)
3. ¡Ahora todas se mueven juntas!

**Desagrupar:**
- Clic derecho → **Ungroup** (Ctrl+U)

**✏️ Ejercicio 7:** Construye una mesa con silla:
- Mesa: 1 bloque plano + 4 cilindros delgados (patas)
- Silla: Similar pero más pequeña
- Agrupa cada mueble por separado

---

## 🟡 Nivel 2: Editor de Terreno y Efectos

### Paso 8: Herramientas de Terreno

**Crear terreno natural:**

1. Ve a **Home** → **Editor** (en la sección Terrain)
2. Se abrirá el Editor de Terreno

**Herramientas principales:**

- **Generate**: Crea un mundo automático con montañas
- **Add**: Pintar terreno (pasto, arena, roca)
- **Subtract**: Borrar terreno (hacer cuevas)
- **Paint**: Cambiar el material del terreno
- **Grow**: Hacer crecer el terreno
- **Erode**: Desgastar el terreno

**✏️ Ejercicio 8:** 
1. Usa **Generate** para crear un mundo con montañas
2. Usa **Add** para crear una colina de pasto
3. Usa **Subtract** para hacer una cueva en la colina

---

### Paso 9: Agua y Paisajes

**Crear agua:**

1. En el Editor de Terreno, selecciona **Add**
2. En **Material**, elige **Water**
3. Pinta en el suelo para crear un lago o río

**Tipos de terreno útiles:**
- **Grass**: Pasto verde
- **Sand**: Arena de playa
- **Rock**: Roca gris
- **Snow**: Nieve
- **Water**: Agua
- **Ground**: Tierra marrón

**✏️ Ejercicio 9:** Crea una isla:
- Usa **Sand** para la playa alrededor
- Usa **Grass** para el centro
- Rodea todo con **Water**
- Añade algunos árboles de la Toolbox

---

### Paso 10: Iluminación y Atmósfera

**Cambiar la hora del día:**

1. En **Explorer**, busca **Lighting**
2. En **Properties**, encuentra **ClockTime**
3. Cambia el número:
   - 12 = Mediodía
   - 0 = Medianoche
   - 6 = Amanecer
   - 18 = Atardecer

**Cambiar el color del cielo:**

1. En **Lighting**, busca **Ambient**
2. Cambia el color para dar ambiente diferente

**✏️ Ejercicio 10:** Crea tres escenas diferentes:
- Una escena de día soleado (ClockTime = 12)
- Una escena de noche (ClockTime = 0)
- Una escena de atardecer naranja (ClockTime = 18)

---

### Paso 11: Efectos Visuales (Particles)

**Añadir fuego a un objeto:**

1. Selecciona una Part
2. Haz clic en el **+** junto a la Part en Explorer
3. Busca y añade **Fire**
4. ¡Tu objeto está en llamas!

**Otros efectos:**

- **Smoke**: Humo
- **Sparkles**: Chispas brillantes
- **ParticleEmitter**: Efectos personalizados

**Personalizar el fuego:**

En Properties del Fire, puedes cambiar:
- **Size**: Tamaño de las llamas
- **Heat**: Intensidad
- **Color**: Color del fuego

**✏️ Ejercicio 11:** Crea una fogata:
1. Haz un círculo de bloques de piedra (Material: Rock)
2. En el centro, pon un bloque con Fire
3. Añade Smoke encima para el humo
4. Añade PointLight (luz naranja) para iluminar alrededor

---

## 🟠 Nivel 3: Introducción al Código (Luau)

### Paso 12: Mi Primer Script

**¿Qué es un Script?**
Un script es una lista de instrucciones que le dices a Roblox qué hacer. Es como una receta de cocina para el juego.

**Crear tu primer script:**

1. En **Explorer**, busca **ServerScriptService**
2. Haz clic en el **+** junto a ServerScriptService
3. Añade un **Script**
4. Haz doble clic en el Script para abrirlo

**Tu primer código:**

Borra todo lo que hay y escribe:

```lua
print("¡Hola mundo!")
```

**Ejecutar el código:**

1. Presiona **Play** (▶️)
2. Abre la ventana **Output** (View → Output)
3. ¡Verás tu mensaje!

**✏️ Ejercicio 12:** Haz que el código imprima tu nombre:
```lua
print("Mi nombre es [TU NOMBRE]")
```

---

### Paso 13: Cambiar Propiedades con Código

**Hacer que una parte cambie de color:**

1. Crea una Part en el mundo y nómbrala "MiBloque" (en Properties → Name)
2. Crea un Script en ServerScriptService
3. Escribe este código:

```lua
local parte = workspace.MiBloque
parte.BrickColor = BrickColor.new("Bright red")
```

**¿Qué hace cada línea?**
- `local parte = workspace.MiBloque`: Busca el bloque en el mundo
- `parte.BrickColor = ...`: Cambia su color a rojo brillante

**Más colores:**
- "Bright blue" (azul)
- "Bright green" (verde)
- "Bright yellow" (amarillo)
- "Really black" (negro)

**✏️ Ejercicio 13:** Crea 3 bloques y haz que cada uno cambie a un color diferente con código.

---

### Paso 14: Variables (Cajas de Información)

**¿Qué es una variable?**
Una variable es como una caja donde guardas información para usarla después.

**Ejemplo:**

```lua
local miNombre = "Alex"
local miEdad = 9
local miColorFavorito = "azul"

print("Me llamo " .. miNombre)
print("Tengo " .. miEdad .. " años")
print("Mi color favorito es " .. miColorFavorito)
```

**Tipos de variables:**
- **Texto (string)**: Se escribe entre comillas "así"
- **Números (number)**: Se escriben sin comillas: 9, 100, 3.14
- **Verdadero/Falso (boolean)**: true o false

**✏️ Ejercicio 14:** Crea variables con:
- Tu nombre
- Tu edad
- Tu juego favorito
- Imprime todo con print()

---

### Paso 15: Bucles (Hacer que algo se repita)

**¿Qué es un bucle?**
Un bucle hace que el código se repita muchas veces. Como cuando cuentas: 1, 2, 3, 4, 5...

**Bucle simple:**

```lua
for i = 1, 5 do
    print("Número: " .. i)
end
```

Esto imprime:
```
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
```

**Bucle infinito (con espera):**

```lua
while true do
    print("¡Esto se repite para siempre!")
    wait(1)  -- Espera 1 segundo
end
```

**✏️ Ejercicio 15:** Crea un bloque que cambie de color constantemente:

```lua
local parte = workspace.MiBloque

while true do
    parte.BrickColor = BrickColor.new("Bright red")
    wait(1)
    parte.BrickColor = BrickColor.new("Bright blue")
    wait(1)
    parte.BrickColor = BrickColor.new("Bright green")
    wait(1)
end
```

---

### Paso 16: Eventos (Cuando algo pasa)

**¿Qué es un evento?**
Un evento es algo que pasa en el juego, como tocar un objeto o hacer clic en un botón.

**Evento Touched (cuando tocas algo):**

```lua
local parte = workspace.MiBloque

parte.Touched:Connect(function(otraParte)
    print("¡Alguien me tocó!")
end)
```

**✏️ Ejercicio 16:** Crea un bloque que cambie de color cuando lo toques:

```lua
local parte = workspace.MiBloque

parte.Touched:Connect(function()
    parte.BrickColor = BrickColor.random()
end)
```

---

### Paso 17: Kill Part (Lava que elimina al jugador)

**Crear lava mortal:**

1. Crea una Part y nómbrala "Lava"
2. Hazla roja y con material Neon
3. Desactiva **CanCollide** en Properties (para que puedas atravesarla)
4. Añade este script dentro de la Part:

```lua
local lava = script.Parent

lava.Touched:Connect(function(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        humano.Health = 0
    end
end)
```

**¿Qué hace?**
- Cuando alguien toca la lava
- Busca si es un jugador (tiene Humanoid)
- Le quita toda la vida (Health = 0)

**✏️ Ejercicio 17:** Crea un río de lava que el jugador debe saltar para cruzar.

---

### Paso 18: Plataforma que Desaparece

**Crear una plataforma trampa:**

1. Crea una Part y nómbrala "PlataformaTrampa"
2. Añade este script dentro:

```lua
local plataforma = script.Parent

plataforma.Touched:Connect(function(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        wait(0.5)
        plataforma.Transparency = 1
        plataforma.CanCollide = false
        wait(3)
        plataforma.Transparency = 0
        plataforma.CanCollide = true
    end
end)
```

**¿Qué hace?**
- Cuando un jugador la toca
- Espera 0.5 segundos
- Se vuelve invisible y atravesable
- Espera 3 segundos
- Vuelve a aparecer

**✏️ Ejercicio 18:** Crea un camino de 5 plataformas que desaparecen. El jugador debe correr rápido para no caer.

---

## 🔴 Nivel 4: Creando un Juego Real (Obby)

### Paso 19: Configurar el Spawn (Punto de Inicio)

**¿Qué es un SpawnLocation?**
Es el lugar donde aparecen los jugadores cuando entran al juego.

**Crear un spawn:**

1. Ve a **Model** → **Spawn**
2. Aparecerá una plataforma con un círculo
3. Colócala al inicio de tu obby

**Propiedades importantes:**
- **Neutral = true**: Cualquier jugador puede aparecer aquí
- **Duration = 0**: El jugador aparece inmediatamente

**✏️ Ejercicio 19:** Coloca un spawn al inicio de tu juego y prueba que funcione presionando Play.

---

### Paso 20: Crear Checkpoints (Puntos de Guardado)

**¿Qué son los checkpoints?**
Son puntos donde se guarda tu progreso. Si mueres, vuelves al último checkpoint.

**Crear checkpoints:**

1. Crea varios **SpawnLocation** a lo largo del obby
2. Nómbralos: "Checkpoint1", "Checkpoint2", etc.
3. Añade este script en **ServerScriptService**:

```lua
local checkpoints = workspace:WaitForChild("Checkpoints"):GetChildren()

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

**Organización:**
1. Crea una carpeta en Workspace llamada "Checkpoints"
2. Pon todos los spawns dentro de esa carpeta

**✏️ Ejercicio 20:** Crea un obby con 5 checkpoints. Prueba que al morir vuelves al último checkpoint tocado.

---

### Paso 21: Obstáculos Clásicos de Obby

**Obstáculos que puedes crear:**

**1. Plataformas móviles:**

```lua
local plataforma = script.Parent
local inicio = plataforma.Position
local fin = inicio + Vector3.new(20, 0, 0)

while true do
    plataforma.Position = fin
    wait(2)
    plataforma.Position = inicio
    wait(2)
end
```

**2. Plataforma giratoria:**

```lua
local plataforma = script.Parent

while true do
    plataforma.Orientation = plataforma.Orientation + Vector3.new(0, 1, 0)
    wait(0.01)
end
```

**3. Muro de lava:**

Crea una pared roja con el script de Kill Part del Paso 17.

**✏️ Ejercicio 21:** Crea un obby con:
- 3 plataformas móviles
- 2 plataformas giratorias
- 1 río de lava
- 5 checkpoints

---

### Paso 22: Interfaz de Usuario (GUI) Básica

**Crear un mensaje de bienvenida:**

1. En **Explorer**, busca **StarterGui**
2. Añade un **ScreenGui**
3. Dentro del ScreenGui, añade un **TextLabel**
4. En Properties del TextLabel:
   - **Text**: "¡Bienvenido a mi Obby!"
   - **Size**: {0.5, 0}, {0.1, 0}
   - **Position**: {0.25, 0}, {0.05, 0}
   - **BackgroundColor3**: Elige un color
   - **TextScaled**: true

**Hacer que desaparezca después de 5 segundos:**

Añade un **LocalScript** dentro del TextLabel:

```lua
local texto = script.Parent

wait(5)
texto.Visible = false
```

**✏️ Ejercicio 22:** Crea una GUI que muestre:
- Un mensaje de bienvenida
- El nombre de tu juego
- Que desaparezca después de 3 segundos

---

### Paso 23: Contador de Tiempo

**Crear un cronómetro:**

1. En StarterGui → ScreenGui, añade un TextLabel
2. Nómbralo "Cronometro"
3. Añade este LocalScript en StarterGui:

```lua
local cronometro = script.Parent.ScreenGui.Cronometro
local tiempo = 0

while true do
    wait(1)
    tiempo = tiempo + 1
    local minutos = math.floor(tiempo / 60)
    local segundos = tiempo % 60
    cronometro.Text = string.format("Tiempo: %02d:%02d", minutos, segundos)
end
```

**✏️ Ejercicio 23:** Añade un cronómetro a tu obby que muestre cuánto tiempo llevas jugando.

---

### Paso 24: Zona de Victoria

**Crear una meta:**

1. Crea una Part grande y brillante (Material: Neon, Color: Dorado)
2. Nómbrala "Meta"
3. Añade este script dentro:

```lua
local meta = script.Parent

meta.Touched:Connect(function(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        local jugador = game.Players:GetPlayerFromCharacter(parte.Parent)
        if jugador then
            print(jugador.Name .. " ¡ha ganado!")
            
            -- Crear mensaje de victoria
            local gui = Instance.new("ScreenGui", jugador.PlayerGui)
            local texto = Instance.new("TextLabel", gui)
            texto.Size = UDim2.new(1, 0, 1, 0)
            texto.BackgroundColor3 = Color3.new(0, 0, 0)
            texto.BackgroundTransparency = 0.5
            texto.Text = "¡GANASTE!"
            texto.TextScaled = true
            texto.TextColor3 = Color3.new(1, 1, 0)
        end
    end
end)
```

**✏️ Ejercicio 24:** Añade una zona de victoria al final de tu obby con efectos de Sparkles.

---

### Paso 25: Publicar tu Juego

**Preparar tu juego:**

1. **Nombre del juego**: File → Game Settings → Name
2. **Descripción**: Escribe de qué trata tu obby
3. **Icono**: Toma una captura de pantalla bonita

**Publicar:**

1. Ve a **File** → **Publish to Roblox**
2. Elige un nombre único
3. Selecciona si es público o privado
4. Haz clic en **Create**

**Configurar el juego:**

1. Ve a [create.roblox.com](https://create.roblox.com)
2. Entra a tu juego
3. Sube una miniatura (imagen que verán los jugadores)
4. Configura la descripción

**✏️ Ejercicio 25:** Publica tu obby y comparte el enlace con tus amigos para que lo jueguen.

---

## 🎯 Proyectos Finales

### Proyecto 1: Obby Temático

Crea un obby con un tema específico:
- **Obby de Lava**: Todo rojo y naranja, con fuego por todas partes
- **Obby de Hielo**: Azul y blanco, con nieve y hielo resbaladizo
- **Obby Espacial**: Negro con estrellas, plataformas flotantes en el espacio
- **Obby de Selva**: Verde, con árboles y agua

**Requisitos:**
- Mínimo 10 obstáculos diferentes
- 5 checkpoints
- Terreno personalizado
- Iluminación temática
- GUI de bienvenida
- Zona de victoria

---

### Proyecto 2: Carrera de Obstáculos Multijugador

Crea un obby donde varios jugadores compiten:
- Varios carriles paralelos
- Mismo recorrido para todos
- Cronómetro para ver quién es más rápido
- Podio de ganadores al final

---

### Proyecto 3: Obby con Coleccionables

Añade monedas o estrellas que el jugador debe recoger:

**Script para coleccionable:**

```lua
local moneda = script.Parent

moneda.Touched:Connect(function(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        moneda:Destroy()
        -- Aquí puedes añadir puntos al jugador
    end
end)
```

---

## 📖 Recursos Adicionales

**Documentación Oficial:**
- [Documentación de Roblox (Español)](https://create.roblox.com/docs/es-es)
- [Tutoriales de Roblox](https://create.roblox.com/docs/es-es/tutorials)

**Comunidad:**
- [DevForum de Roblox](https://devforum.roblox.com)
- [YouTube: Tutoriales de Roblox Studio](https://www.youtube.com/results?search_query=roblox+studio+tutorial+español)

**Consejos Finales:**
- Practica todos los días un poco
- No tengas miedo de experimentar
- Guarda tu trabajo frecuentemente (Ctrl+S)
- Pide ayuda cuando la necesites
- ¡Diviértete creando!

---

## 🏆 ¡Felicidades!

Has completado la guía básica e intermedia de Roblox Studio. Ahora tienes las herramientas para crear tus propios juegos increíbles. ¡Sigue practicando y creando!

**Próximos pasos:**
- Aprende sobre TweenService para animaciones suaves
- Explora DataStores para guardar datos de jugadores
- Investiga sobre RemoteEvents para comunicación cliente-servidor
- Crea sistemas de tiendas y monedas

¡Nos vemos en Roblox! 🚀
