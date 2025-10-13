"use client";

export default function WorkflowGraphic({ step }: { step: 1 | 2 | 3 }) {
  const configs = {
    1: {
      main: "기획",
      nodes: [
        { label: "요구분석", position: "top" },
        { label: "UI/UX", position: "left" },
        { label: "프로토타입", position: "right" }
      ]
    },
    2: {
      main: "개발",
      nodes: [
        { label: "프론트엔드", position: "top" },
        { label: "백엔드", position: "left" },
        { label: "테스트", position: "right" }
      ]
    },
    3: {
      main: "실행",
      nodes: [
        { label: "배포", position: "top" },
        { label: "모니터링", position: "left" },
        { label: "유지보수", position: "right" }
      ]
    }
  };

  const config = configs[step];

  return (
    <div className="relative w-full h-72 flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-gray-900 to-purple-950/20" />
      
      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-pulse"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      {/* Central hexagon with gradient */}
      <div className="relative flex items-center justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120" className="animate-pulse">
          <defs>
            <linearGradient id={`grad-${step}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="60,15 95,37.5 95,82.5 60,105 25,82.5 25,37.5"
            fill={`url(#grad-${step})`}
            fillOpacity="0.2"
            stroke={`url(#grad-${step})`}
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
        <span className="absolute text-white font-bold text-xl">
          {config.main}
        </span>
      </div>

      {/* Orbital nodes */}
      {config.nodes.map((node, i) => {
        const positions = {
          top: { x: 0, y: -100 },
          left: { x: -130, y: 50 },
          right: { x: 130, y: 50 }
        };
        const pos = positions[node.position as keyof typeof positions];
        
        return (
          <div key={i}>
            {/* Connection line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1="50%"
                y1="50%"
                x2={`${50 + pos.x/3}%`}
                y2={`${50 + pos.y/3}%`}
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="1"
                strokeDasharray="3,3"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </svg>
            
            {/* Node */}
            <div
              className="absolute flex flex-col items-center gap-2"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-30px',
                marginTop: '-30px'
              }}
            >
              <div className="w-14 h-14 rounded-full bg-gray-800/80 border border-indigo-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
                      stroke="#a5b4fc" 
                      strokeWidth="2"
                    />
                    <circle 
                      cx="12" 
                      cy="7" 
                      r="4" 
                      stroke="#a5b4fc" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-indigo-300 font-medium bg-gray-900/60 px-2 py-0.5 rounded backdrop-blur-sm">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}