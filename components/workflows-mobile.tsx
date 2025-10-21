import Image from "next/image";
import WorkflowImg01 from "@/public/images/workflow-01.png";
import WorkflowImg02 from "@/public/images/workflow-02.png";
import WorkflowImg03 from "@/public/images/workflow-03.png";

export default function WorkflowsMobile() {
  const steps = [
    { 
      step: "01",
      title: "상담 & 기획",
      desc: "비즈니스 목표 분석과 UI/UX 설계",
      image: WorkflowImg01,
      color: "from-blue-600 to-indigo-600",
      duration: "1-2주",
      tasks: ["요구사항 정의", "와이어프레임", "프로토타입"]
    },
    { 
      step: "02",
      title: "개발 & 테스트",
      desc: "최신 기술로 구현하고 철저히 검증",
      image: WorkflowImg02,
      color: "from-indigo-600 to-purple-600",
      duration: "4-8주",
      tasks: ["프론트엔드", "백엔드", "QA 테스트"]
    },
    { 
      step: "03",
      title: "배포 & 운영",
      desc: "안정적 서비스와 지속적 개선",
      image: WorkflowImg03,
      color: "from-purple-600 to-pink-600",
      duration: "지속지원",
      tasks: ["CI/CD", "모니터링", "유지보수"]
    }
  ];

  return (
    <section className="md:hidden relative px-4 py-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      {/* Section header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20 mb-4">
          <span className="text-xs font-medium text-indigo-400">개발 프로세스</span>
        </div>
        <h2 className="text-3xl font-bold mb-3">
          <span className="bg-gradient-to-r from-gray-100 to-indigo-200 bg-clip-text text-transparent">
            체계적인 진행 과정
          </span>
        </h2>
        <p className="text-gray-400">
          애자일 방법론으로 빠르고 안정적인 개발
        </p>
      </div>
      
      {/* Process cards */}
      <div className="relative">
        {/* Cards */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Card */}
              <div className="group">
                <div className="card-glass hover:border-indigo-500/50 transition-all overflow-hidden">
                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-black/50 backdrop-blur rounded-full">
                      <span className="text-white text-xs">{step.duration}</span>
                    </div>
                  </div>
                  
                  {/* Image with overlay */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{step.desc}</p>
                    
                    {/* Tasks */}
                    <div className="flex flex-wrap gap-2">
                      {step.tasks.map((task, tidx) => (
                        <span 
                          key={tidx}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/50"
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}