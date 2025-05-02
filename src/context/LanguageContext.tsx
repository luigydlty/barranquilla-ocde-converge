
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

type Translations = {
  [key: string]: {
    es: string;
    en: string;
  };
};

// Default translations for all the text in the application
const translations: Translations = {
  // Hero section
  homeTitle: {
    es: "Foro de Desarrollo Local de la OCDE 2025",
    en: "OECD Local Development Forum 2025"
  },
  homeSubtitle: {
    es: "Inspiraciones globales, transformaciones locales",
    en: "Global inspirations, local transformations"
  },
  dateLocation: {
    es: "8-11 Julio 2025 | Barranquilla - Colombia",
    en: "July 8-11, 2025 | Barranquilla - Colombia"
  },
  register: {
    es: "Regístrate al Evento Aquí",
    en: "Register for the Event Here"
  },
  
  // Nav menu items
  home: { es: "Inicio", en: "Home" },
  about: { es: "Sobre el Foro", en: "About the Forum" },
  program: { es: "Programa", en: "Program" },
  speakers: { es: "Ponentes", en: "Speakers" },
  venue: { es: "Información Práctica", en: "Practical Information" },
  gallery: { es: "Galería", en: "Gallery" },
  registration: { es: "Registro", en: "Registration" },
  contact: { es: "Contacto", en: "Contact" },
  registerNow: { es: "Regístrate Ahora", en: "Register Now" },
  
  // Countdown
  eventStartsIn: { es: "El evento comienza en:", en: "The event starts in:" },
  days: { es: "días", en: "days" },
  hours: { es: "horas", en: "hours" },
  minutes: { es: "minutos", en: "minutes" },
  seconds: { es: "segundos", en: "seconds" },
  
  // About section
  aboutForum: { es: "Sobre el Foro", en: "About the Forum" },
  aboutDescription: {
    es: "El Foro de Desarrollo Local de la OCDE es un evento internacional que reúne a líderes para compartir experiencias y estrategias innovadoras para el desarrollo territorial sostenible.",
    en: "The OECD Local Development Forum is an international event that brings together leaders to share experiences and innovative strategies for sustainable territorial development."
  },
  eventImportance: { es: "Importancia del Evento", en: "Event Importance" },
  eventImportanceP1: {
    es: "El foro reúne a responsables políticos, expertos y líderes de diversos sectores para discutir estrategias innovadoras que impulsen el desarrollo local, promuevan la inclusión social y fortalezcan las economías territoriales.",
    en: "The forum brings together policymakers, experts, and leaders from various sectors to discuss innovative strategies that drive local development, promote social inclusion, and strengthen territorial economies."
  },
  eventImportanceP2: {
    es: "Como sede del evento, Barranquilla representa un ejemplo destacado de transformación urbana y desarrollo económico en América Latina, con una valiosa experiencia en colaboración público-privada, diversificación económica e inclusión social.",
    en: "As the host city, Barranquilla represents an outstanding example of urban transformation and economic development in Latin America, with valuable experience in public-private collaboration, economic diversification, and social inclusion."
  },
  mainTopics: { es: "Temas Principales", en: "Main Topics" },
  topic1: {
    es: "Nuevos impulsores de transformaciones económicas locales (energía verde, economía del cuidado)",
    en: "New drivers of local economic transformations (green energy, care economy)"
  },
  topic2: {
    es: "Aumento de la presencia global de territorios (grandes eventos, marketing territorial)",
    en: "Increasing the global presence of territories (major events, territorial marketing)"
  },
  topic3: {
    es: "Fomento de la inclusión laboral e inteligencia artificial",
    en: "Promotion of labor inclusion and artificial intelligence"
  },
  topic4: {
    es: "Economía nocturna y liderazgo femenino en desarrollo local",
    en: "Night economy and female leadership in local development"
  },
  date: { es: "Fecha", en: "Date" },
  dateRange: { es: "8 al 11 de julio de 2025", en: "July 8-11, 2025" },
  mainEvent: { 
    es: "Evento principal: 9 y 10 de julio", 
    en: "Main event: July 9-10" 
  },
  parallelEvents: { 
    es: "Eventos paralelos: 8 y 11 de julio", 
    en: "Parallel events: July 8 and 11" 
  },
  mainVenue: { es: "Sede Principal", en: "Main Venue" },
  venuePlace: { es: "Puerta de Oro - Centro de Eventos", en: "Puerta de Oro - Event Center" },
  venueAddress: { es: "Vía 40 # 79B-06, Riomar, Barranquilla", en: "Via 40 # 79B-06, Riomar, Barranquilla" },
  audience: { es: "Audiencia", en: "Audience" },
  audienceMain: { 
    es: "Responsables políticos, agencias de desarrollo económico, innovadores sociales", 
    en: "Policy makers, economic development agencies, social innovators" 
  },
  audienceOthers: { es: "Empresas, ONG y público interesado", en: "Companies, NGOs and interested public" },
  structure: { es: "Estructura", en: "Structure" },
  structureMain: { 
    es: "Sesiones plenarias, talleres temáticos, visitas de estudio", 
    en: "Plenary sessions, thematic workshops, study visits" 
  },
  structureOther: { 
    es: "Conversaciones, almuerzos y cena de conferencia", 
    en: "Conversations, lunches and conference dinner" 
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es");

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
