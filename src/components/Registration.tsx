
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

const Registration = () => {
  return (
    <section id="registration" className="section-padding relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(166, 88, 161, 0.9), rgba(166, 88, 161, 0.8))',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/lovable-uploads/fedc6e21-dd9b-45fb-bb0c-847feb94796e.png" 
          alt="Vista aérea de Barranquilla" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Registro</h2>
            <p className="text-white/90 mb-6 text-lg">
              El registro para el Foro de Desarrollo Local de la OCDE Barranquilla 2025 
              se abrirá próximamente. Regístrese para asegurar su participación en este 
              importante evento internacional.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Fechas importantes</h3>
                  <p className="opacity-80 text-sm">Apertura de registro: Enero 2025</p>
                  <p className="opacity-80 text-sm">Cierre de registro: Junio 2025</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Participantes</h3>
                  <p className="opacity-80 text-sm">Plazas limitadas para asegurar una experiencia de calidad</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-white/90 mb-6">
              <p>
                Para consultas sobre el proceso de registro o para manifestar su interés en 
                participar, puede contactar con el equipo organizador a través del formulario 
                de contacto.
              </p>
            </div>
            
            <Button className="bg-custom-orange hover:bg-custom-orange/90 text-white">
              Pre-registro / Expresar interés
            </Button>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-custom-purple">Información de Registro</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Modalidades de Participación</h4>
                <div className="border-l-4 border-custom-orange pl-3 py-1">
                  <p className="text-gray-600">
                    El foro ofrece diferentes opciones de participación adaptadas a las necesidades de 
                    los asistentes, incluyendo acceso a todas las sesiones o solo a eventos específicos.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Tarifas de Inscripción</h4>
                <div className="border-l-4 border-custom-orange pl-3 py-1">
                  <p className="text-gray-600">
                    Las tarifas varían según el tipo de participante (representantes gubernamentales, 
                    académicos, sector privado) y serán publicadas próximamente.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Delegaciones Oficiales</h4>
                <div className="border-l-4 border-custom-orange pl-3 py-1">
                  <p className="text-gray-600">
                    Las delegaciones oficiales deben contactar directamente con la organización 
                    para coordinar su participación y aspectos logísticos especiales.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-custom-pink/10 p-4 rounded-lg mt-6">
              <p className="text-sm text-gray-600">
                <strong>Nota:</strong> El registro formal estará disponible a través de este sitio web 
                a partir de enero de 2025. Toda la información necesaria será publicada en esta sección.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
