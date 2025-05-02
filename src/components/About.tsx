
import { Calendar, MapPin, Users, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-custom-pink/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-darkPurple">
            {t("aboutForum")}
          </h2>
          <p className="text-gray-600">
            {t("aboutDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-custom-pink/20">
            <h3 className="text-xl mb-4 text-custom-purple font-extrabold">
              {t("eventImportance")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("eventImportanceP1")}
            </p>
            <p className="text-gray-600">
              {t("eventImportanceP2")}
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-custom-pink/20">
            <h3 className="text-xl mb-4 text-custom-purple font-extrabold">
              {t("mainTopics")}
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>{t("topic1")}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>{t("topic2")}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>{t("topic3")}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange">•</div>
                <span>{t("topic4")}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <Calendar className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">{t("date")}</h3>
            <p className="text-gray-600">{t("dateRange")}</p>
            <p className="text-sm text-gray-500">{t("mainEvent")}</p>
            <p className="text-sm text-gray-500">{t("parallelEvents")}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <MapPin className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">{t("mainVenue")}</h3>
            <p className="text-gray-600">{t("venuePlace")}</p>
            <p className="text-sm text-gray-500">{t("venueAddress")}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <Users className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">{t("audience")}</h3>
            <p className="text-gray-600">{t("audienceMain")}</p>
            <p className="text-sm text-gray-500">{t("audienceOthers")}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-4">
              <FileText className="h-8 w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple">{t("structure")}</h3>
            <p className="text-gray-600">{t("structureMain")}</p>
            <p className="text-sm text-gray-500">{t("structureOther")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
