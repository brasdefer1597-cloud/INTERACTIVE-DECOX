import { Hack, Certification, PoderDeSherezade } from './types';

export const QUIZ_QUESTIONS = [
    {
        question: "¿Cómo reaccionas ante un problema complejo?",
        options: {
            'El Arquitecto': "Lo desgloso en componentes y creo un plan estructural.",
            'El Alquimista': "Experimento con diferentes enfoques y siento la energía de la situación.",
            'El Explorador': "Busco información externa y me aventuro en lo desconocido."
        }
    },
    {
        question: "Tu mayor fortaleza en un equipo es:",
        options: {
            'El Arquitecto': "La capacidad de crear orden, sistemas y predictibilidad.",
            'El Alquimista': "La habilidad de transformar conflictos y catalizar nuevas ideas.",
            'El Explorador': "La audacia para probar nuevos caminos y adaptarme rápidamente."
        }
    },
    {
        question: "Prefieres un entorno que sea:",
        options: {
            'El Arquitecto': "Controlado, optimizado y predecible.",
            'El Alquimista': "Fluido, inspirador y lleno de potencial.",
            'El Explorador': "Dinámico, desafiante y lleno de oportunidades."
        }
    },
    {
        question: "En una situación de caos total, tu prioridad es:",
        options: {
            'El Arquitecto': "Restaurar el orden y establecer procesos claros.",
            'El Alquimista': "Encontrar la oportunidad oculta y transmutar la crisis.",
            'El Explorador': "Moverte rápido, probar salidas y adaptarte al terreno."
        }
    },
    {
        question: "Para ti, el éxito se define como:",
        options: {
            'El Arquitecto': "Un sistema que funciona sin errores y es altamente escalable.",
            'El Alquimista': "Haber transformado una realidad ordinaria en algo extraordinario.",
            'El Explorador': "Haber conquistado un territorio nuevo y superado límites personales."
        }
    },
    {
        question: "Tu herramienta favorita es:",
        options: {
            'El Arquitecto': "Una hoja de ruta detallada o un plano técnico robusto.",
            'El Alquimista': "Tu intuición y la capacidad de ver patrones invisibles.",
            'El Explorador': "Tu curiosidad inagotable y tu capacidad de pivotar al instante."
        }
    }
];

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
    },
    {
        id: 8,
        title: "Visión Predictiva",
        icon: '🔮',
        clave: "Anticipación de Futuros.",
        proposito: "Anticipar, no reaccionar.",
        poder: "La capacidad de ver el futuro como una consecuencia de patrones presentes.",
        ejemploDeUso: "No esperes a que el futuro llegue, constrúyelo. Utiliza la extrapolación de datos para predecir curvas de cambio.",
        plantilla: [
            { aspecto: 'Radar de Señales Débiles', guia: 'Busca patrones que aún no son mainstream.' },
            { aspecto: 'Matriz de Impacto Futuro', guia: 'Cruza dos tendencias actuales y describe su evolución.' }
        ],
        miniReto: "Identifica una tendencia emergente y escribe 3 escenarios posibles."
    }
];

