export interface Exercise {
  id: string;
  question: string;
  type: 'multiple' | 'text' | 'code';
  options?: string[];
  answer: string;
  explanation: string;
}

export const exercises: Record<string, Exercise[]> = {
  'step-1': [
    {
      id: 'step1-q1',
      question: '¿Qué tecla usas para subir la cámara en Roblox Studio?',
      type: 'multiple',
      options: ['W', 'E', 'Q', 'Espacio'],
      answer: 'E',
      explanation: 'La tecla E te permite subir (flotar hacia arriba) en el modo de edición.'
    },
    {
      id: 'step1-q2',
      question: '¿Qué atajo de teclado enfoca el objeto seleccionado?',
      type: 'text',
      answer: 'F',
      explanation: 'Presionar F enfoca la cámara en el objeto seleccionado, muy útil si te pierdes.'
    },
    {
      id: 'step1-q3',
      question: '¿En qué ventana ves todos los objetos de tu juego organizados como un árbol?',
      type: 'multiple',
      options: ['Properties', 'Explorer', 'Toolbox', 'Output'],
      answer: 'Explorer',
      explanation: 'El Explorer muestra todos los objetos en una estructura jerárquica tipo árbol.'
    }
  ],
  'step-2': [
    {
      id: 'step2-q1',
      question: '¿Cuántos studs mide aproximadamente un personaje de Roblox?',
      type: 'multiple',
      options: ['3 studs', '5 studs', '10 studs', '20 studs'],
      answer: '5 studs',
      explanation: 'Un personaje de Roblox mide aproximadamente 5 studs de alto.'
    },
    {
      id: 'step2-q2',
      question: '¿Qué tipo de Part usarías para crear una rampa?',
      type: 'multiple',
      options: ['Block', 'Sphere', 'Wedge', 'Cylinder'],
      answer: 'Wedge',
      explanation: 'El Wedge es una rampa triangular, perfecta para crear rampas.'
    },
    {
      id: 'step2-q3',
      question: '¿Dónde cambias el nombre de un objeto?',
      type: 'multiple',
      options: ['En el Explorer', 'En Properties → Name', 'En la Toolbox', 'En Output'],
      answer: 'En Properties → Name',
      explanation: 'La propiedad Name en la ventana Properties te permite renombrar objetos.'
    }
  ],
  'step-3': [
    {
      id: 'step3-q1',
      question: '¿Qué atajo de teclado activa la herramienta Move?',
      type: 'text',
      answer: 'Ctrl + 2',
      explanation: 'Ctrl + 2 activa la herramienta Move para mover objetos.'
    },
    {
      id: 'step3-q2',
      question: '¿Qué color tiene la flecha que mueve objetos hacia arriba/abajo?',
      type: 'multiple',
      options: ['Roja', 'Verde', 'Azul', 'Amarilla'],
      answer: 'Verde',
      explanation: 'La flecha verde mueve en el eje Y (arriba/abajo).'
    },
    {
      id: 'step3-q3',
      question: '¿Qué atajo duplica el objeto seleccionado?',
      type: 'text',
      answer: 'Ctrl + D',
      explanation: 'Ctrl + D duplica el objeto seleccionado rápidamente.'
    }
  ],
  'step-4': [
    {
      id: 'step4-q1',
      question: '¿Qué significa Anchored = true?',
      type: 'multiple',
      options: [
        'El objeto puede moverse libremente',
        'El objeto está pegado y no se mueve',
        'El objeto es invisible',
        'El objeto brilla'
      ],
      answer: 'El objeto está pegado y no se mueve',
      explanation: 'Anchored = true fija el objeto en su lugar, ignorando la física.'
    },
    {
      id: 'step4-q2',
      question: '¿Qué tecla rápida activa/desactiva el anclaje?',
      type: 'text',
      answer: 'Alt + A',
      explanation: 'Alt + A (o Option + A en Mac) activa/desactiva el anclaje rápidamente.'
    },
    {
      id: 'step4-q3',
      question: 'Si quieres que una pelota ruede, ¿debe estar anclada?',
      type: 'multiple',
      options: ['Sí, debe estar anclada', 'No, NO debe estar anclada'],
      answer: 'No, NO debe estar anclada',
      explanation: 'Los objetos que deben moverse con física (como pelotas) NO deben estar anclados.'
    }
  ],
  'step-5': [
    {
      id: 'step5-q1',
      question: '¿Qué material brilla en la oscuridad?',
      type: 'multiple',
      options: ['Plastic', 'Wood', 'Neon', 'Metal'],
      answer: 'Neon',
      explanation: 'El material Neon emite luz propia y brilla en la oscuridad.'
    },
    {
      id: 'step5-q2',
      question: '¿Qué valor de Transparency hace un objeto completamente invisible?',
      type: 'text',
      answer: '1',
      explanation: 'Transparency = 1 hace el objeto completamente invisible (0 = sólido, 1 = invisible).'
    },
    {
      id: 'step5-q3',
      question: '¿Qué material usarías para crear ventanas?',
      type: 'multiple',
      options: ['Wood', 'Glass', 'Concrete', 'Grass'],
      answer: 'Glass',
      explanation: 'Glass es transparente y reflectante, perfecto para ventanas.'
    }
  ],
  'step-6': [
    {
      id: 'step6-q1',
      question: '¿Qué atajo abre la Toolbox?',
      type: 'text',
      answer: 'Alt + T',
      explanation: 'Alt + T (o Option + T en Mac) abre la Toolbox rápidamente.'
    },
    {
      id: 'step6-q2',
      question: '¿Qué marca indica que un creador es verificado en la Toolbox?',
      type: 'multiple',
      options: ['Estrella amarilla', 'Marca azul ✓', 'Corona dorada', 'Corazón rojo'],
      answer: 'Marca azul ✓',
      explanation: 'La marca azul ✓ indica que el creador está verificado y es más confiable.'
    }
  ],
  'step-7': [
    {
      id: 'step7-q1',
      question: '¿Qué atajo agrupa varios objetos seleccionados?',
      type: 'text',
      answer: 'Ctrl + G',
      explanation: 'Ctrl + G agrupa los objetos seleccionados en un Model.'
    },
    {
      id: 'step7-q2',
      question: '¿Para qué sirve agrupar objetos?',
      type: 'multiple',
      options: [
        'Para cambiar su color',
        'Para moverlos todos juntos',
        'Para hacerlos invisibles',
        'Para anclarlos'
      ],
      answer: 'Para moverlos todos juntos',
      explanation: 'Agrupar permite mover, copiar y organizar múltiples objetos como uno solo.'
    }
  ],
  'step-8': [
    {
      id: 'step8-q1',
      question: '¿Dónde se crean los Scripts principales del servidor?',
      type: 'multiple',
      options: ['Workspace', 'ServerScriptService', 'StarterGui', 'ReplicatedStorage'],
      answer: 'ServerScriptService',
      explanation: 'ServerScriptService es donde van los Scripts que se ejecutan en el servidor.'
    },
    {
      id: 'step8-q2',
      question: '¿Qué función muestra mensajes en la ventana Output?',
      type: 'text',
      answer: 'print',
      explanation: 'La función print() muestra mensajes en la ventana Output.'
    },
    {
      id: 'step8-q3',
      question: 'Escribe el código para imprimir "Hola Roblox"',
      type: 'code',
      answer: 'print("Hola Roblox")',
      explanation: 'print("Hola Roblox") imprime el mensaje en Output.'
    }
  ],
  'step-9': [
    {
      id: 'step9-q1',
      question: '¿Cómo se declara una variable en Luau?',
      type: 'multiple',
      options: ['var nombre = "Alex"', 'local nombre = "Alex"', 'let nombre = "Alex"', 'const nombre = "Alex"'],
      answer: 'local nombre = "Alex"',
      explanation: 'En Luau usamos "local" para declarar variables.'
    },
    {
      id: 'step9-q2',
      question: '¿Qué símbolo une (concatena) texto en Luau?',
      type: 'text',
      answer: '..',
      explanation: 'El operador .. une texto en Luau. Ejemplo: "Hola " .. "mundo"'
    },
    {
      id: 'step9-q3',
      question: 'Escribe el código para cambiar el color de un bloque a rojo',
      type: 'code',
      answer: 'parte.BrickColor = BrickColor.new("Bright red")',
      explanation: 'Usamos BrickColor.new() para cambiar el color de una Part.'
    }
  ],
  'step-10': [
    {
      id: 'step10-q1',
      question: '¿Qué función pausa el código por 2 segundos?',
      type: 'text',
      answer: 'wait(2)',
      explanation: 'wait(2) pausa la ejecución del código por 2 segundos.'
    },
    {
      id: 'step10-q2',
      question: '¿Qué evento detecta cuando algo toca un objeto?',
      type: 'multiple',
      options: ['Clicked', 'Touched', 'Changed', 'Activated'],
      answer: 'Touched',
      explanation: 'El evento Touched se dispara cuando algo toca el objeto.'
    },
    {
      id: 'step10-q3',
      question: '¿Cómo detectas si el que tocó es un jugador?',
      type: 'code',
      answer: 'parte.Parent:FindFirstChild("Humanoid")',
      explanation: 'Los jugadores tienen un Humanoid. FindFirstChild("Humanoid") lo busca.'
    }
  ],
  'step-11': [
    {
      id: 'step11-q1',
      question: '¿Qué propiedad debe tener un SpawnLocation para que cualquier jugador aparezca ahí?',
      type: 'multiple',
      options: ['Anchored = true', 'Neutral = true', 'CanCollide = false', 'Transparency = 0'],
      answer: 'Neutral = true',
      explanation: 'Neutral = true permite que cualquier jugador aparezca en ese spawn.'
    },
    {
      id: 'step11-q2',
      question: '¿Qué propiedad debe tener la lava para que los jugadores la atraviesen?',
      type: 'text',
      answer: 'CanCollide = false',
      explanation: 'CanCollide = false permite que los jugadores atraviesen la lava y el script los elimine.'
    },
    {
      id: 'step11-q3',
      question: 'Escribe el código para eliminar a un jugador (poner vida en 0)',
      type: 'code',
      answer: 'humano.Health = 0',
      explanation: 'Establecer Health = 0 elimina al jugador (lo hace reaparecer en el spawn).'
    }
  ],
  'step-12': [
    {
      id: 'step12-q1',
      question: '¿Qué menú usas para publicar tu juego en Roblox?',
      type: 'multiple',
      options: ['Edit → Publish', 'File → Publish to Roblox', 'View → Publish', 'Home → Publish'],
      answer: 'File → Publish to Roblox',
      explanation: 'File → Publish to Roblox es el menú para publicar tu juego.'
    },
    {
      id: 'step12-q2',
      question: '¿Qué tamaño debe tener el icono de tu juego?',
      type: 'multiple',
      options: ['256x256', '512x512', '1024x1024', '128x128'],
      answer: '512x512',
      explanation: 'El icono del juego debe ser una imagen cuadrada de 512x512 píxeles.'
    }
  ]
};

export function getExercisesForStep(stepId: string): Exercise[] {
  return exercises[stepId] || [];
}
