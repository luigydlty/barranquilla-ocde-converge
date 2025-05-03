
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-barranquilla-blue">
            Contacto
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Para consultas relacionadas con el Foro de Desarrollo Local de la OCDE Barranquilla 2025, 
            por favor utilice el formulario a continuación o contáctenos directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Su nombre" 
                    className="w-full text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Su correo electrónico" 
                    required 
                    className="w-full text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Organización
                </label>
                <Input 
                  id="organization" 
                  placeholder="Su organización o institución" 
                  className="w-full text-sm md:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <Input 
                  id="subject" 
                  placeholder="Asunto de su mensaje" 
                  required 
                  className="w-full text-sm md:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Escriba su mensaje aquí" 
                  rows={5}
                  required 
                  className="w-full text-sm md:text-base"
                />
              </div>
              
              <Button type="submit" className="bg-barranquilla-blue hover:bg-barranquilla-blue/90 text-white text-sm md:text-base">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between mt-6 lg:mt-0">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-barranquilla-blue">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-barranquilla-blue/10 p-2 rounded-full flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-barranquilla-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">Correo Electrónico</h4>
                    <p className="text-gray-600 break-words text-xs md:text-sm">ocde2025@barranquilla.gov.co</p>
                    <p className="text-gray-600 break-words text-xs md:text-sm">prensa.ocde2025@barranquilla.gov.co (Para prensa)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-barranquilla-blue/10 p-2 rounded-full flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-barranquilla-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">Teléfono</h4>
                    <p className="text-gray-600 text-xs md:text-sm">+57 5 3399999 ext. 1234</p>
                    <p className="text-gray-600 text-xs">De lunes a viernes, 8:00 AM - 5:00 PM (Hora de Colombia)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-barranquilla-blue/5 p-4 md:p-6 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                Preguntas Frecuentes
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-medium text-barranquilla-blue text-sm md:text-base">¿Cuál es el plazo para registrarse?</h4>
                  <p className="text-gray-600 text-xs md:text-sm">El registro estará abierto hasta junio de 2025, pero recomendamos hacerlo con anticipación ya que las plazas son limitadas.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-barranquilla-blue text-sm md:text-base">¿Existe algún apoyo para la asistencia?</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Para información sobre posibles becas o apoyos para asistir al foro, por favor contacte directamente a través del correo electrónico proporcionado.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-barranquilla-blue text-sm md:text-base">¿Se proveerá traducción simultánea?</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Sí, las sesiones principales contarán con traducción simultánea en español, inglés y francés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
