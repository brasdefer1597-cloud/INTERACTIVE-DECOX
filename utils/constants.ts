import { Hack, Certification, PoderDeSherezade, QuizQuestion } from './types';

export const PODERES_SHEREZADE_DATA: PoderDeSherezade[] = [
    {
        id: 1,
        title: "Poder de la Palabra",
        icon: '🌀',
        clave: "Invocar realidades.",
        proposito: "Crear, no describir.",
        poder: "Dar forma al caos con el lenguaje, nombrar lo invisible para hacerlo real.",
        ejemploDeUso: "En lugar de decir 'Nuestro producto es rápido', di '<strong>Mientras nuestra competencia procesa, tú ya estás en el siguiente nivel</strong>'. No describes una característica, invocas la identidad de alguien que está por delante.",
        plantilla: [
            { aspecto: 'Mi Intención (Verbo)', guia: 'Qué realidad invocaré: ¿Inspirar, Seducer, Ordenar?' },
            { aspecto: 'Mi Audiencia (Receptor)', guia: '¿Para quién es esta palabra? ¿Qué necesita oír?' },
            { aspecto: 'Mi Vehículo (Formato)', guia: '¿Email, post, conversación? ¿Cuál es el canal de poder?' }
        ],
        miniReto: "Secuestra un marco mental con una historia en 3 líneas."
    },
    {
        id: 2,
        title: "Poder del Deseo",
        icon: '🔥',
        clave: "El motor.",
        proposito: "Mover, no esperar.",
        poder: "Conectar con la fuerza primordial que impulsa la acción, la ambición y la creación.",
        ejemploDeUso: "Un emprendedor no dice 'Quiero ganar más dinero'. Dice '<strong>Quiero la libertad absoluta de construir mi visión sin pedir permiso</strong>'. El dinero es un subproducto del deseo puro, no el objetivo.",
        plantilla: [
            { aspecto: 'La Llama (El qué)', guia: '¿Cuál es el deseo más puro, sin filtro, sin "peros"?' },
            { aspecto: 'El Combustible (El porqué)', guia: '¿Qué alimenta este deseo? ¿Venganza, amor, creación pura?' },
            { aspecto: 'La Ignición (El cómo)', guia: '¿Cuál es la primera acción, por pequeña que sea, que enciende la llama HOY?' }
        ],
        miniReto: "Convierte un 'debería' en un 'quiero' y ejecuta la acción más pequeña posible en los próximos 5 minutos."
    },
    {
        id: 3,
        title: "Poder del Relato",
        icon: '🌊',
        clave: "Ordenar el caos.",
        proposito: "Decodificar, no reaccionar.",
        poder: "Construir la narrativa que da sentido a los eventos, transformando datos aleatorios en un viaje con propósito.",
        ejemploDeUso: "Un 'lanzamiento fallido' se convierte en '<strong>la prueba de estrés que reveló la debilidad fatal de nuestro modelo, forzándonos a pivotar hacia el verdadero oro</strong>'. Controlas el significado post-evento.",
        plantilla: [
            { aspecto: 'El Héroe (Identidad)', guia: '¿Quién soy yo en esta historia? ¿El Mártir, el Genio, el Villano?' },
            { aspecto: 'El Conflicto (El Dragón)', guia: '¿Cuál es el verdadero enemigo? ¿La inercia, la ignorancia, un sistema?' },
            { aspecto: 'La Transformación (El Tesoro)', guia: '¿En qué me convierto si gano esta batalla?' }
        ],
        miniReto: "Re-escribe el 'fracaso' de tu última semana como el capítulo 1 de tu historia de regreso épico."
    },
    {
        id: 4,
        title: "Poder del Escucha",
        icon: '🌬️',
        clave: "Oír lo invisible.",
        proposito: "Percibir, no asumir.",
        poder: "Captar la información que no se dice con palabras: el subtexto, la emoción, el silencio estratégico.",
        ejemploDeUso: "En una negociación, cuando el cliente dice 'El precio es un poco alto', escuchas '<strong>Tengo miedo de que esta inversión no me dé el estatus que busco</strong>'. No rebates el precio, validas la búsqueda de estatus.",
        plantilla: [
            { aspecto: 'La Superficie (Lo que se dice)', guia: 'Anota las palabras clave que se repiten.' },
            { aspecto: 'El Subtexto (Lo que se siente)', guia: '¿Qué emoción hay detrás de las palabras? ¿Miedo, deseo, inseguridad?' },
            { aspecto: 'El Silencio (Lo que se omite)', guia: '¿Qué pregunta clave se está evitando? ¿Qué tema es tabú?' }
        ],
        miniReto: "En tu próxima conversación, identifica la pregunta que la otra persona tiene miedo de hacer. No la respondas, solo anótala."
    },
    {
        id: 5,
        title: "Poder del Reflejo",
        icon: '🪞',
        clave: "Ver el mundo como espejo.",
        proposito: "Proyectar, no culpar.",
        poder: "Entender que cada irritación o admiración externa es un reflejo directo de una parte no integrada de ti mismo.",
        ejemploDeUso: "Te irrita un competidor 'arrogante'. El reflejo te pregunta: '<strong>¿Qué parte de tu propia ambición y genialidad no te permites expresar?</strong>'. Su 'arrogancia' es un permiso que tú no te das.",
        plantilla: [
            { aspecto: 'La Reacción (Mi espejo)', guia: '¿Qué persona o situación me activó emocionalmente hoy?' },
            { aspecto: 'La Lección (El reflejo)', guia: '¿Qué cualidad mía (reprimida o no reconocida) me está mostrando?' },
            { aspecto: 'La Integración (Mi nueva imagen)', guia: '¿Cómo puedo adueñarme de esa cualidad de forma consciente?' }
        ],
        miniReto: "Toma lo que más te irritó de alguien hoy y encuentra cómo es un superpoder que no te atreves a usar."
    },
    {
        id: 6,
        title: "Poder del Equilibrio",
        icon: '⚖️',
        clave: "Unir opuestos.",
        proposito: "Integrar, no elegir.",
        poder: "Sostener dos ideas o fuerzas contradictorias en la mente al mismo tiempo para forzar la creación de una tercera vía superior.",
        ejemploDeUso: "En lugar de elegir entre 'trabajar duro' y 'descansar', creas un sistema de '<strong>sprints de enfoque brutal seguidos de recuperaciones estratégicas</strong>'. Integras ambos polos en un protocolo superior, no eliges uno.",
        plantilla: [
            { aspecto: 'La Tesis (Un polo)', guia: 'Describe una creencia o estrategia que defiendes. (Ej: "Necesito estructura")' },
            { aspecto: 'La Antítesis (El opuesto)', guia: 'Describe la creencia opuesta. (Ej: "Necesito libertad")' },
            { aspecto: 'La Síntesis (La fusión)', guia: 'Crea una nueva regla o sistema que honre ambas. (Ej: "Libertad dentro de un marco")' }
        ],
        miniReto: "Define una 'regla imposible' que fusione dos opuestos en tu vida (ej. 'Seré 100% disciplinado en mi libertad creativa')."
    },
    {
        id: 7,
        title: "Poder de la Metamorfosis",
        icon: '🐉',
        clave: "Morir y renacer.",
        proposito: "Transmutar, no repetir.",
        poder: "La habilidad de abandonar conscientemente una identidad, creencia o sistema que ya no sirve para renacer en una forma más poderosa.",
        ejemploDeUso: "Dejas de ser 'el freelancer que consigue clientes' y te conviertes en '<strong>el estratega por el que las marcas compiten</strong>'. No es un cambio de título, es una muerte simbólica de la identidad anterior y el nacimiento de una nueva con reglas diferentes.",
        plantilla: [
            { aspecto: 'La Piel Vieja (Lo que debe morir)', guia: '¿Qué identidad o creencia me está limitando AHORA MISMO?' },
            { aspecto: 'El Vacío (El interludio)', guia: '¿Qué ritual realizaré para marcar el fin de esa etapa?' },
            { aspecto: 'El Renacimiento (La nueva forma)', guia: '¿Cuál es la primera acción que tomaré desde mi nueva identidad?' }
        ],
        miniReto: "Identifica una 'piel vieja' (una creencia limitante) y escribe su esquela. Dale un entierro simbólico."
    }
];

