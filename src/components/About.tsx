import { Calendar, MapPin, Users, FileText } from 'lucide-react';
const About = () => {
  return <section id="about" className="section-padding bg-gradient-to-b from-white to-custom-pink/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-darkPurple">
            Sobre el Foro
          </h2>
          <p className="text-gray-600">
            El Foro de Desarrollo Local de la OCDE es un evento internacional que reúne a líderes para 
            compartir experiencias y estrategias innovadoras para el desarrollo territorial sostenible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-custom-pink/20">
            <h3 className="text-xl mb-4 text-custom-purple font-extrabold">
              Importancia del Evento
            </h3>
            <p className="text-gray-600 mb-4">
              El foro reúne a responsables políticos, expertos y líderes de diversos sectores 
              para discutir estrategias innovadoras que impulsen el desarrollo local, promuevan 
              la inclusión social y fortalezcan las economías territoriales.
            </p>
            <p className="text-gray-600">
              Como sede del evento, Barranquilla representa un ejemplo destacado de transformación 
              urbana y desarrollo económico en América Latina, con una valiosa experiencia en 
              colaboración público-privada, diversificación económica e inclusión social.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-custom-pink/20">
            <h3 className="text-xl mb-4 text-custom-purple font-extrabold">
              Temas Principales
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>Nuevos impulsores de transformaciones económicas locales (energía verde, economía del cuidado)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>Aumento de la presencia global de territorios (grandes eventos, marketing territorial)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>Fomento de la inclusión laboral e inteligencia artificial</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>Economía nocturna y liderazgo femenino en desarrollo local</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <Calendar className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">Fecha</h3>
            <p className="text-gray-600">8 al 11 de julio de 2025</p>
            <p className="text-sm text-gray-500">Evento principal: 9 y 10 de julio</p>
            <p className="text-sm text-gray-500">Eventos paralelos: 8 y 11 de julio</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <MapPin className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">Sede Principal</h3>
            <p className="text-gray-600">Puerta de Oro - Centro de Eventos</p>
            <p className="text-sm text-gray-500">Vía 40 # 79B-06, Riomar, Barranquilla</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <Users className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">Audiencia</h3>
            <p className="text-gray-600">Responsables políticos, agencias de desarrollo económico, innovadores sociales</p>
            <p className="text-sm text-gray-500">Empresas, ONG y público interesado</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <FileText className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">Estructura</h3>
            <p className="text-gray-600">Sesiones plenarias, talleres temáticos, visitas de estudio</p>
            <p className="text-sm text-gray-500">Conversaciones, almuerzos y cena de conferencia</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;