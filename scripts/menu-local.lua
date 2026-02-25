-- SCRIPT LOCAL PARA EL MENU (LocalScript)
-- Coloca este script en StarterPlayer > StarterPlayerScripts

local Players = game:GetService("Players")
local jugador = Players.LocalPlayer
local personaje = jugador.Character or jugador.CharacterAdded:Wait()

print("[INIT] Creando menu para:", jugador.Name)

-- Crear interfaz
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "MenuClase"
screenGui.ResetOnSpawn = false
screenGui.Parent = jugador:WaitForChild("PlayerGui")

local fondo = Instance.new("Frame")
fondo.Size = UDim2.new(1, 0, 1, 0)
fondo.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
fondo.BackgroundTransparency = 0.3
fondo.Parent = screenGui

local panel = Instance.new("Frame")
panel.Size = UDim2.new(0, 400, 0, 300)
panel.Position = UDim2.new(0.5, -200, 0.5, -150)
panel.BackgroundColor3 = Color3.fromRGB(60, 40, 30)
panel.BorderSizePixel = 3
panel.BorderColor3 = Color3.fromRGB(200, 180, 100)
panel.Parent = fondo

local titulo = Instance.new("TextLabel")
titulo.Size = UDim2.new(1, 0, 0, 60)
titulo.BackgroundTransparency = 1
titulo.Text = "BIENVENIDO AL CASTILLO"
titulo.TextColor3 = Color3.fromRGB(255, 215, 0)
titulo.TextSize = 24
titulo.Font = Enum.Font.SourceSansBold
titulo.Parent = panel

local pregunta = Instance.new("TextLabel")
pregunta.Size = UDim2.new(1, -40, 0, 40)
pregunta.Position = UDim2.new(0, 20, 0, 70)
pregunta.BackgroundTransparency = 1
pregunta.Text = "Cual es tu nombre?"
pregunta.TextColor3 = Color3.fromRGB(255, 255, 255)
pregunta.TextSize = 20
pregunta.Font = Enum.Font.SourceSans
pregunta.Parent = panel

local inputNombre = Instance.new("TextBox")
inputNombre.Size = UDim2.new(1, -40, 0, 40)
inputNombre.Position = UDim2.new(0, 20, 0, 120)
inputNombre.BackgroundColor3 = Color3.fromRGB(40, 30, 20)
inputNombre.BorderColor3 = Color3.fromRGB(200, 180, 100)
inputNombre.BorderSizePixel = 2
inputNombre.Text = ""
inputNombre.PlaceholderText = "Escribe tu nombre aqui..."
inputNombre.TextColor3 = Color3.fromRGB(255, 255, 255)
inputNombre.TextSize = 18
inputNombre.Font = Enum.Font.SourceSans
inputNombre.ClearTextOnFocus = false
inputNombre.Parent = panel

local botonMago = Instance.new("TextButton")
botonMago.Size = UDim2.new(0, 170, 0, 50)
botonMago.Position = UDim2.new(0, 20, 0, 180)
botonMago.BackgroundColor3 = Color3.fromRGB(100, 50, 200)
botonMago.BorderColor3 = Color3.fromRGB(150, 100, 255)
botonMago.BorderSizePixel = 2
botonMago.Text = "MAGO"
botonMago.TextColor3 = Color3.fromRGB(255, 255, 255)
botonMago.TextSize = 20
botonMago.Font = Enum.Font.SourceSansBold
botonMago.Parent = panel

local botonLuchador = Instance.new("TextButton")
botonLuchador.Size = UDim2.new(0, 170, 0, 50)
botonLuchador.Position = UDim2.new(0, 210, 0, 180)
botonLuchador.BackgroundColor3 = Color3.fromRGB(200, 50, 50)
botonLuchador.BorderColor3 = Color3.fromRGB(255, 100, 100)
botonLuchador.BorderSizePixel = 2
botonLuchador.Text = "LUCHADOR"
botonLuchador.TextColor3 = Color3.fromRGB(255, 255, 255)
botonLuchador.TextSize = 20
botonLuchador.Font = Enum.Font.SourceSansBold
botonLuchador.Parent = panel

