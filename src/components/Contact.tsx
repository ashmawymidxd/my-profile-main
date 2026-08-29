import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, ArrowRight, CheckCircle2, XCircle, Clock, Sparkles, MessageSquare, User, AtSign, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/contexts/I18nContext';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

// Color configurations
const getColorConfig = (color: string) => {
  const configs: Record<string, { bg: string; text: string; border: string; gradient: string; iconBg: string; hoverBg: string }> = {
    primary: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      border: 'border-blue-500/20',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'from-blue-500/20 to-cyan-500/20',
      hoverBg: 'hover:bg-blue-500/10',
    },
    accent: {
      bg: 'bg-green-500/10',
      text: 'text-green-500',
      border: 'border-green-500/20',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'from-green-500/20 to-emerald-500/20',
      hoverBg: 'hover:bg-green-500/10',
    },
    'primary-glow': {
      bg: 'bg-purple-500/10',
      text: 'text-purple-500',
      border: 'border-purple-500/20',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'from-purple-500/20 to-pink-500/20',
      hoverBg: 'hover:bg-purple-500/10',
    },
  };
  return configs[color] || configs.primary;
};

const Contact = () => {
  const { translations } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-hide status after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_f48s5ad',
        'template_3yff8vb',
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        'vK1Pii72N3tTdskj7'
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: translations.contact.methods.email,
      value: 'ahmedhassanshehata551@gmail.com',
      link: 'mailto:ahmedhassanshehata551@gmail.com',
      color: 'primary',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: translations.contact.methods.phone,
      value: '01554300351 / 01208778686',
      link: 'tel:+201554300351',
      color: 'accent',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: translations.contact.methods.location,
      value: translations.hero.location,
      link: '#',
      color: 'primary-glow',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/ahmed-hassan-shehata',
      color: 'primary',
      followers: '500+',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/ashmawymidxd',
      color: 'accent',
      followers: '50+',
    },
    {
      name: 'Telegram',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://t.me/G1_ahmed_hassan',
      color: 'primary-glow',
      followers: '1K+',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-6 md:py-12 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/10 mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {translations.contact.title}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 lg:p-10 border border-primary/5 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

              <div className="relative">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center border border-primary/10">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{translations.contact.formTitle}</h3>
                    <p className="text-sm text-muted-foreground">I'll get back to you as soon as possible</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground/50'}`} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder={translations.contact.form.fullName}
                        className={`w-full pl-11 pr-4 py-3.5 bg-background/50 border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none ${
                          focusedField === 'name' ? 'border-primary/50 shadow-sm shadow-primary/10' : 'border-border'
                        }`}
                      />
                    </div>

                    <div className="relative">
                      <AtSign className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground/50'}`} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder={translations.contact.form.emailAddress}
                        className={`w-full pl-11 pr-4 py-3.5 bg-background/50 border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none ${
                          focusedField === 'email' ? 'border-primary/50 shadow-sm shadow-primary/10' : 'border-border'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <FileText className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'subject' ? 'text-primary' : 'text-muted-foreground/50'}`} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder={translations.contact.form.subject}
                      className={`w-full pl-11 pr-4 py-3.5 bg-background/50 border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none ${
                        focusedField === 'subject' ? 'border-primary/50 shadow-sm shadow-primary/10' : 'border-border'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className={`absolute left-4 top-4 w-4 h-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : 'text-muted-foreground/50'}`} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      placeholder={translations.contact.form.message}
                      className={`w-full pl-11 pr-4 py-3.5 bg-background/50 border rounded-3xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none outline-none ${
                        focusedField === 'message' ? 'border-primary/50 shadow-sm shadow-primary/10' : 'border-border'
                      }`}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="group w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {translations.contact.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        {translations.contact.form.sendMessage}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Message sent successfully! I'll get back to you soon.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-full">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                            Something went wrong. Please try again or contact me directly.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Get in Touch Title */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {translations.contact.getInTouchTitle}
              </h3>
              <p className="text-muted-foreground text-sm">
                Choose your preferred way to reach me
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const colors = getColorConfig(method.color);
                return (
                  <a
                    key={index}
                    href={method.link}
                    className="group block"
                  >
                    <div className={`glass-card p-5 border ${colors.border}/30 hover:border-${method.color}/50 transition-all duration-300 relative overflow-hidden`}>
                      {/* Hover gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                      <div className="relative flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.iconBg} border ${colors.border}/50 flex items-center justify-center ${colors.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}>
                          {method.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground text-sm mb-0.5">{method.title}</h4>
                          <p className={`text-sm text-muted-foreground group-hover:${colors.text} transition-colors duration-300 truncate`}>
                            {method.value}
                          </p>
                        </div>

                        <ArrowRight className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300`} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 border border-primary/5">
              <h4 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                {translations.contact.connectTitle}
              </h4>

              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => {
                  const colors = getColorConfig(social.color);
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-4 rounded-3xl border border-border/50 hover:border-transparent transition-all duration-300 hover:scale-105"
                      title={social.name}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.iconBg} border ${colors.border}/50 flex items-center justify-center ${colors.text} group-hover:scale-110 transition-all duration-300`}>
                        {social.icon}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground/60">{social.followers}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-card p-6 border border-green-500/10 relative overflow-hidden">
              {/* Green glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />

              <div className="relative">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  {translations.contact.availabilityTitle}
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {translations.contact.availableStatus}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {translations.contact.responseTime}
                  </p>
                </div>

                {/* Quick response times */}
                <div className="mt-5 pt-4 border-t border-border/50 grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">~1h</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Email</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">~15m</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;