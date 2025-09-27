import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useI18n } from '@/contexts/I18nContext';

const Contact = () => {
  const { translations } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:ahmedhassanshehata551@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: translations.contact.methods.email,
      value: "ahmedhassanshehata551@gmail.com",
      link: "mailto:ahmedhassanshehata551@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: translations.contact.methods.phone,
      value: "01554300351 / 01208778686",
      link: "tel:+201554300351",
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: translations.contact.methods.location,
      value: translations.hero.location,
      link: "#",
      color: "primary-glow"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/ahmed-hassan-shehata",
      color: "primary"
    },
    {
      name: "GitHub", 
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/ashmawymidxd",
      color: "accent"
    },
    {
      name: "Telegram",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://t.me/G1_ahmed_hassan",
      color: "primary-glow"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {translations.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{translations.contact.formTitle}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {translations.contact.form.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder={translations.contact.form.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {translations.contact.form.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder={translations.contact.form.emailPlaceholder}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {translations.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder={translations.contact.form.subjectPlaceholder}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={translations.contact.form.messagePlaceholder}
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="w-5 h-5 mr-2" />
                {translations.contact.form.sendMessage}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">{translations.contact.getInTouchTitle}</h3>
              
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-card p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${method.color}/10 flex items-center justify-center text-${method.color} group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                      <a 
                        href={method.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-foreground mb-4">{translations.contact.connectTitle}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-${social.color}/10 flex items-center justify-center text-${social.color} hover:bg-${social.color}/20 transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-foreground mb-3">{translations.contact.availabilityTitle}</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">{translations.contact.availableStatus}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {translations.contact.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;