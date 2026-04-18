import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-doc-bg p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-8">
        
        {/* Header */}
        <header className="card p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-doc-mint flex items-center justify-center text-white font-bold text-xl">
              +
            </div>
            <h1 className="text-3xl font-bold text-doc-navy tracking-tight">Doctor Eye</h1>
          </div>
          <p className="text-gray-500 font-medium">Smart Medical IT Solution</p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <section className="card p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-doc-mint rounded-full inline-block"></span>
              Component Playground
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <button className="btn-primary">
                  Mint Action Button
                </button>
                <button className="px-6 py-3 rounded-lg font-medium text-doc-navy bg-doc-bg hover:bg-gray-200 transition-colors">
                  Secondary Action
                </button>
              </div>

              <div className="p-4 rounded-lg bg-teal-50 border border-doc-mint/20 text-teal-800">
                <p className="font-medium">💡 Alert/Notice Component</p>
                <p className="text-sm mt-1 opacity-90">
                  환자 친화적이고 부드러운 톤앤매너를 유지하기 위해, 뾰족한 모서리 대신 부드러운 rounded-lg 곡률과 편안한 대비를 사용합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="card p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-doc-navy rounded-full inline-block"></span>
              Typography & Colors
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-doc-bg rounded-lg">
                <div className="w-12 h-12 rounded-full bg-doc-mint shadow-inner"></div>
                <div>
                  <p className="font-bold">Mint Green</p>
                  <p className="text-sm text-gray-500 font-mono">#17B798</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-doc-bg rounded-lg">
                <div className="w-12 h-12 rounded-full bg-doc-navy shadow-inner"></div>
                <div>
                  <p className="font-bold">Dark Navy</p>
                  <p className="text-sm text-gray-500 font-mono">#1A2B3C</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