export const HACKS_DATA: Hack[] = [
    {
        id: 1,
        title: "Scheherazade",
        subtitle: "Dominio Narrativo Absoluto",
        description: "No cuentes historias, secuestra marcos de referencia. Controlas la lente perceptual, no los eventos.",
        metodo: "7 Sombreros de Innovación",
        archetype: "El Alquimista",
        archetypeIcon: '🍓',
        amplificacion: "No cuentes historias, secuestra marcos de referencia. Controlas la lente perceptual, no los eventos. Es 'pre-suasión' pura: construyes la catedral antes de invitar a orar.",
        ejercicio: "Antes de tu próxima reunión importante, envía un email 'preparatorio' que reencuadre el tema completamente a tu favor.",
        colorClass: "text-pink-400",
        icon: 'fa-solid fa-crown',
        poderDeSherezadeId: 1,
        amplificacionProfunda: {
            datoOculto: "La gente no compra productos, compra IDENTIDADES. Scheherazade no vendía historias; vendía la identidad de 'un rey que siempre está un paso adelante, intrigado'. Tu narrativa debe ofrecer una versión mejorada de la identidad de tu cliente.",
            miAmplificacion: "La pre-suasión no es manipular, es CONSTRUIR EL ESCENARIO. Eres el arquitecto del contexto. Antes de que alguien entre en tu 'habitación' (reunión, sitio web, conversación), ya debe sentir lo que tú quieres que sienta. El marco lo es todo.",
            ejercicios: [
                {titulo: "Reencuadre de Email (Nivel 1)", descripcion: "Antes de tu próxima reunión, envía un email 'preparatorio' que reencuadre el tema completamente a tu favor (ej: 'Imaginemos un futuro donde X sea imposible...')."},
                {titulo: "El 'Caballo de Troya' de Identidad (Nivel 2)", descripcion: "En tu próximo post o pieza de contenido, no hables de tu producto. Habla del 'enemigo' de la nueva identidad que ofreces (ej: 'El verdadero ladrón de tu tiempo no es la procastinación, es la falta de un enemigo claro')."}
            ]
        }
    },
    {
        id: 2,
        title: "Hermes Trismegisto",
        subtitle: "Robo de Patrones Fractales",
        description: "El sistema operativo de la realidad. Las 'causas raíz' son universales en forma, no únicas en contenido.",
        metodo: "5 Porqués (Excavación Profunda)",
        archetype: "El Alquimista",
        archetypeIcon: '🔪',
        amplificacion: "El sistema operativo de la realidad. Las 'causas raíz' son universales en forma, no únicas en contenido. Transfiere soluciones a la estructura, no al problema específico.",
        ejercicio: "Crea un 'mapa fractal' semanal: toma un problema personal y encuéntralo replicado en 3 contextos históricos o industriales.",
        colorClass: "text-green-400",
        icon: 'fa-solid fa-key',
        poderDeSherezadeId: 3,
        amplificacionProfunda: {
            datoOculto: "La 'causa raíz' no es el final de la excavación, es el INICIO de la transferencia. Una vez que encuentras el patrón (ej: 'falta de feedback loops'), puedes robar soluciones de cualquier industria que haya resuelto ese mismo patrón estructural.",
            miAmplificacion: "No resuelvas problemas, roba soluciones. Tu industria está llena de gente resolviendo los mismos 5-7 problemas estructurales una y otra vez. Mira a la biología, la milicia o la cocina. Ellos ya resolvieron tus problemas. Solo tienes que 'traducir' el patrón.",
            ejercicios: [
                {titulo: "Mapa Fractal Semanal (Nivel 1)", descripcion: "Toma un problema personal y encuéntralo replicado en 3 contextos históricos o industriales completamente diferentes. Documenta el patrón."},
                {titulo: "Traductor Universal de Patrones (Nivel 2)", descripcion: "Elige una biografía de un gran estratega (militar, empresarial, etc.) y 'traduce' una de sus soluciones a un problema que tengas AHORA MISMO."}
            ]
        }
    },
    {
        id: 3,
        title: "Lewis Carroll",
        subtitle: "La Pregunta Absurda",
        description: "La paradoja es la 'restricción liberadora'. Cuando fuerzas al cerebro a sostener ideas contradictorias, se ve forzado a construir un nuevo modelo mental.",
        metodo: "6 Sombreros de Bono (Paradoja)",
        archetype: "El Arquitecto",
        archetypeIcon: '🍓',
        amplificacion: "La paradoja es la 'restricción liberadora'. Cuando fuerzas al cerebro a sostener ideas contradictorias, se ve forzado a construir un nuevo modelo mental (disrupción pura).",
        ejercicio: "Toma una paradoja personal y fuerza una fusión radical en un plan de acción concreto esta semana.",
        colorClass: "text-yellow-400",
        icon: 'fa-solid fa-hat-wizard',
        poderDeSherezadeId: 6,
        amplificacionProfunda: {
            datoOculto: "La innovación no viene de las respuestas, viene de la CALIDAD de las preguntas. Una pregunta absurda es un 'atajo' que obliga a tu cerebro a salir de sus caminos neuronales habituales y a crear nuevas conexiones. Es un hack de neuroplasticidad.",
            miAmplificacion: "El 'realismo' es el asesino de la genialidad. La pregunta absurda te da permiso para explorar lo 'imposible' en un entorno seguro. El 99% de las ideas serán inútiles, pero el 1% cambiará el juego. Tu trabajo es generar ese 1%.",
            ejercicios: [
                {titulo: "Fusión de Paradojas (Nivel 1)", descripcion: "Toma una paradoja personal (ej: 'Quiero libertad pero también estructura') y fuerza una fusión radical en un plan de acción concreto esta semana."},
                {titulo: "El 'Inversor de Suposiciones' (Nivel 2)", descripcion: "Lista las 5 suposiciones fundamentales de tu industria. Ahora, invierte cada una con una pregunta absurda (ej: '¿Y si los clientes nos pagaran para NO usar nuestro producto?')."}
            ]
        }
    },
    {
        id: 4,
        title: "Hacker Anónima",
        subtitle: "Hackeo de Sistemas Invisibles",
        description: "No se hackean cosas, se hackean incentivos. Opera siempre con el 'código fuente' (incentivos reales).",
        metodo: "Ajedrez en 3 Planos Dimensionales",
        archetype: "El Explorador",
        archetypeIcon: '🔪',
        amplificacion: "No se hackean cosas, se hackean incentivos. Opera siempre con el 'código fuente' (incentivos reales), nunca con el 'modelo mental del manual de usuario'.",
        ejercicio: "Identifica un incentivo oculto en tu entorno laboral y diseña un exploit esta semana.",
        colorClass: "text-indigo-400",
        icon: 'fa-solid fa-user-secret',
        poderDeSherezadeId: 4,
        amplificacionProfunda: {
            datoOculto: "Todo sistema (empresa, familia, mercado) opera sobre un conjunto de reglas escritas y otro de reglas NO ESCRITAS. El poder real está en entender y manipular las no escritas. El organigrama es una mentira; el mapa de influencia real es lo que importa.",
            miAmplificacion: "No pidas permiso, muestra resultados. El hacker no presenta un plan para aprobación. Ejecuta un 'exploit' a pequeña escala, demuestra su viabilidad y luego presenta el resultado como un hecho consumado. Es más fácil pedir perdón que permiso.",
            ejercicios: [
                {titulo: "Mapeo de Incentivos Ocultos (Nivel 1)", descripcion: "Identifica un incentivo oculto en tu entorno laboral (ej: 'La gente optimiza para visibilidad, no para impacto') y diseña un 'exploit' esta semana."},
                {titulo: "El 'Experimento Pícaro' (Nivel 2)", descripcion: "Lanza una pequeña iniciativa sin aprobación formal que, si funciona, validará tu hipótesis más audaz. Mantenla bajo el radar hasta que tengas datos."}
            ]
        }
    },
    {
        id: 5,
        title: "El Trickster",
        subtitle: "Inyección Estratégica de Caos",
        description: "El caos estratégico es una 'prueba de estrés' controlada. Obliga al sistema a revelar vulnerabilidades.",
        metodo: "4 Cuadrantes de Covey (Reorganización)",
        archetype: "El Explorador",
        archetypeIcon: '👑',
        amplificacion: "El caos estratégico es una 'prueba de estrés' controlada. Es la forma más rápida de obligar al sistema a revelar sus verdaderas vulnerabilidades y dependencias ocultas.",
        ejercicio: "Programa un 'día de caos' mensual: invierte completamente tu rutina y documenta qué patrones emergen.",
        colorClass: "text-red-400",
        icon: 'fa-solid fa-bomb',
        poderDeSherezadeId: 7,
        amplificacionProfunda: {
            datoOculto: "La eficiencia es frágil. La robustez viene de la adaptabilidad, y la adaptabilidad solo se entrena con caos. Un sistema que nunca falla es un sistema que está a punto de un fallo catastrófico. El caos controlado es la vacuna.",
            miAmplificacion: "El Trickster no rompe las reglas, las dobla hasta que revelan una verdad más profunda. No se trata de anarquía, se trata de 'jugar' con los límites del sistema para ver dónde son flexibles y dónde son quebradizos. Es una forma de diagnóstico avanzado.",
            ejercicios: [
                {titulo: "Día del Caos Controlado (Nivel 1)", descripcion: "Programa un 'día de caos' mensual: invierte completamente tu rutina (ej: empieza por el final del día) y documenta qué patrones emergen."},
                {titulo: "La 'Regla Inútil' (Nivel 2)", descripcion: "Introduce deliberadamente una regla o restricción temporal y absurda en un proyecto para forzar a tu equipo (o a ti mismo) a encontrar soluciones más creativas e inesperadas."}
            ]
        }
    },
    {
        id: 6,
        title: "Inteligencia Artificial",
        subtitle: "Supremacía de Datos",
        description: "El 99% se obsesiona con el 'porqué'; el 1% se enfoca exclusivamente en el 'qué funciona'.",
        metodo: "La Correlación sobre la Causalidad",
        archetype: "El Arquitecto",
        archetypeIcon: '🔪',
        amplificacion: "El 99% se obsesiona con el 'porqué' y la 'verdad'; el 1% se enfoca exclusivamente en el 'qué funciona'. La correlación ofrece patrones predictivos explotables inmediatamente.",
        ejercicio: "Analiza tus 5 decisiones más importantes: ¿Cuántas fallaron por intuición? Corrige una con datos duros.",
        colorClass: "text-cyan-400",
        icon: 'fa-solid fa-chart-pie',
        poderDeSherezadeId: 5,
        amplificacionProfunda: {
            datoOculto: "Tu cerebro está diseñado para buscar causalidad y significado, incluso donde no lo hay. Es un sesgo de supervivencia. Para operar al nivel del 1%, debes DESAPRENDER este instinto y confiar en la fría y agnóstica correlación. 'Si A y B ocurren juntos, explota eso'. El porqué es irrelevante.",
            miAmplificacion: "Los datos no tienen ego. No se ofenden. No tienen un mal día. Son el ancla más confiable en un mar de incertidumbre. La intuición es útil para generar hipótesis, pero los datos son los únicos jueces válidos para tomar decisiones de alto riesgo.",
            ejercicios: [
                {titulo: "Auditoría de Intuición (Nivel 1)", descripcion: "Analiza tus 5 decisiones más importantes del último mes: ¿Cuántas se basaron en intuición vs. datos? ¿Cuál fue el resultado? Encuentra una correlación que ignoraste."},
                {titulo: "El 'Dashboard de la Verdad' (Nivel 2)", descripcion: "Crea un panel simple con las 3-5 métricas que REALMENTE impulsan tu éxito. Oblígate a mirarlo durante 5 minutos antes de tomar cualquier decisión estratégica."}
            ]
        }
    },
    {
        id: 7,
        title: "Tu Yo de 8 Años",
        subtitle: "Conexión con el Genio Interior",
        description: "El adulto está contaminado de sesgos. El niño interior opera en espacio pre-lógico.",
        metodo: "Técnica Disney (Soñador, Realista, Crítico)",
        archetype: "El Explorador",
        archetypeIcon: '👑',
        amplificacion: "El adulto está contaminado de sesgos. El niño interior opera en espacio pre-lógico, donde la imaginación no está limitada por el 'realismo'. Fuente de originalidad radical.",
        ejercicio: "Programa una 'Ronda de Pitch del Niño de 8 Años' semanal: describe tu proyecto usando solo dibujos.",
        colorClass: "text-orange-400",
        icon: 'fa-solid fa-teddy-bear',
        poderDeSherezadeId: 2,
        amplificacionProfunda: {
            datoOculto: "El 'juego' no es lo contrario del trabajo; es su forma más elevada. Los niños aprenden más rápido que los adultos porque 'juegan' sin miedo al fracaso. El juicio y el miedo a parecer 'poco serio' son los mayores asesinos de la creatividad.",
            miAmplificacion: "Tu genio interior no habla en hojas de cálculo, habla en metáforas, imágenes y sentimientos. Para acceder a él, debes cambiar de lenguaje. No intentes 'pensar' de forma creativa, crea las condiciones para que la creatividad 'ocurra'. El aburrimiento y el juego son tus mejores herramientas.",
            ejercicios: [
                {titulo: "Pitch del Niño de 8 Años (Nivel 1)", descripcion: "Describe tu proyecto actual usando solo dibujos, legos o juguetes. Documenta la idea más 'loca' que surja y encuentra su núcleo de genialidad."},
                {titulo: "Cita de Juego Obligatoria (Nivel 2)", descripcion: "Agenda 30 minutos a la semana en tu calendario como 'Cita de Juego'. No tiene objetivo. Puedes dibujar, construir algo, caminar sin rumbo. Es una práctica de 'no-hacer' para recargar tu pozo creativo."}
            ]
        }
    },
    {
        id: 8,
        title: "Visión Predictiva",
        subtitle: "Anticipación de Futuros",
        description: "Anticipar movimientos futuros basándose en el análisis de patrones presentes y pasados.",
        metodo: "Análisis de Tendencias y Proyección de Escenarios",
        archetype: "El Arquitecto",
        archetypeIcon: '🔮',
        amplificacion: "No esperes a que el futuro llegue, constrúyelo. Utiliza la extrapolación de datos para predecir curvas de cambio.",
        ejercicio: "Identifica una tendencia emergente y escribe 3 escenarios posibles para los próximos 5 años.",
        colorClass: "text-yellow-400",
        icon: 'fa-solid fa-binoculars',
        poderDeSherezadeId: 8,
        amplificacionProfunda: {
            datoOculto: "El futuro no es un misterio, es una consecuencia. La mayoría vive en el 'ahora reactivo'. El visionario vive en el 'futuro proyectado'. La ventaja no es la inteligencia, es el tiempo de anticipación.",
            miAmplificacion: "La visión predictiva requiere desconectar el ruido del presente. Dedica tiempo a estudiar la historia, no las noticias. Los ciclos se repiten. Quien conoce el ciclo, controla el resultado.",
            ejercicios: [
                {titulo: "Radar de Señales Débiles (Nivel 1)", descripcion: "Dedica 1 hora a la semana a leer publicaciones marginales o 'frikis' de tu sector. Busca patrones que aún no son mainstream."},
                {titulo: "Matriz de Impacto Futuro (Nivel 2)", descripcion: "Cruza dos tendencias actuales y describe el 'hijo' que tendrán en 3 años. Ese es tu nuevo producto o servicio."}
            ]
        }
    }
];

