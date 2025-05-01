
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users } from 'lucide-react';

// Tipos para los ponentes
type Speaker = {
  id: number;
  name: string;
  position: string;
  organization: string;
  bio: string;
  image: string;
};

// Datos de ejemplo de ponentes
const speakersData: Speaker[] = [
  {
    id: 1,
    name: "Dra. María Fernández",
    position: "Directora de Desarrollo Económico",
    organization: "OCDE",
    bio: "La Dra. Fernández lidera iniciativas de desarrollo económico local en la OCDE. Con más de 15 años de experiencia en políticas públicas, ha asesorado a diversos gobiernos en estrategias de crecimiento inclusivo y sostenible.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Dr. Carlos Ramírez",
    position: "Secretario de Planeación",
    organization: "Alcaldía de Barranquilla",
    bio: "El Dr. Ramírez ha sido fundamental en la transformación urbana de Barranquilla en los últimos 8 años. Su enfoque en la colaboración público-privada ha generado proyectos emblemáticos que han revitalizado la ciudad.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Ing. Ana Mendoza",
    position: "Directora de Innovación Social",
    organization: "Fundación Desarrollo Sostenible",
    bio: "La Ing. Mendoza es pionera en iniciativas de innovación social y economía circular en América Latina. Su trabajo ha sido reconocido con premios internacionales por su impacto en comunidades vulnerables.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Prof. Robert Wilson",
    position: "Catedrático de Economía Urbana",
    organization: "Universidad de Oxford",
    bio: "El Prof. Wilson es un reconocido académico especializado en el estudio de economías nocturnas y su impacto en el desarrollo local. Ha publicado extensamente sobre nuevos modelos económicos urbanos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Dra. Luisa Gómez",
    position: "Directora Ejecutiva",
    organization: "Red Latinoamericana de Ciudades Inteligentes",
    bio: "La Dra. Gómez coordina proyectos de inteligencia artificial aplicada a la gestión urbana en ciudades de América Latina. Su enfoque en la inclusión digital ha permitido reducir brechas tecnológicas en la región.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setOpenDialog(true);
  };

  return (
    <section id="speakers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-darkPurple">
            Ponentes Destacados
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-custom-purple" />
            <p className="text-gray-600">
              Conoce a los expertos que compartirán sus conocimientos y experiencias
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {speakersData.map((speaker) => (
              <CarouselItem key={speaker.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card 
                    className="overflow-hidden cursor-pointer border-2 border-transparent hover:border-custom-purple transition-all duration-300"
                    onClick={() => handleSpeakerClick(speaker)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-custom-darkPurple/90 to-transparent p-6">
                          <h3 className="font-bold text-xl text-white">{speaker.name}</h3>
                          <p className="text-white/80 text-sm">{speaker.position}</p>
                          <p className="text-custom-pink font-medium mt-1">{speaker.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious 
              className="static translate-y-0 bg-custom-pink hover:bg-custom-purple text-white"
            />
            <CarouselNext 
              className="static translate-y-0 bg-custom-pink hover:bg-custom-purple text-white"
            />
          </div>
        </Carousel>

        {/* Speaker Detail Modal */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="sm:max-w-2xl">
            {selectedSpeaker && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-custom-darkPurple">
                    {selectedSpeaker.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                  <div className="md:col-span-1">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={selectedSpeaker.image} 
                        alt={selectedSpeaker.name}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-custom-purple font-semibold">{selectedSpeaker.position}</h4>
                        <p className="text-custom-orange">{selectedSpeaker.organization}</p>
                      </div>
                      <div className="border-l-4 border-custom-pink pl-4 py-2">
                        <p className="text-gray-700">{selectedSpeaker.bio}</p>
                      </div>
                      <div className="pt-2">
                        <h4 className="font-semibold mb-2 text-custom-darkPurple">Temas que abordará:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Desarrollo económico local</li>
                          <li>Innovación y transformación digital</li>
                          <li>Colaboración público-privada</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Speakers;
