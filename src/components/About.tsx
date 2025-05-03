
import { Calendar, MapPin, Users, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-custom-pink/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-custom-darkPurple">
            {t("aboutForum")}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t("aboutDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm border border-custom-pink/20">
            <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-custom-purple font-extrabold">
              {t("eventImportance")}
            </h3>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
              {t("eventImportanceP1")}
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              {t("eventImportanceP2")}
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm border border-custom-pink/20">
            <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-custom-purple font-extrabold">
              {t("mainTopics")}
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange flex-shrink-0">•</div>
                <span className="text-sm md:text-base">{t("topic1")}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange flex-shrink-0">•</div>
                <span className="text-sm md:text-base">{t("topic2")}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange flex-shrink-0">•</div>
                <span className="text-sm md:text-base">{t("topic3")}</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-custom-orange flex-shrink-0">•</div>
                <span className="text-sm md:text-base">{t("topic4")}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-3 md:mb-4">
              <Calendar className="h-6 w-6 md:h-8 md:w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple text-sm md:text-base">{t("date")}</h3>
            <p className="text-gray-600 text-xs md:text-sm">{t("dateRange")}</p>
            <p className="text-xs text-gray-500">{t("mainEvent")}</p>
            <p className="text-xs text-gray-500">{t("parallelEvents")}</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-3 md:mb-4">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple text-sm md:text-base">{t("mainVenue")}</h3>
            <p className="text-gray-600 text-xs md:text-sm">{t("venuePlace")}</p>
            <p className="text-xs text-gray-500">{t("venueAddress")}</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-3 md:mb-4">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple text-sm md:text-base">{t("audience")}</h3>
            <p className="text-gray-600 text-xs md:text-sm">{t("audienceMain")}</p>
            <p className="text-xs text-gray-500">{t("audienceOthers")}</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-sm border border-custom-pink/20">
            <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-custom-pink/10 mb-3 md:mb-4">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-custom-purple" />
            </div>
            <h3 className="font-bold mb-2 text-custom-darkPurple text-sm md:text-base">{t("structure")}</h3>
            <p className="text-gray-600 text-xs md:text-sm">{t("structureMain")}</p>
            <p className="text-xs text-gray-500">{t("structureOther")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