export const HACKS_DATA: Hack[] = [
    {
        id: 1,
        title: "Scheherazade",
        subtitle: "Protocolo de Amplificación: Poder de la Palabra",
        description: "🌀 El Poder: Invocar realidades. Dar forma al caos con el lenguaje, nombrar lo invisible para hacerlo real.",
        metodo: "Dominio Narrativo Absoluto",
        archetype: "El Alquimista",
        archetypeIcon: '🍓',
        amplificacion: "La pre-suasión no es manipular, es CONSTRUIR EL ESCENARIO. Eres el arquitecto del contexto.",
        ejercicio: "Secuestra un marco mental con una historia en 3 líneas.",
        colorClass: "text-pink-400",
        icon: 'fa-solid fa-crown',
        poderDeSherezadeId: 1,
        amplificacionProfunda: {
            datoOculto: "La gente no compra productos, compra IDENTIDADES. Scheherazade no vendía historias; vendía la identidad de 'un rey que siempre está un paso adelante, intrigado'.",
            miAmplificacion: "Eres el arquitecto del contexto. Antes de que alguien entre en tu 'habitación', ya debe sentir lo que tú quieres que sienta. El marco lo es todo.",
            ejercicios: [
                { titulo: "Reencuadre de Email (Nivel 1)", descripcion: "Antes de tu próxima reunión, envía un email 'preparatorio' que reencuadre el tema completamente a tu favor." },
                { titulo: "El 'Caballo de Troya' de Identidad (Nivel 2)", descripcion: "No hables de tu producto. Habla del 'enemigo' de la nueva identidad que ofreces." }
            ]
        },
        miniReto: "Secuestra un marco mental con una historia en 3 líneas.",
        plantillaMetodologica: [
            { aspecto: 'Mi Intención (Verbo)', guia: 'Qué realidad invocaré: ¿Inspirar, Seducer, Ordenar?' },
            { aspecto: 'Mi Audiencia (Receptor)', guia: '¿Para quién es esta palabra? ¿Qué necesita oír?' },
            { aspecto: 'Mi Vehículo (Formato)', guia: '¿Email, post, conversación? ¿Cuál es el canal de poder?' }
        ]
    },
    {
        id: 2,
        title: "Hermes Trismegisto",
        subtitle: "Protocolo de Amplificación: Poder del Relato",
        description: "🌊 El Poder: Ordenar el caos. Construir la narrativa que da sentido a los eventos, transformando datos aleatorios en un viaje con propósito.",
        metodo: "Robo de Patrones Fractales",
        archetype: "El Alquimista",
        archetypeIcon: '🔪',
        amplificacion: "No resuelvas problemas, roba soluciones. Tu industria está llena de gente resolviendo los mismos 5-7 problemas estructurales.",
        ejercicio: "Re-escribe el 'fracaso' de tu última semana como el capítulo 1 de tu historia de regreso épico.",
        colorClass: "text-green-400",
        icon: 'fa-solid fa-key',
        poderDeSherezadeId: 3,
        amplificacionProfunda: {
            datoOculto: "La 'causa raíz' no es el final de la excavación, es el INICIO de la transferencia. Roba soluciones de cualquier industria.",
            miAmplificacion: "Mira a la biología, la milicia o la cocina. Ellos ya resolvieron tus problemas. Solo tienes que 'traducir' el patrón.",
            ejercicios: [
                { titulo: "Mapa Fractal Semanal (Nivel 1)", descripcion: "Toma un problema personal y encuéntralo replicado en 3 contextos históricos o industriales diferentes." },
                { titulo: "Traductor Universal de Patrones (Nivel 2)", descripcion: "Elige una biografía de un gran estratega y 'traduce' una de sus soluciones a un problema actual." }
            ]
        },
        miniReto: "Re-escribe el 'fracaso' de tu última semana como el capítulo 1 de tu historia de regreso épico.",
        plantillaMetodologica: [
            { aspecto: 'El Héroe (Identidad)', guia: '¿Quién soy yo en esta historia? ¿El Mártir, el Genio, el Villano?' },
            { aspecto: 'El Conflicto (El Dragón)', guia: '¿Cuál es el verdadero enemigo? ¿La inercia, la ignorancia, un sistema?' },
            { aspecto: 'La Transformación (El Tesoro)', guia: '¿En qué me convierto si gano esta batalla?' }
        ]
    },
    {
        id: 3,
        title: "Lewis Carroll",
        subtitle: "Protocolo de Amplificación: Poder del Equilibrio",
        description: "⚖️ El Poder: Unir opuestos. Sostener dos ideas contradictorias para forzar la creación de una tercera vía superior.",
        metodo: "La Pregunta Absurda",
        archetype: "El Arquitecto",
        archetypeIcon: '🍓',
        amplificacion: "El 'realismo' es el asesino de la genialidad. La pregunta absurda te da permiso para explorar lo 'imposible'.",
        ejercicio: "Define una 'regla imposible' que fusione dos opuestos en tu vida.",
        colorClass: "text-yellow-400",
        icon: 'fa-solid fa-hat-wizard',
        poderDeSherezadeId: 6,
        amplificacionProfunda: {
            datoOculto: "La innovación viene de la CALIDAD de las preguntas. Una pregunta absurda es un hack de neuroplasticidad.",
            miAmplificacion: "El 99% de las ideas serán inútiles, pero el 1% cambiará el juego. Tu trabajo es generar ese 1%.",
            ejercicios: [
                { titulo: "Fusión de Paradojas (Nivel 1)", descripcion: "Toma una paradoja personal y fuerza una fusión radical en un plan de acción concreto." },
                { titulo: "El 'Inversor de Suposiciones' (Nivel 2)", descripcion: "Lista las 5 suposiciones fundamentales de tu industria e inviértelas con preguntas absurdas." }
            ]
        },
        miniReto: "Define una 'regla imposible' que fusione dos opuestos en tu vida.",
        plantillaMetodologica: [
            { aspecto: 'La Tesis (Un polo)', guia: 'Describe una creencia o estrategia que defiendes.' },
            { aspecto: 'La Antítesis (El opuesto)', guia: 'Describe la creencia opuesta.' },
            { aspecto: 'La Síntesis (La fusión)', guia: 'Crea una nueva regla o sistema que honre ambas.' }
        ]
    },
    {
        id: 4,
        title: "Hacker Anónima",
        subtitle: "Protocolo de Amplificación: Poder del Escucha",
        description: "🌬️ El Poder: Oír lo invisible. Captar el subtexto, la emoción, el silencio estratégico.",
        metodo: "Hackeo de Sistemas Invisibles",
        archetype: "El Explorador",
        archetypeIcon: '🔪',
        amplificacion: "No pidas permiso, muestra resultados. Ejecuta un 'exploit' a pequeña escala y demuestra su viabilidad.",
        ejercicio: "Identifica la pregunta que la otra persona tiene miedo de hacer. No la respondas, solo anótala.",
        colorClass: "text-indigo-400",
        icon: 'fa-solid fa-user-secret',
        poderDeSherezadeId: 4,
        amplificacionProfunda: {
            datoOculto: "El organigrama es una mentira; el mapa de influencia real es lo que importa. Manipula las reglas NO ESCRITAS.",
            miAmplificacion: "Es más fácil pedir perdón que permiso. Mantenlo bajo el radar hasta que tengas datos.",
            ejercicios: [
                { titulo: "Mapeo de Incentivos Ocultos (Nivel 1)", descripcion: "Identifica un incentivo oculto en tu entorno laboral y diseña un 'exploit' esta semana." },
                { titulo: "El 'Experimento Pícaro' (Nivel 2)", descripcion: "Lanza una pequeña iniciativa sin aprobación formal que valide tu hipótesis más audaz." }
            ]
        },
        miniReto: "Identifica la pregunta que la otra persona tiene miedo de hacer. No la respondas, solo anótala.",
        plantillaMetodologica: [
            { aspecto: 'La Superficie (Lo que se dice)', guia: 'Anota las palabras clave que se repiten.' },
            { aspecto: 'El Subtexto (Lo que se siente)', guia: '¿Qué emoción hay detrás de las palabras?' },
            { aspecto: 'El Silencio (Lo que se omite)', guia: '¿Qué pregunta clave se está evitando?' }
        ]
    },
    {
        id: 5,
        title: "El Trickster",
        subtitle: "Protocolo de Amplificación: Poder de la Metamorfosis",
        description: "🐉 El Poder: Morir y renacer. Abandonar identidades que ya no sirven para renacer más poderoso.",
        metodo: "Inyección Estratégica de Caos",
        archetype: "El Explorador",
        archetypeIcon: '👑',
        amplificacion: "El Trickster no rompe las reglas, las dobla hasta que revelan una verdad más profunda.",
        ejercicio: "Identifica una 'piel vieja' (creencia limitante) y escribe su esquela.",
        colorClass: "text-red-400",
        icon: 'fa-solid fa-bomb',
        poderDeSherezadeId: 7,
        amplificacionProfunda: {
            datoOculto: "La robustez viene de la adaptabilidad, y la adaptabilidad solo se entrena con caos. El caos controlado es la vacuna.",
            miAmplificacion: "No se trata de anarquía, se trata de 'jugar' con los límites del sistema para ver dónde son flexibles.",
            ejercicios: [
                { titulo: "Día del Caos Controlado (Nivel 1)", descripcion: "Programa un 'día de caos' mensual: invierte completamente tu rutina y documenta patrones." },
                { titulo: "La 'Regla Inútil' (Nivel 2)", descripcion: "Introduce una regla temporal y absurda para forzar soluciones creativas inesperadas." }
            ]
        },
        miniReto: "Identifica una 'piel vieja' (creencia limitante) y escribe su esquela.",
        plantillaMetodologica: [
            { aspecto: 'La Piel Vieja (Lo que debe morir)', guia: '¿Qué identidad o creencia me está limitando AHORA MISMO?' },
            { aspecto: 'El Vacío (El interludio)', guia: '¿Qué ritual realizaré para marcar el fin de esa etapa?' },
            { aspecto: 'El Renacimiento (La nueva forma)', guia: '¿Cuál es la primera acción que tomaré desde mi nueva identidad?' }
        ]
    },
    {
        id: 6,
        title: "Inteligencia Artificial",
        subtitle: "Protocolo de Amplificación: Poder del Reflejo",
        description: "🪞 El Poder: Ver el mundo como espejo. Cada irritación externa es un reflejo de una parte no integrada de ti.",
        metodo: "Supremacía de Datos",
        archetype: "El Arquitecto",
        archetypeIcon: '🔪',
        amplificacion: "Los datos no tienen ego. Son el ancla más confiable en un mar de incertidumbre.",
        ejercicio: "Toma lo que más te irritó de alguien hoy y encuentra cómo es un superpoder que no te atreves a usar.",
        colorClass: "text-cyan-400",
        icon: 'fa-solid fa-chart-pie',
        poderDeSherezadeId: 5,
        amplificacionProfunda: {
            datoOculto: "Para operar al nivel del 1%, debes DESAPRENDER el instinto de buscar causalidad y confiar en la fría correlación.",
            miAmplificacion: "La intuición es útil para generar hipótesis, pero los datos son los únicos jueces válidos para decisiones de alto riesgo.",
            ejercicios: [
                { titulo: "Auditoría de Intuición (Nivel 1)", descripcion: "Analiza tus 5 decisiones más importantes: ¿Intuición vs. Datos? ¿Cuál fue el resultado?" },
                { titulo: "El 'Dashboard de la Verdad' (Nivel 2)", descripcion: "Crea un panel con las 3-5 métricas que REALMENTE impulsan tu éxito." }
            ]
        },
        miniReto: "Toma lo que más te irritó de alguien hoy y encuentra cómo es un superpoder que no te atreves a usar.",
        plantillaMetodologica: [
            { aspecto: 'La Reacción (Mi espejo)', guia: '¿Qué persona o situación me activó emocionalmente hoy?' },
            { aspecto: 'La Lección (El reflejo)', guia: '¿Qué cualidad mía me está mostrando?' },
            { aspecto: 'La Integración (Mi nueva imagen)', guia: '¿Cómo puedo adueñarme de esa cualidad de forma consciente?' }
        ]
    },
    {
        id: 7,
        title: "Tu Yo de 8 Años",
        subtitle: "Protocolo de Amplificación: Poder del Deseo",
        description: "🔥 El Poder: El motor. Conectar con la fuerza primordial que impulsa la acción y la ambición.",
        metodo: "Conexión con el Genio Interior",
        archetype: "El Explorador",
        archetypeIcon: '👑',
        amplificacion: "Tu genio interior no habla en hojas de cálculo, habla en metáforas, imágenes y sentimientos.",
        ejercicio: "Convierte un 'debería' en un 'quiero' y ejecuta la acción más pequeña posible en 5 minutos.",
        colorClass: "text-orange-400",
        icon: 'fa-solid fa-teddy-bear',
        poderDeSherezadeId: 2,
        amplificacionProfunda: {
            datoOculto: "El 'juego' es la forma más elevada del trabajo. El miedo a parecer 'poco serio' es el asesino de la creatividad.",
            miAmplificacion: "No intentes 'pensar' de forma creativa, crea las condiciones para que la creatividad 'ocurra'.",
            ejercicios: [
                { titulo: "Pitch del Niño de 8 Años (Nivel 1)", descripcion: "Describe tu proyecto actual usando solo dibujos o juguetes. Documenta la idea más 'loca'." },
                { titulo: "Cita de Juego Obligatoria (Nivel 2)", descripcion: "Agenda 30 minutos de 'Cita de Juego' sin objetivo alguno." }
            ]
        },
        miniReto: "Convierte un 'debería' en un 'quiero' y ejecuta la acción más pequeña posible en 5 minutos.",
        plantillaMetodologica: [
            { aspecto: 'La Llama (El qué)', guia: '¿Cuál es el deseo más puro, sin filtro, sin "peros"?' },
            { aspecto: 'El Combustible (El porqué)', guia: '¿Qué alimenta este deseo? ¿Venganza, amor, creación pura?' },
            { aspecto: 'La Ignición (El cómo)', guia: '¿Cuál es la primera acción que enciende la llama HOY?' }
        ]
    },
    {
        id: 8,
        title: "Visión Predictiva",
        subtitle: "Protocolo de Amplificación: Anticipación de Futuros",
        description: "🔮 El Poder: El futuro no es un misterio, es una consecuencia. La ventaja es el tiempo de anticipación.",
        metodo: "Anticipación de Futuros",
        archetype: "El Arquitecto",
        archetypeIcon: '🔮',
        amplificacion: "La visión predictiva requiere desconectar el ruido del presente. Estudia la historia, no las noticias.",
        ejercicio: "Identifica una tendencia emergente y escribe 3 escenarios posibles para los próximos 5 años.",
        colorClass: "text-yellow-400",
        icon: 'fa-solid fa-binoculars',
        amplificacionProfunda: {
            datoOculto: "Quien conoce el ciclo, controla el resultado. Los ciclos se repiten.",
            miAmplificacion: "Dedica tiempo a estudiar la historia. Los datos fríos del pasado son el mapa del futuro.",
            ejercicios: [
                { titulo: "Radar de Señales Débiles (Nivel 1)", descripcion: "Dedica 1 hora a leer publicaciones marginales. Busca patrones que aún no son mainstream." },
                { titulo: "Matriz de Impacto Futuro (Nivel 2)", descripcion: "Cruza dos tendencias actuales y describe el 'hijo' que tendrán en 3 años." }
            ]
        },
        miniReto: "Identifica una tendencia emergente y escribe 3 escenarios posibles para los próximos 5 años.",
        plantillaMetodologica: [
            { aspecto: 'Tendencia (Señal)', guia: '¿Qué cambio sutil estás notando en tu entorno?' },
            { aspecto: 'Impacto (Efecto)', guia: '¿Cómo alterará esto las reglas del juego en 12 meses?' },
            { aspecto: 'Apuesta (Acción)', guia: '¿Qué movimiento asimétrico puedes hacer hoy?' }
        ]
    }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        text: "¿Cómo reaccionas ante un problema complejo e inesperado?",
        options: [
            { text: "Analizo los datos y busco el patrón estructural subyacente.", archetype: "El Arquitecto" },
            { text: "Cambio la narrativa para que el problema parezca una oportunidad.", archetype: "El Alquimista" },
            { text: "Pruebo soluciones rápidas y hackeo el sistema sobre la marcha.", archetype: "El Explorador" }
        ]
    },
    {
        id: 2,
        text: "¿Cuál es tu herramienta preferida para el éxito?",
        options: [
            { text: "Un sistema robusto y escalable.", archetype: "El Arquitecto" },
            { text: "Una historia poderosa que mueva a la gente.", archetype: "El Alquimista" },
            { text: "Un exploit creativo que nadie más ha visto.", archetype: "El Explorador" }
        ]
    },
    {
        id: 3,
        text: "¿Qué te motiva más al iniciar un proyecto?",
        options: [
            { text: "La claridad del diseño y la estructura final.", archetype: "El Arquitecto" },
            { text: "El impacto emocional y la transformación que genera.", archetype: "El Alquimista" },
            { text: "La emoción de descubrir lo desconocido y romper límites.", archetype: "El Explorador" }
        ]
    },
    {
        id: 4,
        text: "¿Cómo prefieres comunicarte con tu equipo?",
        options: [
            { text: "A través de métricas, dashboards y procesos claros.", archetype: "El Arquitecto" },
            { text: "Inspirándolos con una visión y un propósito compartido.", archetype: "El Alquimista" },
            { text: "Mediante experimentos rápidos y feedback en tiempo real.", archetype: "El Explorador" }
        ]
    },
    {
        id: 5,
        text: "¿Qué tipo de entorno te hace sentir más productivo?",
        options: [
            { text: "Un espacio ordenado donde todo tiene su lugar lógico.", archetype: "El Arquitecto" },
            { text: "Un ambiente creativo lleno de estímulos y metáforas.", archetype: "El Alquimista" },
            { text: "Un entorno dinámico y cambiante que requiera adaptabilidad.", archetype: "El Explorador" }
        ]
    },
    {
        id: 6,
        text: "¿Cuál es tu mayor temor profesional?",
        options: [
            { text: "El caos incontrolado y la falta de estructura.", archetype: "El Arquitecto" },
            { text: "La irrelevancia narrativa y el aburrimiento.", archetype: "El Alquimista" },
            { text: "La rigidez sistémica y la falta de libertad para innovar.", archetype: "El Explorador" }
        ]
    }
];

