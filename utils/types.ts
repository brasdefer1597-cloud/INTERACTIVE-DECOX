export type Archetype = 'El Arquitecto' | 'El Alquimista' | 'El Explorador';

export interface AmplificacionProfunda {
  datoOculto: string;
  miAmplificacion: string;
  ejercicios: {
    titulo: string;
    descripcion:string;
  }[];
}

export interface PlantillaAspecto {
    aspecto: string;
    guia: string;
}

export interface PoderDeSherezade {
    id: number;
    title: string;
    icon: string;
    clave: string;
    proposito: string;
    poder: string;
    ejemploDeUso: string;
    plantilla: PlantillaAspecto[];
    miniReto: string;
}

export interface Hack {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metodo: string;
  archetype: Archetype;
  archetypeIcon: string;
  amplificacion: string;
  ejercicio: string;
  colorClass: string;
  icon: string;
  miniReto: string;
  plantillaMetodologica?: any;
  amplificacionProfunda: AmplificacionProfunda;
  poderDeSherezadeId?: number;
}

export interface Certification {
  id: number;
  title: string;
  icon: string;
  color: string;
  requiredHacks: number[];
  description: string;
  srap: string;
}

export interface ModalState {
  isOpen: boolean;
  type: 'hack' | 'srap' | 'total' | 'discovery' | 'magistral' | 'postPayment' | 'activation' | null;
  data?: any;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    archetype: Archetype;
  }[];
}

export interface Combo {
  id: string;
  name: string;
  hacks: number[];
  description: string;
}
