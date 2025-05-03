
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
  },
  
  // Speakers Section
  featuredSpeakers: { es: "Ponentes Destacados", en: "Featured Speakers" },
  speakersDescription: {
    es: "Conoce a los expertos que compartirán sus conocimientos y experiencias",
    en: "Meet the experts who will share their knowledge and experiences"
  },
  speakerTopics: { es: "Temas que abordará", en: "Topics to be addressed" },

  // Registration Section
  registrationIntro: {
    es: "El registro para el Foro de Desarrollo Local de la OCDE Barranquilla 2025 se abrirá próximamente. Regístrese para asegurar su participación en este importante evento internacional.",
    en: "Registration for the OECD Local Development Forum Barranquilla 2025 will open soon. Register to ensure your participation in this important international event."
  },
  importantDates: { es: "Fechas importantes", en: "Important dates" },
  registrationOpens: { es: "Apertura de registro: Enero 2025", en: "Registration opens: January 2025" },
  registrationCloses: { es: "Cierre de registro: Junio 2025", en: "Registration closes: June 2025" },
  participants: { es: "Participantes", en: "Participants" },
  limitedCapacity: { es: "Plazas limitadas para asegurar una experiencia de calidad", en: "Limited capacity to ensure a quality experience" },
  registrationContact: {
    es: "Para consultas sobre el proceso de registro o para manifestar su interés en participar, puede contactar con el equipo organizador a través del formulario de contacto.",
    en: "For inquiries about the registration process or to express your interest in participating, you can contact the organizing team through the contact form."
  },
  preRegistration: { es: "Pre-registro / Expresar interés", en: "Pre-registration / Express interest" },
  registrationInfo: { es: "Información de Registro", en: "Registration Information" },
  participationModes: { es: "Modalidades de Participación", en: "Participation Modes" },
  participationModesDesc: {
    es: "El foro ofrece diferentes opciones de participación adaptadas a las necesidades de los asistentes, incluyendo acceso a todas las sesiones o solo a eventos específicos.",
    en: "The forum offers different participation options adapted to the needs of attendees, including access to all sessions or only to specific events."
  },
  registrationFees: { es: "Tarifas de Inscripción", en: "Registration Fees" },
  registrationFeesDesc: {
    es: "Las tarifas varían según el tipo de participante (representantes gubernamentales, académicos, sector privado) y serán publicadas próximamente.",
    en: "Fees vary according to the type of participant (government representatives, academics, private sector) and will be published soon."
  },
  officialDelegations: { es: "Delegaciones Oficiales", en: "Official Delegations" },
  officialDelegationsDesc: {
    es: "Las delegaciones oficiales deben contactar directamente con la organización para coordinar su participación y aspectos logísticos especiales.",
    en: "Official delegations should contact the organization directly to coordinate their participation and special logistical aspects."
  },
  note: { es: "Nota", en: "Note" },
  registrationNote: {
    es: "El registro formal estará disponible a través de este sitio web a partir de enero de 2025. Toda la información necesaria será publicada en esta sección.",
    en: "Formal registration will be available through this website starting in January 2025. All necessary information will be published in this section."
  },
  
  // Contact Section
  contactDesc: {
    es: "Para consultas relacionadas con el Foro de Desarrollo Local de la OCDE Barranquilla 2025, por favor utilice el formulario a continuación o contáctenos directamente.",
    en: "For inquiries related to the OECD Local Development Forum Barranquilla 2025, please use the form below or contact us directly."
  },
  name: { es: "Nombre", en: "Name" },
  yourName: { es: "Su nombre", en: "Your name" },
  email: { es: "Correo Electrónico", en: "Email" },
  yourEmail: { es: "Su correo electrónico", en: "Your email" },
  organization: { es: "Organización", en: "Organization" },
  yourOrganization: { es: "Su organización o institución", en: "Your organization or institution" },
  subject: { es: "Asunto", en: "Subject" },
  messageSubject: { es: "Asunto de su mensaje", en: "Subject of your message" },
  message: { es: "Mensaje", en: "Message" },
  writeMessage: { es: "Escriba su mensaje aquí", en: "Write your message here" },
  sendMessage: { es: "Enviar Mensaje", en: "Send Message" },
  contactInfo: { es: "Información de Contacto", en: "Contact Information" },
  pressEmail: { es: "prensa.ocde2025@barranquilla.gov.co (Para prensa)", en: "prensa.ocde2025@barranquilla.gov.co (For press)" },
  phone: { es: "Teléfono", en: "Phone" },
  officeHours: { es: "De lunes a viernes, 8:00 AM - 5:00 PM (Hora de Colombia)", en: "Monday to Friday, 8:00 AM - 5:00 PM (Colombia Time)" },
  faq: { es: "Preguntas Frecuentes", en: "Frequently Asked Questions" },
  faqRegistration: { es: "¿Cuál es el plazo para registrarse?", en: "What is the deadline to register?" },
  faqRegistrationAnswer: {
    es: "El registro estará abierto hasta junio de 2025, pero recomendamos hacerlo con anticipación ya que las plazas son limitadas.",
    en: "Registration will be open until June 2025, but we recommend doing it in advance as places are limited."
  },
  faqSupport: { es: "¿Existe algún apoyo para la asistencia?", en: "Is there any support for attendance?" },
  faqSupportAnswer: {
    es: "Para información sobre posibles becas o apoyos para asistir al foro, por favor contacte directamente a través del correo electrónico proporcionado.",
    en: "For information about possible scholarships or support to attend the forum, please contact directly through the provided email."
  },
  faqTranslation: { es: "¿Se proveerá traducción simultánea?", en: "Will simultaneous translation be provided?" },
  faqTranslationAnswer: {
    es: "Sí, las sesiones principales contarán con traducción simultánea en español, inglés y francés.",
    en: "Yes, the main sessions will have simultaneous translation in Spanish, English and French."
  },

  // Footer
  forumTitle: { es: "Foro de Desarrollo Local de la OCDE", en: "OECD Local Development Forum" },
  quickLinks: { es: "Enlaces Rápidos", en: "Quick Links" },
  cityHall: { es: "Alcaldía de Barranquilla", en: "Barranquilla City Hall" },
  organizers: { es: "Organizadores", en: "Organizers" },
  allRightsReserved: { es: "Todos los derechos reservados", en: "All rights reserved" },
  privacyPolicy: { es: "Políticas de Privacidad", en: "Privacy Policy" },
  termsOfUse: { es: "Términos de Uso", en: "Terms of Use" },
  
  // Additional translations
  aerialView: { es: "Vista aérea de Barranquilla", en: "Aerial view of Barranquilla" }
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