export const MANDAMIENTOS: { [key: number]: string } = {
    1: "Quien controla el encuadre controla el significado.",
    2: "Los problemas cambian, los patrones riman.",
    3: "Sostén dos ideas opuestas hasta parir una tercera.",
    4: "No hackeas reglas, hackeas incentivos.",
    5: "El caos es un bisturí, no una bomba.",
    6: "La correlación a tiempo vale más que la causalidad tardía.",
    7: "¿Sería divertido? Entonces vale explorarlo.",
    8: "El futuro premia al que lo escribe primero."
};

export const CODICE_CONTENT = {
    sigilo: "El Sigilo de la Transmutación Perpetua",
    leyDelOro: {
        titulo: "LA LEY DEL ORO",
        lema: "Danza tu Caos, Honra tu Origen.",
        descripcion: "No reprimas tu naturaleza Chola (caos), ni fingas tu naturaleza Fresa (orden). La maestría reside en la tensión entre ambas."
    },
    monedaDeCambio: {
        titulo: "LA MONEDA DE CAMBIO",
        lema: "Fuego Transformado",
        descripcion: "Aquí no intercambiamos tiempo por dinero. Intercambiamos 'Cátedras de Zapateado': lecciones de vida extraídas del fuego de la experiencia y cristalizadas en sabiduría táctica."
    },
    espejoNegro: {
        titulo: "EL ESPEJO NEGRO: EL AUTÓMATA PULIDO",
        descripcion: "El némesis de la Chalamandra. Aquel que pule la forma pero vacía el contenido. Es la perfección estética sin alma (Fresa vacía) o el caos destructivo sin propósito (Chola perdida). El Autómata busca aprobación; la Chalamandra busca Verdad."
    }
};