local mensajeError = Instance.new("TextLabel")
mensajeError.Size = UDim2.new(1, -40, 0, 30)
mensajeError.Position = UDim2.new(0, 20, 0, 240)
mensajeError.BackgroundTransparency = 1
mensajeError.Text = ""
mensajeError.TextColor3 = Color3.fromRGB(255, 100, 100)
mensajeError.TextSize = 16
mensajeError.Font = Enum.Font.SourceSans
mensajeError.Parent = panel

local function aplicarSkin(clase)
	print("[DEBUG] Boton presionado:", clase)
	print("[DEBUG] Texto en caja:", inputNombre.Text)
	
	local nombre = inputNombre.Text:gsub("^%s*(.-)%s*$", "%1")
	print("[DEBUG] Nombre limpio:", nombre)
	
	if nombre == "" or #nombre < 1 then
		print("[ERROR] Nombre vacio")
		mensajeError.Text = "Escribe un nombre valido"
		return
	end
	
	print("[OK] Aplicando skin:", clase, "para:", nombre)
	
	local torso = personaje:FindFirstChild("Torso") or personaje:FindFirstChild("UpperTorso")
	local cabeza = personaje:FindFirstChild("Head")
	local brazoDer = personaje:FindFirstChild("Right Arm") or personaje:FindFirstChild("RightUpperArm")
	local brazoIzq = personaje:FindFirstChild("Left Arm") or personaje:FindFirstChild("LeftUpperArm")
	local piernaDer = personaje:FindFirstChild("Right Leg") or personaje:FindFirstChild("RightUpperLeg")
	local piernaIzq = personaje:FindFirstChild("Left Leg") or personaje:FindFirstChild("LeftUpperLeg")
	
	if clase == "Mago" then
		if torso then torso.BrickColor = BrickColor.new("Bright violet") end
		if brazoDer then brazoDer.BrickColor = BrickColor.new("Bright blue") end
		if brazoIzq then brazoIzq.BrickColor = BrickColor.new("Bright blue") end
		if piernaDer then piernaDer.BrickColor = BrickColor.new("Dark blue") end
		if piernaIzq then piernaIzq.BrickColor = BrickColor.new("Dark blue") end
		
		local sombrero = Instance.new("Part")
		sombrero.Name = "SombreroMago"
		sombrero.Size = Vector3.new(2, 3, 2)
		sombrero.BrickColor = BrickColor.new("Bright violet")
		sombrero.Material = Enum.Material.Neon
		sombrero.CanCollide = false
		
		local mesh = Instance.new("SpecialMesh")
		mesh.MeshType = Enum.MeshType.FileMesh
		mesh.MeshId = "rbxassetid://1374148"
		mesh.Scale = Vector3.new(1.2, 1.2, 1.2)
		mesh.Parent = sombrero
		
		if cabeza then
			local weld = Instance.new("Weld")
			weld.Part0 = cabeza
			weld.Part1 = sombrero
			weld.C0 = CFrame.new(0, 0.5, 0)
			weld.Parent = sombrero
		end
		
		sombrero.Parent = personaje
		print("[OK] Mago creado:", nombre)
		
	elseif clase == "Luchador" then
		if torso then torso.BrickColor = BrickColor.new("Bright red") end
		if brazoDer then brazoDer.BrickColor = BrickColor.new("Dark stone grey") end
		if brazoIzq then brazoIzq.BrickColor = BrickColor.new("Dark stone grey") end
		if piernaDer then piernaDer.BrickColor = BrickColor.new("Black") end
		if piernaIzq then piernaIzq.BrickColor = BrickColor.new("Black") end
		
		local espada = Instance.new("Part")
		espada.Name = "Espada"
		espada.Size = Vector3.new(0.5, 4, 0.5)
		espada.BrickColor = BrickColor.new("Medium stone grey")
		espada.Material = Enum.Material.Metal
		espada.CanCollide = false
		
		if brazoDer then
			local weld = Instance.new("Weld")
			weld.Part0 = brazoDer
			weld.Part1 = espada
			weld.C0 = CFrame.new(0, -2, 0)
			weld.Parent = espada
		end
		
		espada.Parent = personaje
		print("[OK] Luchador creado:", nombre)
	end
	
	screenGui:Destroy()
end

botonMago.MouseButton1Click:Connect(function()
	print("[CLICK] Boton Mago")
	aplicarSkin("Mago")
end)

botonLuchador.MouseButton1Click:Connect(function()
	print("[CLICK] Boton Luchador")
	aplicarSkin("Luchador")
end)

print("[INIT] Menu listo")
