import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(256);
  const [recoverLevel, setRecoverLevel] = useState('medium');
  const [qrData, setQrData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      input: url,
      size: size,
      recoverLevel: recoverLevel
    };

    try {
      const response = await fetch('https://identifies-excerpt-followed-mailman.trycloudflare.com/api/qr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setQrData(data);
      console.log('Response:', data);
    } catch (error) {
      console.error('Error generating QR:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-inter text-[#1c1c1c]">
      <header className="bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="shrink-0 flex items-center gap-2">
              <img className="w-11" src="/qr-logo.png" alt="logo" />
              <span className="font-bold text-xl text-[#1c1c1c]">NanoQR</span>
            </div>
            <nav className="flex gap-4 items-center">
              <a href="https://github.com/ezerevello/NanoQR" target="_blank" rel="noopener noreferrer" className="ml-2 px-4 py-2 bg-[#1c1c1c] text-white rounded-full text-sm font-medium hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/50 via-white to-white">
        <div className="max-w-2xl mx-auto text-center w-full">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="block text-[#1c1c1c]">Create QR Codes</span>
            <span className="block text-emerald-600">with your own API</span>
          </h1>
          <p className="mt-5 max-w-lg mx-auto text-base sm:text-lg text-gray-600">
            A beautiful frontend for a headless QR API. <br></br>
            Generate codes instantly, or check out the GitHub repo to run your own instance.
          </p>

          <div className="mt-10 mx-auto max-w-lg">
            <form className="flex items-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200 rounded-full p-2 focus-within:ring-2 focus-within:ring-emerald-600/20 focus-within:border-emerald-400 transition-all">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL or text here..."
                className="flex-grow px-4 py-2.5 text-sm text-[#1c1c1c] placeholder-gray-400 focus:outline-none bg-transparent w-full"
                required
              />
              <button
                type="submit"
                className="ml-2 px-6 py-2.5 font-semibold rounded-full text-white bg-emerald-600 shadow-sm focus:outline-none text-sm whitespace-nowrap cursor-pointer transition-all duration-200 ease-out hover:bg-emerald-700 hover:scale-105 hover:shadow-lg"
                onClick={handleSubmit}
              >
                Generate
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-6 justify-center items-center text-gray-600">
              <div className="flex items-center gap-2">
                <label htmlFor="size" className="text-sm font-medium">Size (px):</label>
                <input
                  id="size"
                  type="number"
                  min="41"
                  max="2048"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-20 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-400 text-center transition-all text-[#1c1c1c] shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="recoverLevel" className="text-sm font-medium">Error Correction:</label>
                <select
                  id="recoverLevel"
                  value={recoverLevel}
                  onChange={(e) => setRecoverLevel(e.target.value)}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-400 transition-all text-[#1c1c1c] shadow-sm cursor-pointer"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="highest">Highest</option>
                </select>
              </div>
            </div>

            {qrData && qrData.status === 'success' && (
              <div className="mt-10 flex flex-col items-center animate-fade-in-up transition-all duration-500">
                <div className="p-4 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-shadow">
                  <img
                    src={`data:image/png;base64,${qrData.qr}`}
                    alt="Generated QR Code"
                    className="max-w-full h-auto rounded-xl"
                  />
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={`data:image/png;base64,${qrData.qr}`}
                    download="qrcode.png"
                    className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download PNG
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            Made for fun with <span className="text-emerald-600 font-medium">lots of love</span> — hope it sparks your next project! 🐱
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
