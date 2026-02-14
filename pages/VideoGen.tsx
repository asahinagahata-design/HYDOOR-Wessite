
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";

const VideoGen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const checkAndOpenKey = async () => {
    // @ts-ignore
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }
    return true;
  };

  const generateVideo = async () => {
    if (!image) return;
    
    setIsGenerating(true);
    setVideoUrl(null);
    setStatus('APIキーの認証を確認中...');

    try {
      await checkAndOpenKey();
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      setStatus('AIが画像を解析し、映像の構成を考案中...');
      
      const base64Data = image.split(',')[1];
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'A cinematic motion video starting from this frame',
        image: {
          imageBytes: base64Data,
          mimeType: 'image/png',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      setStatus('動画をレンダリングしています（これには数分かかる場合があります）...');
      
      const loadingMessages = [
        'テクスチャと光の屈折を計算中...',
        '流体シミュレーションを適用しています...',
        'アスリートの躍動感をフレームに刻んでいます...',
        'HYDOORクオリティまで磨き上げています...',
        '最終的な色彩調整を行っています...'
      ];
      
      let msgIdx = 0;
      const interval = setInterval(() => {
        setStatus(loadingMessages[msgIdx % loadingMessages.length]);
        msgIdx++;
      }, 15000);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      clearInterval(interval);
      setStatus('映像の生成が完了しました。');

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      }
    } catch (error: any) {
      console.error(error);
      if (error.message?.includes("Requested entity was not found")) {
        setStatus('APIキーが無効、または課金設定が確認できません。再度キーを選択してください。');
        // @ts-ignore
        await window.aistudio.openSelectKey();
      } else {
        setStatus('エラーが発生しました。時間を置いて再度お試しください。');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full bg-black min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <span className="text-primary font-display text-2xl tracking-[0.5em] block mb-6 italic uppercase">Future Vision Lab</span>
          <h1 className="text-7xl md:text-[10rem] font-display leading-[0.8] tracking-tighter italic uppercase mb-10">VEO <span className="text-primary not-italic">LAB</span></h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-widest max-w-3xl mx-auto">
            静止画に命を吹き込み、アスリートの物語を動かし始める。<br />
            Google Veo テクノロジーを使用した、次世代の映像生成エクスペリエンス。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Controls */}
          <div className="glass p-12 space-y-12">
            <div className="space-y-6">
              <h3 className="text-primary font-display text-2xl tracking-widest">STEP 01: UPLOAD IMAGE</h3>
              <div 
                className={`relative aspect-video border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center overflow-hidden ${image ? 'border-primary/50' : 'border-white/10 hover:border-primary/30'}`}
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                {image ? (
                  <img src={image} className="w-full h-full object-cover" alt="Source" />
                ) : (
                  <div className="text-center p-10">
                    <span className="material-symbols-outlined text-5xl text-gray-600 mb-4">upload_file</span>
                    <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase">Click to select a photo</p>
                  </div>
                )}
                <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-primary font-display text-2xl tracking-widest">STEP 02: VISION PROMPT</h3>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="映像にどのような動きや変化を加えたいですか？ (例: 水しぶきが舞い上がる、カメラがゆっくりズームする...)"
                className="w-full bg-neutral-900/50 border-white/10 text-white p-6 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none min-h-[120px]"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-primary font-display text-2xl tracking-widest">STEP 03: ASPECT RATIO</h3>
              <div className="flex gap-4">
                {(['16:9', '9:16'] as const).map((ratio) => (
                  <button 
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`flex-1 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${aspectRatio === ratio ? 'bg-primary text-black' : 'bg-neutral-900 text-gray-500 border border-white/5 hover:border-primary/30'}`}
                  >
                    {ratio === '16:9' ? 'Landscape (16:9)' : 'Portrait (9:16)'}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={generateVideo}
              disabled={!image || isGenerating}
              className="w-full py-8 bg-white text-black font-black text-[10px] tracking-[0.5em] hover:bg-primary transition-all flex items-center justify-center gap-6 group disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'GENERATING...' : 'GENERATE MOTION'}
              <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">movie</span>
            </button>

            <div className="pt-6 border-t border-white/5">
              <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-widest">
                ※ 本機能のご利用には <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-primary underline">Google Cloud 課金設定</a> が有効なAPIキーが必要です。
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col gap-8">
            <div className="glass p-8 h-full min-h-[500px] flex flex-col items-center justify-center relative bg-neutral-900/30">
              {!isGenerating && !videoUrl && (
                <div className="text-center opacity-30">
                  <span className="material-symbols-outlined text-8xl mb-6">play_circle</span>
                  <p className="text-xs font-black tracking-widest uppercase">Result will appear here</p>
                </div>
              )}

              {isGenerating && (
                <div className="text-center space-y-10 px-12">
                  <div className="relative size-32 mx-auto">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-primary font-display text-3xl animate-pulse tracking-widest uppercase">Crafting your vision</p>
                    <p className="text-gray-400 text-xs tracking-[0.2em] leading-loose">{status}</p>
                  </div>
                </div>
              )}

              {videoUrl && (
                <div className="w-full h-full flex flex-col animate-in zoom-in duration-700">
                  <video 
                    src={videoUrl} 
                    controls 
                    autoPlay 
                    loop 
                    className="w-full h-auto shadow-[0_0_50px_rgba(226,255,0,0.2)] border border-primary/20"
                  />
                  <div className="mt-8 flex justify-between items-center">
                    <p className="text-primary font-display text-2xl tracking-widest uppercase">Motion Generated</p>
                    <a 
                      href={videoUrl} 
                      download="hydoor-veo-video.mp4"
                      className="text-white text-[10px] font-black tracking-widest uppercase border-b border-primary pb-1 hover:text-primary transition-colors"
                    >
                      Download Video
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGen;
