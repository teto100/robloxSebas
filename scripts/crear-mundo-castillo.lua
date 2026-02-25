-- SCRIPT PARA CREAR EL MUNDO DEL CASTILLO
-- Coloca este script en ServerScriptService

local function crearCastillo()
	
	-- Limpiar el mundo
	for _, obj in pairs(workspace:GetChildren()) do
		if obj:IsA("Model") or (obj:IsA("Part") and obj.Name ~= "Baseplate") then
			obj:Destroy()
		end
	end
	
	-- Suelo del castillo (piedra)
	local suelo = Instance.new("Part")
	suelo.Name = "SueloCastillo"
	suelo.Size = Vector3.new(100, 1, 100)
	suelo.Position = Vector3.new(0, 0, 0)
	suelo.Anchored = true
	suelo.BrickColor = BrickColor.new("Dark stone grey")
	suelo.Material = Enum.Material.Cobblestone
	suelo.Parent = workspace
	
	-- Función para crear una torre
	local function crearTorre(posicion)
		local torre = Instance.new("Model")
		torre.Name = "Torre"
		
		-- Base de la torre
		local base = Instance.new("Part")
		base.Size = Vector3.new(10, 30, 10)
		base.Position = posicion
		base.Anchored = true
		base.BrickColor = BrickColor.new("Medium stone grey")
		base.Material = Enum.Material.Brick
		base.Parent = torre
		
		-- Techo cónico
		local techo = Instance.new("Part")
		techo.Size = Vector3.new(12, 8, 12)
		techo.Position = posicion + Vector3.new(0, 19, 0)
		techo.Anchored = true
		techo.BrickColor = BrickColor.new("Bright red")
		techo.Material = Enum.Material.Slate
		
		local mesh = Instance.new("SpecialMesh")
		mesh.MeshType = Enum.MeshType.FileMesh
		mesh.MeshId = "rbxassetid://1033714"
		mesh.Scale = Vector3.new(12, 8, 12)
		mesh.Parent = techo
		
		techo.Parent = torre
		torre.Parent = workspace
	end
	
	-- Crear 4 torres en las esquinas
	crearTorre(Vector3.new(-40, 15, -40))
	crearTorre(Vector3.new(40, 15, -40))
	crearTorre(Vector3.new(-40, 15, 40))
	crearTorre(Vector3.new(40, 15, 40))
	
	-- Murallas
	local function crearMuralla(tamaño, posicion)
		local muralla = Instance.new("Part")
		muralla.Size = tamaño
		muralla.Position = posicion
		muralla.Anchored = true
		muralla.BrickColor = BrickColor.new("Medium stone grey")
		muralla.Material = Enum.Material.Brick
		muralla.Parent = workspace
	end
	
	crearMuralla(Vector3.new(70, 15, 3), Vector3.new(0, 7.5, -40))  -- Norte
	crearMuralla(Vector3.new(70, 15, 3), Vector3.new(0, 7.5, 40))   -- Sur
	crearMuralla(Vector3.new(3, 15, 70), Vector3.new(-40, 7.5, 0))  -- Oeste
	crearMuralla(Vector3.new(3, 15, 70), Vector3.new(40, 7.5, 0))   -- Este
	
	-- Castillo central
	local castilloCentral = Instance.new("Part")
	castilloCentral.Name = "CastilloCentral"
	castilloCentral.Size = Vector3.new(30, 40, 30)
	castilloCentral.Position = Vector3.new(0, 20, 0)
	castilloCentral.Anchored = true
	castilloCentral.BrickColor = BrickColor.new("Dark stone grey")
	castilloCentral.Material = Enum.Material.Slate
	castilloCentral.Parent = workspace
	
	-- Techo del castillo central
	local techoCentral = Instance.new("Part")
	techoCentral.Size = Vector3.new(32, 10, 32)
	techoCentral.Position = Vector3.new(0, 45, 0)
	techoCentral.Anchored = true
	techoCentral.BrickColor = BrickColor.new("Bright red")
	techoCentral.Material = Enum.Material.Slate
	
	local meshCentral = Instance.new("SpecialMesh")
	meshCentral.MeshType = Enum.MeshType.Wedge
	meshCentral.Parent = techoCentral
	
	techoCentral.Parent = workspace
	
	-- Puerta de entrada
	local puerta = Instance.new("Part")
	puerta.Name = "Puerta"
	puerta.Size = Vector3.new(8, 12, 1)
	puerta.Position = Vector3.new(0, 6, -40)
	puerta.Anchored = true
	puerta.BrickColor = BrickColor.new("Dark orange")
	puerta.Material = Enum.Material.Wood
	puerta.Parent = workspace
	
	-- Antorchas (luces)
	local function crearAntorcha(posicion)
		local poste = Instance.new("Part")
		poste.Size = Vector3.new(0.5, 5, 0.5)
		poste.Position = posicion
		poste.Anchored = true
		poste.BrickColor = BrickColor.new("Dark orange")
		poste.Material = Enum.Material.Wood
		poste.Parent = workspace
		
		local fuego = Instance.new("Part")
		fuego.Size = Vector3.new(1, 1, 1)
		fuego.Position = posicion + Vector3.new(0, 3, 0)
		fuego.Anchored = true
		fuego.BrickColor = BrickColor.new("Bright orange")
		fuego.Material = Enum.Material.Neon
		fuego.Shape = Enum.PartType.Ball
		fuego.Parent = workspace
		
		local luz = Instance.new("PointLight")
		luz.Brightness = 2
		luz.Range = 20
		luz.Color = Color3.fromRGB(255, 150, 0)
		luz.Parent = fuego
		
		local fuego2 = Instance.new("Fire")
		fuego2.Parent = fuego
	end
	
	-- Colocar antorchas
	crearAntorcha(Vector3.new(-15, 2.5, -35))
	crearAntorcha(Vector3.new(15, 2.5, -35))
	crearAntorcha(Vector3.new(-15, 2.5, 35))
	crearAntorcha(Vector3.new(15, 2.5, 35))
	
	-- Spawn point
	local spawn = Instance.new("SpawnLocation")
	spawn.Size = Vector3.new(6, 1, 6)
	spawn.Position = Vector3.new(0, 1, -30)
	spawn.Anchored = true
	spawn.BrickColor = BrickColor.new("Bright green")
	spawn.Material = Enum.Material.Neon
	spawn.Transparency = 0.5
	spawn.CanCollide = false
	spawn.Duration = 0
	spawn.Parent = workspace
	
	-- Iluminación ambiente
	local lighting = game:GetService("Lighting")
	lighting.Ambient = Color3.fromRGB(100, 100, 120)
	lighting.Brightness = 2
	lighting.OutdoorAmbient = Color3.fromRGB(150, 150, 170)
	lighting.ClockTime = 18 -- Atardecer
	
	print("🏰 Castillo creado exitosamente")
end

-- Ejecutar la creación del castillo
crearCastillo()
