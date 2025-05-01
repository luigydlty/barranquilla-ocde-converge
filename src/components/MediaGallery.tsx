
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Video, GalleryVertical, GalleryHorizontal } from "lucide-react";

// Tipos para los medios
type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
};

// Datos de ejemplo de imágenes y videos
const mediaData: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80',
    title: 'Vista panorámica de Barranquilla',
    description: 'La hermosa ciudad de Barranquilla desde una vista aérea'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80',
    title: 'Sesión de trabajo OCDE',
    description: 'Participantes en una de las sesiones de trabajo del Foro OCDE'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&q=80',
    title: 'Evento cultural',
    description: 'Presentación cultural durante el foro anterior'
  },
  {
    id: 4,
    type: 'video',
    src: 'https://player.vimeo.com/video/641254447',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    title: 'Presentación Foro OCDE 2025',
    description: 'Video promocional del próximo foro en Barranquilla'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://player.vimeo.com/video/307303106',
    thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
    title: 'Entrevista con director de la OCDE',
    description: 'Entrevista sobre los objetivos del foro'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&q=80',
    title: 'Talleres participativos',
    description: 'Participantes colaborando en las mesas de trabajo'
  },
];

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleMediaClick = (media: MediaItem) => {
    setSelectedMedia(media);
    setOpenDialog(true);
  };

  const images = mediaData.filter(item => item.type === 'image');
  const videos = mediaData.filter(item => item.type === 'video');

  return (
    <section id="media" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-darkPurple">
            Galería de Medios
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <GalleryHorizontal className="h-5 w-5 text-custom-purple" />
            <p className="text-gray-600">
              Explora nuestra colección de imágenes y videos relacionados con el foro
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8 bg-white">
            <TabsTrigger value="all" className="data-[state=active]:bg-custom-purple data-[state=active]:text-white">
              <div className="flex flex-col items-center gap-1">
                <GalleryHorizontal className="h-4 w-4" />
                <span>Todo</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="images" className="data-[state=active]:bg-custom-purple data-[state=active]:text-white">
              <div className="flex flex-col items-center gap-1">
                <Image className="h-4 w-4" />
                <span>Imágenes</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-custom-purple data-[state=active]:text-white">
              <div className="flex flex-col items-center gap-1">
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaData.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleMediaClick(item)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-custom-darkPurple/30">
                          <div className="rounded-full bg-white/80 p-3">
                            <Video className="h-8 w-8 text-custom-purple" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-custom-darkPurple">{item.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="images" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleMediaClick(item)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-custom-darkPurple">{item.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleMediaClick(item)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={item.thumbnail || ''}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-custom-darkPurple/30">
                        <div className="rounded-full bg-white/80 p-3">
                          <Video className="h-8 w-8 text-custom-purple" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-custom-darkPurple">{item.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-custom-orange hover:bg-custom-orange/90 text-white">
            Ver Galería Completa
          </Button>
        </div>

        {/* Media Viewer Modal */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="sm:max-w-4xl">
            {selectedMedia && (
              <div className="space-y-4">
                {selectedMedia.type === 'image' ? (
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <div className="relative pt-[56.25%]">
                    <iframe 
                      src={selectedMedia.src} 
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      title={selectedMedia.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-custom-darkPurple">{selectedMedia.title}</h3>
                  {selectedMedia.description && (
                    <p className="text-gray-600 mt-2">{selectedMedia.description}</p>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MediaGallery;