export const CERTIFICATIONS_DATA: Certification[] = [
    {
        id: 1,
        title: 'Maestría del Explorador',
        icon: 'fa-solid fa-compass',
        color: 'text-blue-400',
        requiredHacks: [4, 5, 7],
        description: 'Has dominado el arte de navegar la incertidumbre, hackear incentivos invisibles y usar el caos como combustible. Eres un agente de cambio imparable.',
        srap: "Baila 5 minutos para activar tu energía, enfocándote en la expresión pura, sin juicio. Luego, anota una 'acción límite' que te dé miedo, y ¡ejecútala!"
    },
    {
        id: 2,
        title: 'Maestría del Alquimista',
        icon: 'fa-solid fa-flask',
        color: 'text-green-400',
        requiredHacks: [1, 2],
        description: 'Posees el poder de la transmutación. Conviertes narrativas en realidad y problemas en patrones de éxito. Tu palabra crea mundos.',
        srap: "Sincroniza tus ritmos emocionales con datos: toma una decisión crucial solo después de revisar 3 métricas, no por corazonada. Luego, revisa 5 Porqués en una relación o negocio fallido."
    },
    {
        id: 3,
        title: 'Maestría del Arquitecto',
        icon: 'fa-solid fa-drafting-compass',
        color: 'text-yellow-400',
        requiredHacks: [3, 6, 8],
        description: 'Eres el constructor de sistemas. Utilizas la paradoja, los datos y la visión predictiva para diseñar estructuras antifrágiles que perduran en el tiempo.',
        srap: "Activa un 'Sombrero' creativo (ej. El Soñador) y dedícale 15 minutos sin interrupción para generar una idea absurda, luego pausa y decodifica su potencial narrativo."
    },
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

export const COMBOS: { [key: string]: { name: string; description: string } } = {
    "1-2": { name: "Narrativa Fractal", description: "La habilidad de encontrar patrones universales y re-empaquetarlos en historias irresistibles que cambian la percepción de la realidad." },
    "5-7": { name: "Innovación Lúdica Caótica", description: "La capacidad de inyectar caos controlado y juego sin restricciones para descubrir oportunidades disruptivas que la lógica adulta no puede ver." },
    "4-6": { name: "Explotación de Datos Pura", description: "El arte de ignorar la 'causalidad' y usar datos fríos para encontrar y explotar los incentivos ocultos y las reglas no escritas de cualquier sistema." },
    "1-3": { name: "Persuasión Paradójica", description: "Crear narrativas que fuerzan a la audiencia a resolver una contradicción, llevándolos a una conclusión pre-diseñada por ti." },
    "2-5": { name: "Ingeniería del Caos Estructural", description: "Aplicar patrones de un sistema para inyectar caos estratégico en otro, forzando la revelación de sus debilidades y puntos de apalancamiento." },
    "3-7": { name: "Creatividad sin Ancla", description: "Fusionar la lógica absurda con la imaginación infantil para generar ideas tan originales que no pueden ser ignoradas ni fácilmente copiadas." },
    "1-4": { name: "Gambito del Relator", description: "Construir una historia que redefine los incentivos de todos los jugadores, haciendo que tu movida deseada sea la única opción lógica para ellos." },
};

export const RPG_MODULE_ORDER = [3, 2, 4, 1, 5, 7, 6];

export const RPG_MODULES_DATA: { [key: number]: { title: string; story: string; objective: string; twist: { type: 'boss' | 'mission' | 'power-up'; title: string; content: string | string[] } } } = {
  3: { // Lewis Carroll
    title: "🌀 Multiperspectiva & Paradojas",
    story: "Historia: Amor que mezcla fiestas malandras + ballet fresa.",
    objective: "Utiliza la paradoja y múltiples perspectivas para desafiar supuestos y desbloquear la innovación disruptiva.",
    twist: {
      type: 'boss',
      title: '💥 BOSS ACTIVO: Quiz de Percepciones',
      content: 'Inicia el quiz para desafiar tus supuestos fundamentales y forzar una nueva perspectiva.'
    }
  },
  2: { // Hermes
    title: "🔍 Excavación Profunda",
    story: "Historia: Caída en danza → puerta a la introspección profunda.",
    objective: "Aplica la técnica de los 5 Porqués para excavar hasta la causa raíz de un problema, revelando patrones ocultos.",
    twist: {
      type: 'mission',
      title: '💎 Misión Secreta: REVELAR CAPA PROFUNDA',
      content: '¡ORO DESCUBIERTO! La raíz oculta es el miedo a sostener el éxito.'
    }
  },
  4: { // Hacker
    title: "♟️ Estrategia en 3 Planos",
    story: "Historia: Duelo simbólico callejero vs. rival fresa.",
    objective: "Domina la estrategia en tres planos (táctico, posicional, emocional) para anticipar movimientos y ganar cualquier 'partida'.",
    twist: {
      type: 'power-up',
      title: '⚡ POWER-UP: Tips 3D Activos',
      content: [
        "**Plano Táctico:** ¿Cuál es el incentivo real del oponente?",
        "**Plano Posicional:** ¿Cómo se ven tus fichas en 5 movimientos?",
        "**Plano Emocional:** ¿Qué corazonada estás ignorando por miedo?"
      ]
    }
  },
  1: { // Scheherazade
      title: "📜 Roles Creativos",
      story: "Usa los 7 sombreros de innovación para construir una narrativa irrefutable.",
      objective: "Aplica los 7 sombreros de la innovación para analizar problemas desde todos los ángulos y construir narrativas poderosas e irrefutables.",
      twist: {
          type: 'mission',
          title: '💥 MISIÓN: Tu Sombrero Dominante',
          content: 'Realiza el test para descubrir tu estilo de pensamiento creativo por defecto y aprender a cambiar de sombrero a voluntad.'
      }
  },
  5: { // Trickster
      title: "📊 Urgente vs. Importante",
      story: "Aplica la matriz de Covey con la astucia de un Trickster para reorganizar tu realidad.",
      objective: "Usa la matriz de Covey para diferenciar lo urgente de lo importante, recuperando el control de tu foco y energía estratégica.",
      twist: {
          type: 'boss',
          title: '💥 BOSS: El Ladrón de Foco',
          content: 'Identifica y etiqueta tus tareas: "Notificaciones (Urgente, No Importante)" vs. "Planificación Estratégica (No Urgente, Importante)".'
      }
  },
  7: { // Yo de 8 años
      title: "🧸 Niño Interior",
      story: "Accede a la creatividad pura del 'Soñador' de Disney para romper bloqueos.",
      objective: "Activa los roles de Soñador, Realista y Crítico para llevar una idea desde la concepción abstracta hasta un plan de acción viable.",
      twist: {
          type: 'power-up',
          title: '⚡ POWER-UP: Activa Personaje',
          content: 'Invoca al "Soñador" para una sesión de brainstorming sin límites, luego al "Crítico" para encontrar la gema.'
      }
  },
  6: { // IA
      title: "📈 Sigue Datos",
      story: "La supremacía de la correlación sobre la causalidad para una toma de decisiones letal.",
      objective: "Aprende a priorizar la correlación de datos sobre la búsqueda de causalidad para tomar decisiones más rápidas y efectivas.",
      twist: {
          type: 'boss',
          title: '💥 BOSS FINAL: Enfrenta a "Intuición Ciega"',
          content: 'Ingresa un dato que refutó tu corazonada más reciente.'
      }
  }
};
