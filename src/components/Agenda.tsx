import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Agenda = () => {
  return <section id="agenda" className="section-padding bg-custom-darkPurple/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-darkPurple">Programa / Agenda</h2>
          <p className="text-gray-600">Una serie de actividades diseñadas para inspirar, conectar y promover el desarrollo local.</p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="day1" className="data-[state=active]:bg-custom-darkPurple data-[state=active]:text-white">
              <div className="text-center">
                <div className="font-bold">Día 1</div>
                <div className="text-sm opacity-90">8 Julio</div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-custom-darkPurple data-[state=active]:text-white">
              <div className="text-center">
                <div className="font-bold">Día 2</div>
                <div className="text-sm opacity-90">9 Julio</div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="day3" className="data-[state=active]:bg-custom-darkPurple data-[state=active]:text-white">
              <div className="text-center">
                <div className="font-bold">Día 3</div>
                <div className="text-sm opacity-90">10 Julio</div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="day4" className="data-[state=active]:bg-custom-darkPurple data-[state=active]:text-white">
              <div className="text-center">
                <div className="font-bold">Día 4</div>
                <div className="text-sm opacity-90">11 Julio</div>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-custom-pink/20">
              <h3 className="text-xl mb-4 text-custom-coral font-extrabold">
                Eventos Paralelos - 8 de Julio
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">09:00 - 12:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Visitas de Estudio: Inclusión Social</h4>
                  <p className="text-gray-600">Exploración de iniciativas locales para la inclusión social en Barranquilla.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">14:00 - 17:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Taller: Transformación de Lugares</h4>
                  <p className="text-gray-600">Análisis de casos exitosos de regeneración urbana y participación comunitaria.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">18:00 - 20:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Recepción de Bienvenida</h4>
                  <p className="text-gray-600">Evento de networking para participantes internacionales y locales.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="day2" className="mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-custom-pink/20">
              <h3 className="text-xl mb-4 text-custom-coral font-extrabold">
                Evento Principal - 9 de Julio
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">09:00 - 10:30</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Ceremonia de Apertura</h4>
                  <p className="text-gray-600">Inauguración oficial del foro con autoridades nacionales e internacionales.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">11:00 - 12:30</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Sesión Plenaria: Energía Verde y Desarrollo Local</h4>
                  <p className="text-gray-600">Debate sobre modelos exitosos de transición energética en territorios.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">13:00 - 14:30</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Almuerzo con Mercado de Iniciativas Locales</h4>
                  <p className="text-gray-600">Exposición de emprendimientos locales durante el almuerzo de networking.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">15:00 - 17:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Talleres Temáticos Paralelos</h4>
                  <p className="text-gray-600">Sesiones especializadas en economía del cuidado y marketing territorial.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="day3" className="mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-custom-pink/20">
              <h3 className="text-xl mb-4 text-custom-coral font-extrabold">
                Evento Principal - 10 de Julio
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">09:00 - 10:30</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Sesión Plenaria: Inclusión Laboral e Inteligencia Artificial</h4>
                  <p className="text-gray-600">Análisis de retos y oportunidades que presenta la IA para los mercados laborales locales.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">11:00 - 12:30</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Conversación: Liderazgo Femenino en el Desarrollo Local</h4>
                  <p className="text-gray-600">Panel con lideresas destacadas compartiendo experiencias y estrategias.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">13:00 - 14:30</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Almuerzo Temático: Economía Nocturna</h4>
                  <p className="text-gray-600">Presentación de iniciativas para potenciar la vida nocturna como motor económico.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">19:00 - 22:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Cena de Conferencia</h4>
                  <p className="text-gray-600">Evento formal en el Pabellón de Cristal con charla magistral.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="day4" className="mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-custom-pink/20">
              <h3 className="text-xl mb-4 text-custom-coral font-extrabold">
                Eventos Paralelos - 11 de Julio
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">09:00 - 12:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Visitas de Estudio: Patrimonio Cultural</h4>
                  <p className="text-gray-600">Recorrido por sitios emblemáticos de la cultura caribeña en Barranquilla.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">14:00 - 16:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Mesa Redonda: Colaboración Público-Privada</h4>
                  <p className="text-gray-600">Sesión sobre modelos exitosos de alianzas para el desarrollo territorial.</p>
                </div>
                
                <div className="border-l-4 border-custom-pink pl-4 py-1">
                  <div className="text-sm text-gray-500 mb-1">16:30 - 18:00</div>
                  <h4 className="mb-1 text-custom-purple font-extrabold">Ceremonia de Clausura</h4>
                  <p className="text-gray-600">Conclusiones finales y anuncio de la próxima sede del foro.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            * La agenda está sujeta a cambios. Se irá actualizando con más detalles sobre ponentes y 
            actividades específicas a medida que se acerque la fecha del evento.
          </p>
        </div>
      </div>
    </section>;
};
export default Agenda;