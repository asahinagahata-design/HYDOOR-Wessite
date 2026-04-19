
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
    <div className="w-full min-h-screen bg-black pt-24 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-5 py-6 md:px-12 md:py-20">
        <div className="mb-6 text-left md:mb-16">
          <span className="mb-2 block font-display text-xs italic tracking-[0.4em] text-primary md:mb-6 md:text-2xl md:tracking-[0.5em]">Connect With Us</span>
          <h1 className="font-display text-4xl uppercase italic leading-[0.85] tracking-tighter sm:text-5xl md:text-[12rem] md:leading-[0.8]">GET IN <span className="not-italic text-primary">TOUCH</span></h1>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          {/* Form */}
          <div className="glass flex-grow border border-white/5 p-5 shadow-2xl md:p-12">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center md:space-y-8 md:py-24">
                <span className="material-symbols-outlined text-5xl text-primary md:text-6xl">check_circle</span>
                <h3 className="font-display text-2xl tracking-widest text-white md:text-3xl">送信完了</h3>
                <p className="max-w-md text-xs leading-relaxed tracking-widest text-gray-400 md:text-sm">
                  お問い合わせありがとうございます。<br />
                  内容を確認のうえ、担当より折り返しご連絡いたします。
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 border border-white/20 px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all hover:border-primary hover:text-primary md:mt-8 md:px-12 md:py-4"
                >
                  New Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Your Name <span className="text-primary">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="FULL NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-none border-white/10 bg-neutral-900/50 p-3 text-xs tracking-widest text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary md:p-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Company</label>
                    <input
                      type="text"
                      placeholder="ORGANIZATION"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-none border-white/10 bg-neutral-900/50 p-3 text-xs tracking-widest text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary md:p-4"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Email Address <span className="text-primary">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL@EXAMPLE.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-none border-white/10 bg-neutral-900/50 p-3 text-xs tracking-widest text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary md:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Message <span className="text-primary">*</span></label>
                  <textarea
                    rows={4}
                    required
                    placeholder="HOW CAN WE ASSIST YOU?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-none border-white/10 bg-neutral-900/50 p-3 text-xs tracking-widest text-white transition-all focus:border-primary focus:ring-1 focus:ring-primary md:p-4"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 border border-red-500/30 bg-red-500/10 p-3">
                    <span className="material-symbols-outlined text-base text-red-400">error</span>
                    <p className="text-[11px] tracking-wider text-red-400 md:text-xs">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group flex w-full items-center justify-center gap-4 bg-white py-4 text-[10px] font-black tracking-[0.4em] text-black transition-all hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 md:py-5 md:tracking-[0.5em]"
                >
                  {status === 'sending' ? 'SENDING...' : 'SUBMIT INQUIRY'}
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-2 md:text-xl">
                    {status === 'sending' ? 'hourglass_top' : 'arrow_forward'}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6 lg:w-72">
            <div className="glass relative overflow-hidden border border-white/5 p-5 md:p-8">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-[60px]"></div>
              <h3 className="mb-4 flex items-center gap-3 font-display text-lg tracking-widest md:mb-6 md:text-2xl">
                <span className="h-[1px] w-6 bg-primary md:w-10"></span>
                CONTACT
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Primary Email</p>
                  <p className="break-all text-xs font-bold tracking-widest text-gray-200 md:text-sm">info@hydoor.jp</p>
                </div>
                <p className="text-[11px] leading-relaxed tracking-wider text-gray-500">
                  ご相談・ご依頼はフォームにて受け付けています。内容確認後、担当より折り返しご連絡します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
