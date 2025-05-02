
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
  registerNow: { es: "Regístrate Ahora", en: "Register Now" }
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
