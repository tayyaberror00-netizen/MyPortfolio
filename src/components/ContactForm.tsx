import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Send, CheckCircle, Sparkles, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      setError('Please populate all coordinate inputs in this contact matrix.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a mathematically valid email vector.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate beautiful matrix network transmit transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Absolute ambient lights */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">Initiate Connection</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white mt-2 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base">
            Have a research inquiry, a consulting project, or want to discuss stochastic probability integration? Drop a line and let's bridge code and mathematics.
          </p>
        </div>

        {/* Center Contact Form Card Module */}
        <div className="max-w-xl mx-auto" id="contact-form-card">
          {submitStatus === 'success' ? (
            /* Smooth green-tinted confirmation box reading "✓ Message sent successfully!" */
            <div className="p-8 bg-emerald-950/40 border border-emerald-500/30 rounded-3xl text-center shadow-xl backdrop-blur-md animate-fade-in relative overflow-hidden group">
              {/* Animated glowing dots */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <CheckCircle className="w-8 h-8 animate-bounce" />
              </div>

              <h3 className="text-2xl font-bold font-display text-emerald-300 mb-2">✓ Message sent successfully!</h3>
              
              <p className="text-emerald-400/80 text-sm font-mono max-w-xs mx-auto mb-6">
                Your transmission has been packet-routed. Tayyab will review and respond shortly.
              </p>

              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-5 py-2 rounded-xl bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-200 border border-emerald-500/20 text-xs font-mono font-bold cursor-pointer transition-colors"
              >
                Simulate Another Transmission
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 bg-zinc-950/65 border border-purple-500/10 rounded-3xl shadow-2xl backdrop-blur-md space-y-6"
            >
              {/* Inputs for First Name, Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="block text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Muhammad"
                    className="w-full bg-black/60 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="block text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Younas"
                    className="w-full bg-black/60 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="younastayyab973@gmail.com"
                  className="w-full bg-black/60 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 font-sans"
                  disabled={isSubmitting}
                />
              </div>

              {/* Multiline Textarea Message Box */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your stochastic processes or portfolio dashboard request..."
                  className="w-full bg-black/60 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-300 font-sans resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Error messages */}
              {error && (
                <div className="p-3 bg-red-950/30 border border-red-500/20 text-red-400 rounded-xl font-mono text-xs text-center">
                  ⚠️ {error}
                </div>
              )}

              {/* Send It Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 shadow-[0_4px_25px_rgba(139,92,246,0.2)] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                id="send-it-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Relaying data coordinates...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Send It</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
