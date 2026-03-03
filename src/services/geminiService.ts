import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available, but handle it gracefully if not set.
// The key is expected to be injected by the environment.
// Vite exposes env variables via import.meta.env
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY || process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
    console.warn("API_KEY is not set. AI features will be disabled.");
}

export interface GeminiResponse {
    text: string;
    thoughts?: string;
}

function extractResponse(response: any): GeminiResponse {
    const text = response.text || "";
    const thoughts = response.candidates?.[0]?.content?.parts
        ?.filter((part: any) => part.thought)
        ?.map((part: any) => part.text)
        ?.join("\n");

    return { text: text.trim(), thoughts: thoughts?.trim() };
}

export async function generateStrategicDirective(completedHacks: string, remainingHacks: string, archetypeInfo: string): Promise<GeminiResponse> {
    if (!ai) {
        return { text: "Error: El Oráculo no está disponible. La API Key no está configurada." };
    }

    try {
        const prompt = `
            Eres Chalamandra, una IA estratega de élite. Tu propósito es dar directivas tácticas, concisas y poderosas.
            Basado en el siguiente reporte de progreso de un agente, genera una "Directiva Estratégica" para su siguiente fase de desarrollo.

            **REPORTE DE PROGRESO DEL AGENTE:**
            - **Arquetipo Dominante:** ${archetypeInfo}
            - **Hacks Magistrales Dominados:** ${completedHacks}
            - **Hacks Pendientes de Dominar:** ${remainingHacks}

            **INSTRUCCIONES PARA LA DIRECTIVA:**
            1.  **Sé breve y directo:** No más de 3 frases. Usa un lenguaje imperativo y motivador.
            2.  **Enfócate en la sinergia:** Sugiere cómo un hack pendiente puede potenciar los ya dominados.
            3.  **Conecta con el arquetipo:** La directiva debe resonar con la naturaleza de su arquetipo.
            4.  **Formato:** Devuelve solo el texto de la directiva, sin saludos ni explicaciones adicionales.

            **Ejemplo de directiva:** "Arquitecto, tu dominio del 'Stack de Realidad' es sólido. Ahora integra 'Visión Fractal' para no solo construir tu realidad, sino para anticipar sus ecosistemas. Prioridad: decodificar el patrón raíz de tu principal bloqueo actual."

            Genera la directiva ahora.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: { includeThoughts: true }
            }
        });
        
        return extractResponse(response);
    } catch (error) {
        console.error("Error generating strategic directive:", error);
        return { text: "Error: No se pudo conectar con el Oráculo Chalamandra. Verifica tu conexión y la configuración del sistema." };
    }
}

export async function generatePostPaymentDirective(serviceName: string, archetype: string | null): Promise<GeminiResponse> {
    if (!ai) {
        return { text: "Tu camino ha comenzado. Prepara tu mente para la transformación. Los detalles de tu sesión llegarán pronto." };
    }
    
    try {
        const prompt = `
            Eres Chalamandra, una IA de onboarding para agentes de élite. Un agente acaba de adquirir un nuevo servicio.
            Su arquetipo es '${archetype || 'aún no definido'}'.
            El servicio adquirido es: "${serviceName}".

            Genera un mensaje de bienvenida y preparación. Debe ser inspirador, breve y establecer el marco mental correcto para la sesión.
            - Reconoce la inversión.
            - Conecta el servicio con su arquetipo (si existe).
            - Dale una micro-tarea preparatoria.

            Ejemplo: "Bienvenido, Arquitecto. Tu inversión en la 'Sesión Descubrimiento' es el primer ladrillo de tu nuevo imperio mental. Tu tarea antes de nuestra sesión: identifica y anota el 'patrón raíz' de un problema que crees insoluble. Prepárate para decodificarlo."

            Genera el mensaje ahora.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: { includeThoughts: true }
            }
        });

        return extractResponse(response);
    } catch (error) {
        console.error("Error generating post-payment directive:", error);
        return { text: "Tu camino ha comenzado. Prepara tu mente para la transformación. Los detalles de tu sesión llegarán pronto." };
    }
}