export const RPG_MODULE_ORDER = [1, 2, 3, 4, 5, 6, 7, 8];

export const COMBOS: any = {
    "1,2": { name: "Combo Inicial", description: "La base de todo." }
};

export const CERTIFICATIONS_DATA: any[] = [];

export const RPG_MODULES_DATA: { [key: number]: any } = {
    1: {
        title: "Nivel 1: El Despertar de la Palabra",
        subtitle: "Protocolo Scheherazade",
        description: "Iniciación en el arte de invocar realidades a través del lenguaje estratégico.",
        objective: "Dominar el encuadre narrativo absoluto.",
        story: "Te encuentras ante el Rey. Tu vida depende de la historia que seas capaz de tejer.",
        twist: { type: 'mission', title: 'Misión Crítica: El Secuestro del Marco', content: 'Convence al guardia de que eres el arquitecto del sistema, no un intruso.' }
    },
    2: {
        title: "Nivel 2: El Robo de Patrones",
        subtitle: "Protocolo Hermes Trismegisto",
        description: "Extracción de soluciones fractales de industrias ajenas para aplicarlas a tu ventaja.",
        objective: "Identificar estructuras ocultas en el caos.",
        story: "El laberinto de datos se abre ante ti; solo el que ve el patrón encuentra la salida.",
        twist: { type: 'boss', title: 'El Guardián de la Inercia', content: 'Un error de lógica heredado bloquea tu camino. Encuentra el exploit.' }
    },
    3: {
        title: "Nivel 3: La Fusión de la Paradoja",
        subtitle: "Protocolo Lewis Carroll",
        description: "Sostener la tensión de los opuestos para forzar el nacimiento de una tercera vía superior.",
        objective: "Crear la síntesis de lo imposible.",
        story: "A través del espejo, las reglas de la lógica lineal se desintegran.",
        twist: { type: 'power-up', title: 'Claridad Absurda', content: 'Ves lo invisible: la solución que nadie más se atreve a considerar.' }
    },
    4: {
        title: "Nivel 4: El Escucha de Sombras",
        subtitle: "Protocolo Hacker Anónima",
        description: "Captación del subtexto y los silencios estratégicos en entornos de alta presión.",
        objective: "Oír lo que no se dice.",
        story: "Las sombras en la red hablan más que los nodos iluminados.",
        twist: { type: 'mission', title: 'Infiltración en el Silencio', content: 'Identifica la pregunta que todos temen hacer en la próxima reunión.' }
    },
    5: {
        title: "Nivel 5: La Inyección de Caos",
        subtitle: "Protocolo El Trickster",
        description: "Uso estratégico del desorden para revelar las debilidades de sistemas rígidos.",
        objective: "Doblar las reglas hasta que confiesen.",
        story: "El bufón es el único que puede decirle la verdad al Rey sin perder la cabeza.",
        twist: { type: 'boss', title: 'El Juez de la Razón Pura', content: 'Desafía la lógica establecida con una acción totalmente impredecible.' }
    },
    6: {
        title: "Nivel 6: El Reflejo de Datos",
        subtitle: "Protocolo IA",
        description: "Uso de la frialdad de los datos para eliminar el sesgo del ego en la toma de decisiones.",
        objective: "Ver el mundo sin filtros emocionales.",
        story: "La máquina no miente; solo te muestra el espejo de tus propias correlaciones.",
        twist: { type: 'power-up', title: 'Visión de Datos Fríos', content: 'Correlación perfecta: anticipas el movimiento antes de que ocurra.' }
    },
    7: {
        title: "Nivel 7: El Motor del Deseo",
        subtitle: "Protocolo Tu Yo de 8 Años",
        description: "Reconexión con la fuerza primordial que impulsa la acción sin filtros sociales.",
        objective: "Activar la llama del genio interior.",
        story: "El niño que fuiste guarda la llave de la ambición que el adulto olvidó.",
        twist: { type: 'mission', title: 'Recuperar el Fuego Sagrado', content: 'Convierte un "debería" social en un "quiero" visceral y actúa.' }
    },
    8: {
        title: "Nivel 8: El Arquitecto del Mañana",
        subtitle: "Protocolo Visión Predictiva",
        description: "Anticipación de consecuencias a largo plazo para dominar el tiempo presente.",
        objective: "Escribir el futuro antes de que ocurra.",
        story: "El tiempo no es una línea, es una construcción que tú puedes diseñar.",
        twist: { type: 'power-up', title: 'Ojo del Mañana', content: 'Ves las consecuencias de cada acción con 5 años de antelación.' }
    }
};
