-- CASTILLO SIMPLE Y VISIBLE
-- Coloca en ServerScriptService

wait(1) -- Esperar 1 segundo

print("🏰 Iniciando construcción del castillo...")

-- Suelo grande de piedra
local suelo = Instance.new("Part")
suelo.Name = "SueloCastillo"
suelo.Size = Vector3.new(150, 2, 150)
suelo.Position = Vector3.new(0, -1, 0)
suelo.Anchored = true
suelo.BrickColor = BrickColor.new("Dark stone grey")
suelo.Material = Enum.Material.Cobblestone
suelo.Parent = workspace

-- Torre 1 (esquina frontal izquierda)
local torre1 = Instance.new("Part")
torre1.Name = "Torre1"
torre1.Size = Vector3.new(12, 35, 12)
torre1.Position = Vector3.new(-50, 17.5, -50)
torre1.Anchored = true
torre1.BrickColor = BrickColor.new("Medium stone grey")
torre1.Material = Enum.Material.Brick
torre1.Parent = workspace

-- Techo torre 1
local techo1 = Instance.new("Part")
techo1.Size = Vector3.new(14, 10, 14)
techo1.Position = Vector3.new(-50, 40, -50)
techo1.Anchored = true
techo1.BrickColor = BrickColor.new("Bright red")
techo1.Material = Enum.Material.SmoothPlastic
techo1.Shape = Enum.PartType.Cylinder
techo1.Orientation = Vector3.new(0, 0, 90)
techo1.Parent = workspace

-- Torre 2 (esquina frontal derecha)
local torre2 = Instance.new("Part")
torre2.Name = "Torre2"
torre2.Size = Vector3.new(12, 35, 12)
torre2.Position = Vector3.new(50, 17.5, -50)
torre2.Anchored = true
torre2.BrickColor = BrickColor.new("Medium stone grey")
torre2.Material = Enum.Material.Brick
torre2.Parent = workspace

-- Techo torre 2
local techo2 = Instance.new("Part")
techo2.Size = Vector3.new(14, 10, 14)
techo2.Position = Vector3.new(50, 40, -50)
techo2.Anchored = true
techo2.BrickColor = BrickColor.new("Bright red")
techo2.Material = Enum.Material.SmoothPlastic
techo2.Shape = Enum.PartType.Cylinder
techo2.Orientation = Vector3.new(0, 0, 90)
techo2.Parent = workspace

-- Torre 3 (esquina trasera izquierda)
local torre3 = Instance.new("Part")
torre3.Name = "Torre3"
torre3.Size = Vector3.new(12, 35, 12)
torre3.Position = Vector3.new(-50, 17.5, 50)
torre3.Anchored = true
torre3.BrickColor = BrickColor.new("Medium stone grey")
torre3.Material = Enum.Material.Brick
torre3.Parent = workspace

-- Torre 4 (esquina trasera derecha)
local torre4 = Instance.new("Part")
torre4.Name = "Torre4"
torre4.Size = Vector3.new(12, 35, 12)
torre4.Position = Vector3.new(50, 17.5, 50)
torre4.Anchored = true
torre4.BrickColor = BrickColor.new("Medium stone grey")
torre4.Material = Enum.Material.Brick
torre4.Parent = workspace

-- Muralla frontal
local murallaFrente = Instance.new("Part")
murallaFrente.Size = Vector3.new(88, 20, 4)
murallaFrente.Position = Vector3.new(0, 10, -50)
murallaFrente.Anchored = true
murallaFrente.BrickColor = BrickColor.new("Medium stone grey")
murallaFrente.Material = Enum.Material.Brick
murallaFrente.Parent = workspace

-- Muralla trasera
local murallaAtras = Instance.new("Part")
murallaAtras.Size = Vector3.new(88, 20, 4)
murallaAtras.Position = Vector3.new(0, 10, 50)
murallaAtras.Anchored = true
murallaAtras.BrickColor = BrickColor.new("Medium stone grey")
murallaAtras.Material = Enum.Material.Brick
murallaAtras.Parent = workspace

-- Muralla izquierda
local murallaIzq = Instance.new("Part")
murallaIzq.Size = Vector3.new(4, 20, 88)
murallaIzq.Position = Vector3.new(-50, 10, 0)
murallaIzq.Anchored = true
murallaIzq.BrickColor = BrickColor.new("Medium stone grey")
murallaIzq.Material = Enum.Material.Brick
murallaIzq.Parent = workspace

-- Muralla derecha
local murallaDer = Instance.new("Part")
murallaDer.Size = Vector3.new(4, 20, 88)
murallaDer.Position = Vector3.new(50, 10, 0)
murallaDer.Anchored = true
murallaDer.BrickColor = BrickColor.new("Medium stone grey")
murallaDer.Material = Enum.Material.Brick
murallaDer.Parent = workspace

-- Castillo central
local castillo = Instance.new("Part")
castillo.Name = "CastilloCentral"
castillo.Size = Vector3.new(35, 45, 35)
castillo.Position = Vector3.new(0, 22.5, 0)
castillo.Anchored = true
castillo.BrickColor = BrickColor.new("Dark stone grey")
castillo.Material = Enum.Material.Slate
castillo.Parent = workspace

-- Puerta
local puerta = Instance.new("Part")
puerta.Name = "Puerta"
puerta.Size = Vector3.new(10, 15, 1)
puerta.Position = Vector3.new(0, 7.5, -48)
puerta.Anchored = true
puerta.BrickColor = BrickColor.new("Dark orange")
puerta.Material = Enum.Material.Wood
puerta.Parent = workspace

-- Antorcha con luz brillante
local antorcha = Instance.new("Part")
antorcha.Size = Vector3.new(2, 2, 2)
antorcha.Position = Vector3.new(-15, 5, -45)
antorcha.Anchored = true
antorcha.BrickColor = BrickColor.new("Bright orange")
antorcha.Material = Enum.Material.Neon
antorcha.Shape = Enum.PartType.Ball
antorcha.Parent = workspace

local luz = Instance.new("PointLight")
luz.Brightness = 3
luz.Range = 30
luz.Color = Color3.fromRGB(255, 150, 0)
luz.Parent = antorcha

-- Spawn
local spawn = Instance.new("SpawnLocation")
spawn.Size = Vector3.new(8, 1, 8)
spawn.Position = Vector3.new(0, 1, -35)
spawn.Anchored = true
spawn.BrickColor = BrickColor.new("Bright green")
spawn.Transparency = 0.5
spawn.CanCollide = false
spawn.Duration = 0
spawn.Parent = workspace

-- Iluminación
local lighting = game:GetService("Lighting")
lighting.Brightness = 2
lighting.ClockTime = 18

print("✅ ¡CASTILLO CREADO! Mira alrededor con la cámara")
print("📍 Presiona STOP y borra este script")
