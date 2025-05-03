
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Registration = () => {
  const { t } = useLanguage();
  
  return (
    <section id="registration" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(166, 88, 161, 0.9), rgba(166, 88, 161, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/lovable-uploads/fedc6e21-dd9b-45fb-bb0c-847feb94796e.png" alt={t("aerialView")} className="w-full h-full object-cover" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("registration")}</h2>
            <p className="text-white/90 mb-6 text-lg font-bold">
              {t("registrationIntro")}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold">{t("importantDates")}</h3>
                  <p className="opacity-80 text-sm font-extrabold">{t("registrationOpens")}</p>
                  <p className="opacity-80 text-sm font-extrabold">{t("registrationCloses")}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold">{t("participants")}</h3>
                  <p className="opacity-80 text-sm font-extrabold">{t("limitedCapacity")}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-white/90 mb-6">
              <p className="font-extrabold">
                {t("registrationContact")}
              </p>
            </div>
            
            <Button className="bg-custom-orange hover:bg-custom-orange/90 text-white">
              {t("preRegistration")}
            </Button>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-custom-purple">{t("registrationInfo")}</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">{t("participationModes")}</h4>
                <div className="border-l-4 border-custom-orange pl-3 py-1">
                  <p className="text-gray-600">
                    {t("participationModesDesc")}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{t("registrationFees")}</h4>
                <div className="border-l-4 border-custom-orange pl-3 py-1">
                  <p className="text-gray-600">
                    {t("registrationFeesDesc")}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{t("officialDelegations")}</h4>
                <div className="border-l-4 border-custom-orange pl-3 py-1">
                  <p className="text-gray-600">
                    {t("officialDelegationsDesc")}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-custom-pink/10 p-4 rounded-lg mt-6">
              <p className="text-sm text-gray-600">
                <strong>{t("note")}:</strong> {t("registrationNote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
