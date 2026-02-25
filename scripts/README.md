# 🏰 Juego de Castillo - Mago vs Luchador

Scripts para crear un juego temático de castillo en Roblox Studio donde los jugadores eligen entre ser Mago o Luchador.

## 📋 Instrucciones de Instalación

### Paso 1: Crear el Mundo del Castillo

1. Abre Roblox Studio
2. Crea un nuevo proyecto con plantilla **Baseplate**
3. Ve a **Vista** → **Salida** (para ver mensajes)
4. En el **Explorador**, busca **ServerScriptService**
5. Haz clic en el **+** junto a ServerScriptService
6. Selecciona **Script**
7. Borra todo el código que viene por defecto
8. Copia y pega el contenido de `castillo-simple.lua` (versión más visible)
9. Haz clic en el botón **▶ Play** en la parte superior (o presiona **F8**)
10. Verás mensajes en la ventana Salida y el castillo aparecerá
11. **Mueve la cámara** (W, A, S, D, E, Q) para ver todo el castillo
12. Haz clic en **■ Stop** para detener
13. **IMPORTANTE:** Después de que se cree el castillo, BORRA este script (ya no lo necesitas)

### Paso 2: Añadir el Sistema de Clases

1. En el **Explorador**, busca **StarterPlayer**
2. Dentro de StarterPlayer, busca **StarterPlayerScripts**
3. Haz clic en el **+** junto a StarterPlayerScripts
4. Selecciona **LocalScript** (NO Script normal)
5. Renómbralo: "MenuClases"
6. Copia y pega el contenido de `menu-local.lua`
7. Guarda el proyecto (**Cmd + S**)

### Paso 3: Probar el Juego

1. Haz clic en el botón **▶ Play** (o presiona **F8**)
2. Aparecerá un menú pidiendo tu nombre
3. Escribe un nombre
4. Elige entre **🔮 MAGO** o **⚔️ LUCHADOR**
5. Tu personaje cambiará de color y recibirá accesorios

## 🎮 Características

### Clase Mago 🔮
- **Colores:** Morado y azul
- **Accesorio:** Sombrero de mago brillante (Neón)
- **Estilo:** Místico y mágico

### Clase Luchador ⚔️
- **Colores:** Rojo y gris
- **Accesorio:** Espada de metal
- **Estilo:** Guerrero fuerte

### Mundo del Castillo 🏰
- **4 Torres** en las esquinas con techos rojos
- **Murallas** de piedra rodeando el castillo
- **Castillo central** grande
- **Antorchas** con fuego y luz
- **Puerta** de madera
- **Iluminación** de atardecer

## 🛠️ Personalización

### Cambiar Colores del Mago
En `juego-castillo.lua`, líneas 107-111:
```lua
if torso then torso.BrickColor = BrickColor.new("Bright violet") end
if brazoDer then brazoDer.BrickColor = BrickColor.new("Bright blue") end
```

### Cambiar Colores del Luchador
Líneas 130-134:
```lua
if torso then torso.BrickColor = BrickColor.new("Bright red") end
if brazoDer then brazoDer.BrickColor = BrickColor.new("Dark stone grey") end
```

### Añadir Más Clases
Duplica el código del botón y la función `aplicarSkin()` con una nueva clase.

## 📝 Notas

- El script del mundo solo se ejecuta UNA VEZ para crear el castillo
- El script de clases debe permanecer siempre activo
- Los jugadores pueden cambiar de clase reiniciando (Reset Character)

## 🎯 Próximos Pasos

Ideas para expandir el juego:
- Añadir habilidades especiales para cada clase
- Crear zonas de combate
- Sistema de puntos
- Más clases (Arquero, Caballero, etc.)
- Enemigos NPC

---

Hecho con 💙 para aprender Roblox Studio
