import React, { useState } from 'react';
import { PawPrint, ChevronRight, Send, User, Mail, MessageSquare, X } from "lucide-react";

type Props = {
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
  heroImage: string;
  heroAlt?: string;
  badgeImage: string;
  badgeAlt?: string;
  panelBg?: string;
  primaryHref?: string;
  secondaryHref?: string;
  whatsappNumber?: string;
};

export default function ContactSection({
  eyebrow = "Let's Collaborate",
  heading = "Your reliable partner for digital innovation",
  subcopy = "I specialize in full stack development, AI-driven solutions, and data-powered strategies. Whether it's building scalable web apps or creating engaging content, I'm here to help.",
  heroImage = "/hero-image.jpg",
  heroAlt = "Portfolio hero",
  badgeImage = "/badge.jpg",
  badgeAlt = "Profile badge",
  panelBg = "#cfe8f6",
  primaryHref = "#contact",
  secondaryHref = "#services",
  whatsappNumber = "918126133363",
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Message:* ${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({ name: '', email: '', message: '' });
    setIsModalOpen(false);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="contact" className="bg-[#f4f4f4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <span className="inline-block h-2 w-2 rounded-full bg-[#ff5a3c]" />
                <span>{eyebrow}</span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
                {heading}
              </h1>

              <p className="mt-5 max-w-xl text-gray-600">{subcopy}</p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center rounded-full bg-gray-900 text-white pl-5 pr-2 py-2.5 text-sm font-semibold shadow hover:shadow-md transition"
                >
                  Get in Touch
                  <span className="ml-3 grid h-9 w-9 place-items-center rounded-full bg-[#f4a3ff] text-gray-900 shadow-inner">
                    <PawPrint className="h-5 w-5" />
                  </span>
                </button>

                <a
                  href={secondaryHref}
                  className="inline-flex items-center text-gray-900 font-medium hover:opacity-80 transition"
                >
                  See My Work
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7">
              <div
                className="relative rounded-[32px] p-3 sm:p-4"
                style={{ backgroundColor: panelBg }}
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9] rounded-[28px] overflow-hidden">
                  <img
                    src={heroImage}
                    alt={heroAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -top-6 left-6 sm:-top-7 sm:left-7 z-20">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-[20px] border-[6px] border-white shadow-xl overflow-hidden bg-white">
                    <img
                      src={badgeImage}
                      alt={badgeAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Form */}
            <div className="relative backdrop-blur-md bg-white/95 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-6">
                  Send me a message via WhatsApp. I'll get back to you soon!
                </p>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/60 border border-white/40 rounded-xl
                                 text-gray-900 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent
                                 transition-all duration-200"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/60 border border-white/40 rounded-xl
                                 text-gray-900 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent
                                 transition-all duration-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 bg-white/60 border border-white/40 rounded-xl
                                 text-gray-900 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent
                                 transition-all duration-200 resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white
                             py-3.5 px-6 rounded-xl font-semibold
                             hover:from-[#128C7E] hover:to-[#075E54]
                             focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-200
                             flex items-center justify-center gap-2
                             shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    Send via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}