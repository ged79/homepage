"use client";

export default function SpaceServices() {
  const services = [
    { name: "웹 개발", x: 20, y: 25, size: 90, color: "from-blue-500 to-cyan-400", delay: 0 },
    { name: "모바일 앱 개발", x: 75, y: 20, size: 85, color: "from-purple-500 to-pink-400", delay: 100 },
    { name: "AI 솔루션", x: 45, y: 35, size: 95, color: "from-green-500 to-emerald-400", delay: 200 },
    { name: "클라우드 인프라", x: 25, y: 65, size: 80, color: "from-orange-500 to-yellow-400", delay: 300 },
    { name: "UI/UX 디자인", x: 70, y: 70, size: 88, color: "from-pink-500 to-rose-400", delay: 400 },
    { name: "기술 컨설팅", x: 50, y: 80, size: 75, color: "from-indigo-500 to-blue-400", delay: 500 }
  ];

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden rounded-2xl">
      {/* Stars background */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      ))}
      
      {/* Nebula effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-40 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
      
      {/* Service planets */}
      {services.map((service, index) => (
        <div
          key={index}
          className="absolute group cursor-pointer transition-transform duration-500 hover:scale-110"
          style={{
            left: `${service.x}%`,
            top: `${service.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          data-aos="zoom-in"
          data-aos-delay={service.delay}
        >
          {/* Glow effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity`}
            style={{
              width: `${service.size}px`,
              height: `${service.size}px`
            }}
          />
          
          {/* Planet sphere */}
          <div 
            className={`relative flex items-center justify-center text-center`}
            style={{
              width: `${service.size}px`,
              height: `${service.size}px`
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-full opacity-80`} />
            <div className={`absolute inset-2 bg-gradient-to-tr ${service.color} rounded-full opacity-60`} />
            <div className="absolute inset-4 bg-slate-900/50 backdrop-blur-sm rounded-full" />
            
            {/* Text */}
            <span className="relative z-10 text-white font-semibold text-sm px-2">
              {service.name}
            </span>
          </div>
          
          {/* Orbit ring */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30 animate-[spin_30s_linear_infinite]"
          >
            <ellipse
              cx="50%"
              cy="50%"
              rx="45%"
              ry="20%"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              transform="rotate(15 50 50)"
            />
          </svg>
        </div>
      ))}
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-[float_20s_linear_infinite]"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
}