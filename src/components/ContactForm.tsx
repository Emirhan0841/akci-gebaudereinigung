'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function encodeFormData(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = {
        'form-name': 'contact',
        ...data,
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slideUp">
            <div>
              <p className="text-primary-600 font-semibold mb-3">Kontakt</p>
              <h2 className="mb-4">Lass uns dich kennenlernen</h2>
              <p className="text-xl text-gray-600">
                Hast du Fragen? Wir sind gerne für dich da und erstellen dir ein maßgeschneidertes Angebot.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href={SOCIAL_LINKS.phone}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Anrufen</h3>
                  <p className="text-gray-600">{COMPANY.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                  <p className="text-gray-600 break-all">{COMPANY.email}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600">Schreib uns direkt eine Nachricht</p>
                </div>
              </a>

              {/* Location */}
              <a
                href={SOCIAL_LINKS.location}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">{COMPANY.address}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slideUp">
            <form onSubmit={handleSubmit(onSubmit)} name="contact" data-netlify="true" className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Dein Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Max Mustermann"
                  {...register('name', { required: 'Name ist erforderlich' })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  E-Mail-Adresse *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="max@example.com"
                  {...register('email', {
                    required: 'E-Mail ist erforderlich',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Bitte gib eine gültige E-Mail-Adresse ein',
                    },
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Telefonnummer *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="0178 3907693"
                  {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                  Welche Leistung interessiert dich? *
                </label>
                <select
                  id="service"
                  {...register('service', { required: 'Bitte wähle eine Leistung aus' })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">-- Bitte wählen --</option>
                  <option value="Unterhaltsreinigung">Unterhaltsreinigung</option>
                  <option value="Grundreinigung">Grundreinigung</option>
                  <option value="Fensterreinigung">Fensterreinigung</option>
                  <option value="Fassadenreinigung">Fassadenreinigung</option>
                  <option value="Spezialreinigung">Spezialreinigung</option>
                  <option value="Gebäudeverwaltung">Gebäudeverwaltung</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  placeholder="Schreib uns gerne etwas über dein Anliegen..."
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 font-medium">
                  ✓ Deine Nachricht wurde erfolgreich versendet!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-medium">
                  ✗ Fehler beim Versenden. Bitte versuche es später erneut.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird versendet...' : 'Angebot anfordern'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Deine Daten werden vertraulich behandelt. Wir antworten innerhalb von 24 Stunden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
