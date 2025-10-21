export default function ProcessDiagram() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950/20 to-gray-900">
      {/* Blue glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>
      
      <svg className="relative w-full max-w-4xl h-full" viewBox="0 0 1200 400">
        {/* Connection lines */}
        <line x1="300" y1="80" x2="600" y2="200" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
        <line x1="900" y1="80" x2="600" y2="200" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
        <line x1="300" y1="320" x2="600" y2="200" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
        <line x1="900" y1="320" x2="600" y2="200" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
        
        {/* Top box - 상담 */}
        <rect x="230" y="50" width="140" height="60" rx="10" fill="rgba(55, 65, 81, 0.8)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
        <text x="300" y="85" textAnchor="middle" className="fill-gray-300 text-lg font-medium">상담</text>
        
        {/* Left box - 프로토타입 */}
        <rect x="180" y="290" width="240" height="60" rx="10" fill="rgba(55, 65, 81, 0.8)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
        <text x="300" y="325" textAnchor="middle" className="fill-gray-300 text-lg font-medium">프로토타입</text>
        
        {/* Right box - 프로젝트 */}
        <rect x="780" y="290" width="240" height="60" rx="10" fill="rgba(55, 65, 81, 0.8)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
        <text x="900" y="325" textAnchor="middle" className="fill-gray-300 text-lg font-medium">프로젝트</text>
        
        {/* Top right box - 기획 */}
        <rect x="830" y="50" width="140" height="60" rx="10" fill="rgba(55, 65, 81, 0.8)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
        <text x="900" y="85" textAnchor="middle" className="fill-gray-300 text-lg font-medium">기획</text>
        
        {/* Center hexagon */}
        <g transform="translate(600, 200)">
          <polygon
            points="0,-50 43.3,-25 43.3,25 0,50 -43.3,25 -43.3,-25"
            fill="rgba(99, 102, 241, 0.3)"
            stroke="rgba(99, 102, 241, 0.8)"
            strokeWidth="2"
          />
          <polygon
            points="0,-40 34.6,-20 34.6,20 0,40 -34.6,20 -34.6,-20"
            fill="rgba(59, 130, 246, 0.5)"
          />
        </g>
        
        {/* People avatars */}
        <circle cx="150" cy="80" r="25" fill="rgba(156, 163, 175, 0.3)" />
        <circle cx="450" cy="150" r="30" fill="rgba(156, 163, 175, 0.4)" />
        <circle cx="750" cy="150" r="30" fill="rgba(156, 163, 175, 0.4)" />
        <circle cx="1050" cy="80" r="25" fill="rgba(156, 163, 175, 0.3)" />
        <circle cx="150" cy="320" r="25" fill="rgba(156, 163, 175, 0.3)" />
        <circle cx="450" cy="250" r="30" fill="rgba(156, 163, 175, 0.4)" />
        <circle cx="750" cy="250" r="30" fill="rgba(156, 163, 175, 0.4)" />
        <circle cx="1050" cy="320" r="25" fill="rgba(156, 163, 175, 0.3)" />
      </svg>
    </div>
  );
}