
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'HYDOOR プレミアム・コンシェルジュへようこそ。どのようなサポートが必要ですか？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model' as any, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `あなたはHYDOOR Inc.のハイエンドAIコンシェルジュです。
          ブランドテーマは「FOR ATHLETES」です。
          常に丁寧で、理知的、かつインスピレーションを与える口調で回答してください。
          1. Technology: OEM製造、パフォーマンスウェア開発。
          2. Artistry: 水と光のエンターテインメント演出。
          エンジニアやセールスの採用も積極的に行っています。`,
        },
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || '...' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '通信エラーが発生しました。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="size-16 bg-white text-black hover:bg-primary rounded-sm shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-90"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'bolt'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] h-[600px] bg-black border border-white/10 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="p-8 bg-neutral-900 border-b border-white/5 flex items-center gap-4">
            <div className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#e2ff00]"></div>
            <div>
              <p className="font-display text-2xl tracking-widest text-white leading-none">HYDOOR AI</p>
              <p className="text-[9px] text-primary font-black tracking-[0.3em] mt-2">ACTIVE SUPPORT</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-8 overflow-y-auto space-y-6 bg-black scroll-smooth"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 text-xs leading-relaxed tracking-widest ${
                  m.role === 'user' 
                  ? 'bg-primary text-black font-black' 
                  : 'bg-neutral-900 text-gray-300 border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 p-4 bg-neutral-900 border border-white/5">
                  <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-neutral-900 border-t border-white/5 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can we help?"
              className="flex-grow bg-black border border-white/10 text-white px-5 py-4 text-xs focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-white text-black px-6 hover:bg-primary transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-xl">keyboard_arrow_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatConcierge;
