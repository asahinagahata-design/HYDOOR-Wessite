
import React, { FormEvent, useState } from 'react';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || '送信に失敗しました');
      }

      setStatus('success');
      setName('');
      setCompany('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : '送信に失敗しました。しばらく経ってからお試しください。');
    }
  };

  return (
    <div className="w-full bg-black min-h-screen pt-40">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-20">
        <div className="mb-32">
          <span className="text-primary font-display text-2xl tracking-[0.5em] block mb-6 italic">Connect With Us</span>
          <h1 className="text-7xl md:text-[12rem] font-display leading-[0.8] tracking-tighter italic uppercase">GET IN <span className="text-primary not-italic">TOUCH</span></h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Form */}
          <div className="flex-grow glass p-12 md:p-16 border border-white/5 shadow-2xl">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-8">
                <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
                <h3 className="text-white text-3xl font-display tracking-widest">送信完了</h3>
                <p className="text-gray-400 text-sm tracking-widest leading-relaxed max-w-md">
                  お問い合わせありがとうございます。<br />
                  内容を確認のうえ、担当より折り返しご連絡いたします。
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-12 py-4 border border-white/20 text-white text-[10px] font-black tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-all"
                >
                  New Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Your Name <span className="text-primary">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="FULL NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Company</label>
                    <input
                      type="text"
                      placeholder="ORGANIZATION"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Email Address <span className="text-primary">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL@EXAMPLE.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Message <span className="text-primary">*</span></label>
                  <textarea
                    rows={6}
                    required
                    placeholder="HOW CAN WE ASSIST YOU?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-4 p-5 bg-red-500/10 border border-red-500/30">
                    <span className="material-symbols-outlined text-red-400 text-xl">error</span>
                    <p className="text-red-400 text-xs tracking-widest">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-8 bg-white text-black font-black text-[10px] tracking-[0.5em] hover:bg-primary transition-all flex items-center justify-center gap-6 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'SENDING...' : 'SUBMIT INQUIRY'}
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">
                    {status === 'sending' ? 'hourglass_top' : 'arrow_forward'}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="lg:w-96 space-y-16">
            <div className="p-12 glass border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]"></div>
              <h3 className="font-display text-3xl mb-12 flex items-center gap-6 tracking-widest">
                <span className="w-10 h-[1px] bg-primary"></span>
                CONTACT
              </h3>
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-[9px] text-primary font-black tracking-[0.4em] uppercase">Primary Email</p>
                  <p className="text-sm text-gray-200 font-bold tracking-widest break-all">info@hydoor.jp</p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-gray-500 tracking-widest leading-relaxed">
                    ご相談・ご依頼はフォームにて受け付けています。<br />
                    内容確認後、担当より折り返しご連絡します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
