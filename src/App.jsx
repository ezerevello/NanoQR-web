import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-xl text-indigo-600">NanoQR</span>
            </div>
            <nav className="flex gap-4 items-center">
              <button className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Características</button>
              <a href="https://github.com/ezerevello/NanoQR-web" target="_blank" rel="noopener noreferrer" className="ml-2 px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">Genera códigos QR</span>
            <span className="block text-indigo-600">rápido y gratis</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
            NanoQR te permite convertir enlaces y textos en códigos QR personalizables en segundos.
          </p>

          <div className="mt-10 mx-auto max-w-xl">
            <form className="sm:flex shadow-xl rounded-lg overflow-hidden bg-white border border-gray-100 p-2 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ingresa tu URL o texto aquí..."
                className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none border-0 sm:text-lg bg-transparent"
                required
              />
              <button
                type="button"
                className="mt-3 w-full px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto transition-colors"
                onClick={() => alert(`Generando QR para: ${url || 'ejemplo.com'}`)}
              >
                Generar QR
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026 NanoQR. Released under MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
