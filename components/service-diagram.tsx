"use client";

export default function ServiceDiagram() {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden rounded-2xl">
      {/* Blue glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      
      {/* Top button - 웹개발 */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <div className="px-8 py-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl shadow-xl border border-gray-600">
          <span className="text-gray-200 font-semibold text-lg">웹개발</span>
        </div>
      </div>
      
      {/* Left button - 앱개발 */}
      <div className="absolute top-1/2 left-32 -translate-y-1/2">
        <div className="px-10 py-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl shadow-xl border border-gray-600">
          <span className="text-gray-200 font-semibold text-lg">앱개발</span>
        </div>
      </div>
      
      {/* Right button - AI솔루션 */}
      <div className="absolute top-1/2 right-32 -translate-y-1/2">
        <div className="px-10 py-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl shadow-xl border border-gray-600">
          <span className="text-gray-200 font-semibold text-lg">AI솔루션</span>
        </div>
      </div>
      
      {/* Bottom button - UI/UX 디자인 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="px-8 py-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl shadow-xl border border-gray-600">
          <span className="text-gray-200 font-semibold text-lg">UI/UX 디자인</span>
        </div>
      </div>
      
      {/* Center hexagon logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 w-32 h-32 bg-blue-500/50 rounded-lg blur-2xl" />
          
          {/* Hexagon container */}
          <svg width="120" height="120" className="relative">
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <polygon
              points="60,10 100,35 100,85 60,110 20,85 20,35"
              fill="url(#hexGradient)"
              stroke="#4f46e5"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      
      {/* Avatar circles */}
      <div className="absolute top-20 left-48">
        <div className="w-12 h-12 bg-gray-600/50 rounded-full" />
      </div>
      <div className="absolute top-32 right-64">
        <div className="w-14 h-14 bg-gray-600/70 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-64">
        <div className="w-10 h-10 bg-gray-600/40 rounded-full" />
      </div>
      <div className="absolute bottom-28 right-48">
        <div className="w-12 h-12 bg-gray-600/60 rounded-full" />
      </div>
      <div className="absolute top-1/2 left-12">
        <div className="w-10 h-10 bg-gray-600/30 rounded-full" />
      </div>
      <div className="absolute top-1/2 right-12">
        <div className="w-14 h-14 bg-gray-600/50 rounded-full" />
      </div>
      <div className="absolute top-40 left-80">
        <div className="w-11 h-11 bg-gray-600/40 rounded-full" />
      </div>
      <div className="absolute bottom-40 right-80">
        <div className="w-13 h-13 bg-gray-600/60 rounded-full" />
      </div>
    </div>
  );
}