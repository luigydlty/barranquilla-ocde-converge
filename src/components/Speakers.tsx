
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
import { useLanguage } from '@/context/LanguageContext';

// Tipos para los ponentes
type Speaker = {
  id: number;
  name: string;
  position: {
    es: string;
    en: string;
  };
  organization: string;
  bio: {
    es: string;
    en: string;
  };
  image: string;
  topics?: {
    es: string[];
    en: string[];
  };
};

const Speakers = () => {
  const { t, language } = useLanguage();
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Datos de ejemplo de ponentes con traducciones
  const speakersData: Speaker[] = [
    {
      id: 1,
      name: "Dra. María Fernández",
      position: {
        es: "Directora de Desarrollo Económico",
        en: "Director of Economic Development"
      },
      organization: "OCDE",
      bio: {
        es: "La Dra. Fernández lidera iniciativas de desarrollo económico local en la OCDE. Con más de 15 años de experiencia en políticas públicas, ha asesorado a diversos gobiernos en estrategias de crecimiento inclusivo y sostenible.",
        en: "Dr. Fernández leads local economic development initiatives at the OECD. With more than 15 years of experience in public policy, she has advised various governments on inclusive and sustainable growth strategies."
      },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      topics: {
        es: ["Desarrollo económico local", "Innovación y transformación digital", "Colaboración público-privada"],
        en: ["Local economic development", "Innovation and digital transformation", "Public-private collaboration"]
      }
    },
    {
      id: 2,
      name: "Dr. Carlos Ramírez",
      position: {
        es: "Secretario de Planeación",
        en: "Secretary of Planning"
      },
      organization: "Alcaldía de Barranquilla",
      bio: {
        es: "El Dr. Ramírez ha sido fundamental en la transformación urbana de Barranquilla en los últimos 8 años. Su enfoque en la colaboración público-privada ha generado proyectos emblemáticos que han revitalizado la ciudad.",
        en: "Dr. Ramírez has been instrumental in Barranquilla's urban transformation over the past 8 years. His focus on public-private collaboration has generated flagship projects that have revitalized the city."
      },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      topics: {
        es: ["Planificación urbana", "Desarrollo sostenible", "Gestión pública"],
        en: ["Urban planning", "Sustainable development", "Public management"]
      }
    },
    {
      id: 3,
      name: "Ing. Ana Mendoza",
      position: {
        es: "Directora de Innovación Social",
        en: "Director of Social Innovation"
      },
      organization: "Fundación Desarrollo Sostenible",
      bio: {
        es: "La Ing. Mendoza es pionera en iniciativas de innovación social y economía circular en América Latina. Su trabajo ha sido reconocido con premios internacionales por su impacto en comunidades vulnerables.",
        en: "Eng. Mendoza is a pioneer in social innovation initiatives and circular economy in Latin America. Her work has been recognized with international awards for its impact on vulnerable communities."
      },
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      topics: {
        es: ["Economía circular", "Innovación social", "Desarrollo comunitario"],
        en: ["Circular economy", "Social innovation", "Community development"]
      }
    },
    {
      id: 4,
      name: "Prof. Robert Wilson",
      position: {
        es: "Catedrático de Economía Urbana",
        en: "Professor of Urban Economics"
      },
      organization: "Universidad de Oxford",
      bio: {
        es: "El Prof. Wilson es un reconocido académico especializado en el estudio de economías nocturnas y su impacto en el desarrollo local. Ha publicado extensamente sobre nuevos modelos económicos urbanos.",
        en: "Prof. Wilson is a renowned academic specializing in the study of night economies and their impact on local development. He has published extensively on new urban economic models."
      },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      topics: {
        es: ["Economía nocturna", "Desarrollo urbano", "Modelos económicos innovadores"],
        en: ["Night economy", "Urban development", "Innovative economic models"]
      }
    },
    {
      id: 5,
      name: "Dra. Luisa Gómez",
      position: {
        es: "Directora Ejecutiva",
        en: "Executive Director"
      },
      organization: "Red Latinoamericana de Ciudades Inteligentes",
      bio: {
        es: "La Dra. Gómez coordina proyectos de inteligencia artificial aplicada a la gestión urbana en ciudades de América Latina. Su enfoque en la inclusión digital ha permitido reducir brechas tecnológicas en la región.",
        en: "Dr. Gómez coordinates artificial intelligence projects applied to urban management in Latin American cities. Her focus on digital inclusion has helped reduce technological gaps in the region."
      },
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      topics: {
        es: ["Ciudades inteligentes", "Inteligencia artificial", "Inclusión digital"],
        en: ["Smart cities", "Artificial intelligence", "Digital inclusion"]
      }
    }
  ];

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setOpenDialog(true);
  };

  return (
    <section id="speakers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-darkPurple">
            {t("featuredSpeakers")}
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-custom-purple" />
            <p className="text-gray-600">
              {t("speakersDescription")}
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
                          <p className="text-white/80 text-sm">{speaker.position[language]}</p>
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
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
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
                        <h4 className="text-custom-purple font-semibold">{selectedSpeaker.position[language]}</h4>
                        <p className="text-custom-orange">{selectedSpeaker.organization}</p>
                      </div>
                      <div className="border-l-4 border-custom-pink pl-4 py-2">
                        <p className="text-gray-700">{selectedSpeaker.bio[language]}</p>
                      </div>
                      <div className="pt-2 pb-4">
                        <h4 className="font-semibold mb-2 text-custom-darkPurple">{t("speakerTopics")}:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {selectedSpeaker.topics && selectedSpeaker.topics[language].map((topic, index) => (
                            <li key={index} className="text-gray-700">{topic}</li>
                          ))}
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
