
import { MapPin, Phone, Hotel, Airplay } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Venue = () => {
  return <section id="venue" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-custom-purple">
            Información Práctica
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Todo lo que necesitas saber para tu participación en el Foro de Desarrollo Local de la OCDE en Barranquilla.
          </p>
        </div>

        <Tabs defaultValue="venue" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-6 md:mb-8 w-full">
            <TabsTrigger value="venue" className="data-[state=active]:bg-custom-purple data-[state=active]:text-white py-1 px-2 md:py-2 md:px-3">
              <div className="flex flex-col items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-xs md:text-sm">Sedes</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="accommodation" className="data-[state=active]:bg-custom-purple data-[state=active]:text-white py-1 px-2 md:py-2 md:px-3">
              <div className="flex flex-col items-center gap-1">
                <Hotel className="h-4 w-4" />
                <span className="text-xs md:text-sm">Alojamiento</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="transport" className="data-[state=active]:bg-custom-purple data-[state=active]:text-white py-1 px-2 md:py-2 md:px-3">
              <div className="flex flex-col items-center gap-1">
                <Airplay className="h-4 w-4" />
                <span className="text-xs md:text-sm">Transporte</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="venue" className="mt-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-custom-purple font-extrabold">
                Sedes del Evento
              </h3>
              
              <div className="space-y-4 md:space-y-8">
                <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="w-full md:w-1/3 bg-custom-purple/10 rounded-lg h-36 md:h-48 flex items-center justify-center">
                      <MapPin className="h-8 w-8 md:h-10 md:w-10 text-custom-purple" />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h4 className="font-bold text-base md:text-lg mb-2">Puerta de Oro - Centro de Eventos</h4>
                      <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">Sede principal de todas las sesiones plenarias, talleres y exhibiciones.</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-custom-orange mt-0.5 flex-shrink-0" />
                        <span className="break-words text-sm md:text-base">Vía 40 # 79B-06, Riomar, Barranquilla</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone className="h-5 w-5 text-custom-orange flex-shrink-0" />
                        <span className="break-words text-sm md:text-base">+57 5 3096633</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="w-full md:w-1/3 bg-custom-purple/10 rounded-lg h-36 md:h-48 flex items-center justify-center">
                      <MapPin className="h-8 w-8 md:h-10 md:w-10 text-custom-purple" />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h4 className="font-bold text-base md:text-lg mb-2">Pabellón de Cristal</h4>
                      <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">Sede de la cena de conferencia el 10 de julio.</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-custom-orange mt-0.5 flex-shrink-0" />
                        <span className="break-words text-sm md:text-base">Malecón Puerta de Oro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="accommodation" className="mt-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-custom-purple font-extrabold">
                Sugerencias de Alojamiento
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-base md:text-lg mb-3">Hotel Movich</h4>
                  <ul className="space-y-3">
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="bg-custom-purple/10 p-1 rounded text-custom-purple font-medium text-xs md:text-sm min-w-fit flex-shrink-0">
                        Código de bloqueo
                      </div>
                      <span className="break-words text-sm md:text-base">OCDE 2025</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="bg-custom-purple/10 p-1 rounded text-custom-purple font-medium text-xs md:text-sm min-w-fit flex-shrink-0">
                        Contacto
                      </div>
                      <span className="break-words text-sm md:text-base">reservas.barranquilla@movichhotels.com / WhatsApp: +57 310 123 4567</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="bg-custom-purple/10 p-1 rounded text-custom-purple font-medium text-xs md:text-sm min-w-fit flex-shrink-0">
                        Precios
                      </div>
                      <span className="break-words text-sm md:text-base">Desde $200 USD (sin IVA para extranjeros)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-base md:text-lg mb-3">Hotel Crowne</h4>
                  <ul className="space-y-3">
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="bg-custom-purple/10 p-1 rounded text-custom-purple font-medium text-xs md:text-sm min-w-fit flex-shrink-0">
                        Código de bloqueo
                      </div>
                      <span className="break-words text-sm md:text-base">OCDE 2025</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="bg-custom-purple/10 p-1 rounded text-custom-purple font-medium text-xs md:text-sm min-w-fit flex-shrink-0">
                        Contacto
                      </div>
                      <span className="break-words text-sm md:text-base">reservas.barranquilla@ihg.com / WhatsApp: +57 310 987 6543</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="bg-custom-purple/10 p-1 rounded text-custom-purple font-medium text-xs md:text-sm min-w-fit flex-shrink-0">
                        Precios
                      </div>
                      <span className="break-words text-sm md:text-base">Desde $180 USD (sin IVA para extranjeros)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-custom-orange/10 p-3 md:p-4 rounded-lg border border-custom-orange/20 mt-3 md:mt-4">
                  <p className="text-xs md:text-sm text-gray-600">
                    <strong>Nota importante:</strong> La disponibilidad de habitaciones no está garantizada y puede ser 
                    limitada cerca de la fecha del evento. Recomendamos realizar su reserva con anticipación.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="transport" className="mt-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 md:p-6">
              <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-custom-purple font-extrabold">
                Información de Transporte
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Traslados desde el Aeropuerto</h4>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    El Aeropuerto Internacional Ernesto Cortissoz está ubicado a aproximadamente 30 minutos 
                    del centro de Barranquilla y las principales zonas hoteleras.
                  </p>
                  <div className="bg-white p-3 md:p-4 rounded-lg">
                    <p className="text-gray-600 text-sm md:text-base">
                      Se recomienda utilizar el servicio de taxis oficiales disponibles en el aeropuerto. 
                      El costo aproximado es de $20-25 USD hacia los principales hoteles de la ciudad.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Transporte durante el Evento</h4>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    Se proporcionará información detallada sobre el transporte para los participantes del foro 
                    entre las diferentes sedes y hoteles recomendados.
                  </p>
                  <div className="bg-white p-3 md:p-4 rounded-lg">
                    <p className="text-gray-600 text-sm md:text-base">
                      Para los eventos centrales en Puerta de Oro, se recomienda utilizar servicios de taxi desde 
                      los hoteles principales. Se proporcionará más información sobre puntos de recogida y horarios 
                      más cerca de la fecha del evento.
                    </p>
                  </div>
                </div>
                
                <div className="bg-custom-purple/10 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-600">
                    Se proporcionará información más detallada sobre opciones de transporte a los participantes registrados 
                    a medida que se acerque la fecha del evento.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};
export default Venue;
