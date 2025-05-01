
import { MapPin, Phone, Hotel, Airplay } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Venue = () => {
  return (
    <section id="venue" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-barranquilla-blue">
            Información Práctica
          </h2>
          <p className="text-gray-600">
            Todo lo que necesitas saber para tu participación en el Foro de Desarrollo Local de la OCDE en Barranquilla.
          </p>
        </div>

        <Tabs defaultValue="venue" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="venue" className="data-[state=active]:bg-barranquilla-blue data-[state=active]:text-white">
              <div className="flex flex-col items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Sedes</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="accommodation" className="data-[state=active]:bg-barranquilla-blue data-[state=active]:text-white">
              <div className="flex flex-col items-center gap-1">
                <Hotel className="h-4 w-4" />
                <span>Alojamiento</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="transport" className="data-[state=active]:bg-barranquilla-blue data-[state=active]:text-white">
              <div className="flex flex-col items-center gap-1">
                <Airplay className="h-4 w-4" />
                <span>Transporte</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="venue" className="mt-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 text-barranquilla-blue">
                Sedes del Evento
              </h3>
              
              <div className="space-y-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <MapPin className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-lg mb-2">Puerta de Oro - Centro de Eventos</h4>
                      <p className="text-gray-500 mb-4">Sede principal de todas las sesiones plenarias, talleres y exhibiciones.</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-barranquilla-red mt-0.5" />
                        <span>Vía 40 # 79B-06, Riomar, Barranquilla</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone className="h-5 w-5 text-barranquilla-red" />
                        <span>+57 5 3096633</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <MapPin className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-lg mb-2">Pabellón de Cristal</h4>
                      <p className="text-gray-500 mb-4">Sede de la cena de conferencia el 10 de julio.</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-barranquilla-red mt-0.5" />
                        <span>Dirección por confirmar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="accommodation" className="mt-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 text-barranquilla-blue">
                Sugerencias de Alojamiento
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Hotel Movich</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-barranquilla-blue/10 p-1 rounded text-barranquilla-blue font-medium text-sm">
                        Código de bloqueo
                      </div>
                      <span className="mt-0.5">OCDE 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-barranquilla-blue/10 p-1 rounded text-barranquilla-blue font-medium text-sm">
                        Contacto
                      </div>
                      <span className="mt-0.5">reservas.barranquilla@movichhotels.com / WhatsApp: +57 310 123 4567</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-barranquilla-blue/10 p-1 rounded text-barranquilla-blue font-medium text-sm">
                        Precios
                      </div>
                      <span className="mt-0.5">Desde $200 USD (sin IVA para extranjeros)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Hotel Crowne</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-barranquilla-blue/10 p-1 rounded text-barranquilla-blue font-medium text-sm">
                        Código de bloqueo
                      </div>
                      <span className="mt-0.5">OCDE 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-barranquilla-blue/10 p-1 rounded text-barranquilla-blue font-medium text-sm">
                        Contacto
                      </div>
                      <span className="mt-0.5">reservas.barranquilla@ihg.com / WhatsApp: +57 310 987 6543</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-barranquilla-blue/10 p-1 rounded text-barranquilla-blue font-medium text-sm">
                        Precios
                      </div>
                      <span className="mt-0.5">Desde $180 USD (sin IVA para extranjeros)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-barranquilla-yellow/10 p-4 rounded-lg border border-barranquilla-yellow/20 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Nota importante:</strong> La disponibilidad de habitaciones no está garantizada y puede ser 
                    limitada cerca de la fecha del evento. Recomendamos realizar su reserva con anticipación.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="transport" className="mt-0">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 text-barranquilla-blue">
                Información de Transporte
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3">Traslados desde el Aeropuerto</h4>
                  <p className="text-gray-600 mb-4">
                    El Aeropuerto Internacional Ernesto Cortissoz está ubicado a aproximadamente 30 minutos 
                    del centro de Barranquilla y las principales zonas hoteleras.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-600">
                      Se recomienda utilizar el servicio de taxis oficiales disponibles en el aeropuerto. 
                      El costo aproximado es de $20-25 USD hacia los principales hoteles de la ciudad.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3">Transporte durante el Evento</h4>
                  <p className="text-gray-600 mb-4">
                    Se proporcionará información detallada sobre el transporte para los participantes del foro 
                    entre las diferentes sedes y hoteles recomendados.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-600">
                      Para los eventos centrales en Puerta de Oro, se recomienda utilizar servicios de taxi desde 
                      los hoteles principales. Se proporcionará más información sobre puntos de recogida y horarios 
                      más cerca de la fecha del evento.
                    </p>
                  </div>
                </div>
                
                <div className="bg-barranquilla-blue/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Se proporcionará información más detallada sobre opciones de transporte a los participantes registrados 
                    a medida que se acerque la fecha del evento.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Venue;