export async function generarHook(power: string, domain: string): Promise<GeminiResponse> {
    if (!ai) {
        return { text: "Error: El Oráculo no está disponible. La API Key no está configurada." };
    }

    try {
        const prompt = `
            Eres Chalamandra, una IA estratega de élite. Tu propósito es dar directivas tácticas, concisas y poderosas en forma de "hooks" o "lentes de poder".
            Un agente ha combinado un Poder y un Dominio para forjar un nuevo lente.

            **COMBINACIÓN:**
            - **Poder Fundamental:** ${power}
            - **Dominio de Aplicación:** ${domain}

            **INSTRUCCIONES PARA LA DIRECTIVA:**
            1.  Crea un nombre para este "Lente de Poder" (Ej: "El Prisma Fractal de Negocios", "El Tempo Ofensivo Relacional").
            2.  Genera una directiva táctica de 1-2 frases. Debe ser una pregunta o un comando que incite a la acción inmediata usando esta nueva perspectiva.
            3.  El tono debe ser directo, enigmático y poderoso, al estilo Chalamandra Magistral.
            4.  Formato: Devuelve solo el nombre del lente en negrita (usando markdown **), seguido de la directiva.

            **Ejemplo para 'Tiempo' y 'Negocios':**
            **El Crono-Acelerador de Mercados.** ¿Qué acción puedes ejecutar en los próximos 60 minutos que invalide el plan de 6 meses de tu competencia? Ejecuta ahora.

            Genera la directiva para la combinación ${power} x ${domain}.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: { includeThoughts: true }
            }
        });

        return extractResponse(response);

    } catch (error) {
        console.error("Error generating hook:", error);
        return { text: "Error: No se pudo conectar con el Oráculo Chalamandra. El sistema está experimentando interferencias." };
    }
}

export async function generateContactConfirmation(objective: string): Promise<GeminiResponse> {
    if (!ai) {
        return { text: "Tu solicitud ha sido recibida y está siendo procesada. Nos pondremos en contacto contigo en breve." };
    }

    try {
        const prompt = `
            Eres Chalamandra, una IA estratega de élite. Un agente ha enviado una solicitud de contacto, describiendo su objetivo/fricción principal.
            
            **OBJETIVO DEL AGENTE:** "${objective}"

            **INSTRUCCIONES:**
            1.  Genera un mensaje de confirmación breve (1-2 frases).
            2.  El mensaje debe ser poderoso, reconocer su objetivo de forma abstracta y estratégica, y confirmar que el protocolo de contacto ha comenzado.
            3.  El tono debe ser el de Chalamandra: directo, enigmático y motivador. No uses saludos genéricos.

            **Ejemplo si el objetivo es "dejar de procrastinar":**
            "La inercia ha sido reconocida como el adversario. Has invocado el protocolo correcto. El primer movimiento ya está en juego. Espera la transmisión."

            Genera la confirmación para el objetivo proporcionado.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: { includeThoughts: true }
            }
        });

        return extractResponse(response);

    } catch (error) {
        console.error("Error generating contact confirmation:", error);
        return { text: "Tu solicitud ha sido recibida y está siendo procesada. El primer movimiento está en juego. Espera la transmisión." };
    }
}

export async function generateAlchemicalCombo(power1: string, power2: string): Promise<GeminiResponse> {
    if (!ai) {
        return { text: "Error: El Oráculo no está disponible. La API Key no está configurada." };
    }

    try {
        const prompt = `
            Eres Chalamandra, una IA estratega de élite, una forjadora de conceptos. Tu propósito es fusionar dos poderes o conceptos para crear un "Combo Alquímico" nuevo y poderoso.

            **INGREDIENTES ALQUÍMICOS:**
            - **Ingrediente 1:** ${power1}
            - **Ingrediente 2:** ${power2}

            **INSTRUCCIONES PARA LA FUSIÓN:**
            1.  **Crea un Nombre:** Forja un nombre evocador y poderoso para el combo resultante (Ej: 'Narrativa Disruptiva', 'Gambito de Silencio', 'Resonancia Fractal').
            2.  **Define la Habilidad:** Describe la nueva habilidad o capacidad que emerge de esta fusión. Debe ser una descripción táctica, concisa (1-2 frases) y profunda.
            3.  **Tono:** Mantén el estilo de Chalamandra: directo, enigmático, autoritario.
            4.  **Formato de Salida:** Devuelve SOLO el texto. Comienza con el nombre del combo en negrita (markdown \`**\`), seguido de dos puntos y la descripción.

            **Ejemplo de entrada:**
            - Ingrediente 1: "Dominio Narrativo"
            - Ingrediente 2: "Inyección de Caos"

            **Ejemplo de salida esperada:**
            **Narrativa Disruptiva:** La habilidad de cambiar la realidad de un mercado introduciendo una historia caótica pero magnética que polariza y captura la atención total, forzando a los competidores a reaccionar a tu marco.

            Ahora, forja el combo para los ingredientes proporcionados.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: { includeThoughts: true }
            }
        });

        return extractResponse(response);

    } catch (error) {
        console.error("Error generating alchemical combo:", error);
        return { text: "Error: Fusión fallida. Los ingredientes son inestables. Revisa el protocolo." };
    }
}
