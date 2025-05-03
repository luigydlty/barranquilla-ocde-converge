
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-barranquilla-blue">
            {t("contact")}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t("contactDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    {t("name")}
                  </label>
                  <Input 
                    id="name" 
                    placeholder={t("yourName")} 
                    className="w-full text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    {t("email")} *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t("yourEmail")} 
                    required 
                    className="w-full text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  {t("organization")}
                </label>
                <Input 
                  id="organization" 
                  placeholder={t("yourOrganization")} 
                  className="w-full text-sm md:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  {t("subject")} *
                </label>
                <Input 
                  id="subject" 
                  placeholder={t("messageSubject")} 
                  required 
                  className="w-full text-sm md:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  {t("message")} *
                </label>
                <Textarea 
                  id="message" 
                  placeholder={t("writeMessage")} 
                  rows={5}
                  required 
                  className="w-full text-sm md:text-base"
                />
              </div>
              
              <Button type="submit" className="bg-barranquilla-blue hover:bg-barranquilla-blue/90 text-white text-sm md:text-base">
                {t("sendMessage")}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between mt-6 lg:mt-0">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-barranquilla-blue">
                {t("contactInfo")}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-barranquilla-blue/10 p-2 rounded-full flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-barranquilla-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">{t("email")}</h4>
                    <p className="text-gray-600 break-words text-xs md:text-sm">ocde2025@barranquilla.gov.co</p>
                    <p className="text-gray-600 break-words text-xs md:text-sm">{t("pressEmail")}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-barranquilla-blue/10 p-2 rounded-full flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-barranquilla-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">{t("phone")}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">+57 5 3399999 ext. 1234</p>
                    <p className="text-gray-600 text-xs">{t("officeHours")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-barranquilla-blue/5 p-4 md:p-6 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                {t("faq")}
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-medium text-barranquilla-blue text-sm md:text-base">{t("faqRegistration")}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{t("faqRegistrationAnswer")}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-barranquilla-blue text-sm md:text-base">{t("faqSupport")}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{t("faqSupportAnswer")}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-barranquilla-blue text-sm md:text-base">{t("faqTranslation")}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{t("faqTranslationAnswer")}</p>
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
