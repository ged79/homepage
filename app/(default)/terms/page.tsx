import PageIllustration from "@/components/page-illustration";

export default function TermsPage() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 pt-32 md:py-20 md:pt-40">
            {/* Header */}
            <div className="mx-auto max-w-3xl pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                서비스 이용약관
              </h1>
              <p className="text-lg text-indigo-200/65">
                시행일: 2025년 1월 1일
              </p>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-xl font-bold text-gray-200 mb-4">제1조 (목적)</h2>
                  <p className="text-gray-400 mb-6">
                    본 약관은 주식회사 코넥서스(이하 "회사")가 제공하는 웹/앱 개발, 플랫폼 구축 및 관련 IT 서비스(이하 "서비스")의 이용과 관련하여 
                    회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </p>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제2조 (정의)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. "이용자"란 회사와 서비스 이용계약을 체결하거나 이용의사를 표시한 개인 또는 법인을 말합니다.</li>
                    <li>2. "서비스"란 회사가 제공하는 웹사이트 개발, 모바일 애플리케이션 개발, 전자상거래 플랫폼 구축, AI 솔루션 개발, 유지보수 등 일체의 IT 서비스를 말합니다.</li>
                    <li>3. "프로젝트"란 이용자의 요구사항에 따라 회사가 개발·제작하는 결과물을 말합니다.</li>
                    <li>4. "계약"이란 서비스 제공과 관련하여 회사와 이용자 간에 체결하는 개별 계약을 말합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제3조 (약관의 게시와 개정)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 회사 웹사이트에 게시합니다.</li>
                    <li>2. 회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
                    <li>3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 회사 웹사이트에 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리한 약관의 개정인 경우에는 30일 이전부터 공지합니다.</li>
                    <li>4. 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 계약을 해지할 수 있습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제4조 (서비스의 제공)</h2>
                  <p className="text-gray-400 mb-2">회사가 제공하는 서비스는 다음과 같습니다:</p>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 웹사이트 및 웹 애플리케이션 개발</li>
                    <li>2. 모바일 애플리케이션(Android, iOS) 개발</li>
                    <li>3. 전자상거래 플랫폼 구축</li>
                    <li>4. AI 및 빅데이터 솔루션 개발</li>
                    <li>5. 시스템 유지보수 및 기술 지원</li>
                    <li>6. IT 컨설팅 서비스</li>
                    <li>7. 기타 회사와 이용자가 합의한 서비스</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제5조 (계약의 성립)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 서비스 이용계약은 이용자가 본 약관에 동의하고 서비스를 신청한 후, 회사가 이를 승낙함으로써 성립됩니다.</li>
                    <li>2. 회사는 다음 각 호에 해당하는 경우 서비스 신청을 승낙하지 않거나 사후에 계약을 해지할 수 있습니다:</li>
                    <li className="ml-4">가. 신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li className="ml-4">나. 기술적으로 서비스 제공이 현저히 곤란한 경우</li>
                    <li className="ml-4">다. 법령 또는 공공질서, 선량한 풍속에 반하는 서비스를 요구하는 경우</li>
                    <li className="ml-4">라. 기타 회사가 정한 이용신청 요건이 미충족된 경우</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제6조 (서비스 대금 및 지급방법)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 서비스 대금은 회사와 이용자 간 개별 계약에서 정한 금액으로 합니다.</li>
                    <li>2. 대금 지급은 다음과 같이 분할 지급을 원칙으로 합니다:</li>
                    <li className="ml-4">가. 계약금: 전체 대금의 30-40% (계약 체결 시)</li>
                    <li className="ml-4">나. 중도금: 전체 대금의 30% (중간 검수 시)</li>
                    <li className="ml-4">다. 잔금: 나머지 금액 (최종 납품 및 검수 완료 시)</li>
                    <li>3. 이용자는 회사가 발행한 세금계산서 수령 후 7일 이내에 대금을 지급하여야 합니다.</li>
                    <li>4. 대금 지급이 지연될 경우 연 6%의 지연이자가 발생할 수 있습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제7조 (이용자의 의무)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 이용자는 다음 행위를 하여서는 안 됩니다:</li>
                    <li className="ml-4">가. 신청 또는 변경 시 허위내용의 기재</li>
                    <li className="ml-4">나. 회사의 업무 수행에 지장을 초래하는 행위</li>
                    <li className="ml-4">다. 회사의 지적재산권을 침해하는 행위</li>
                    <li className="ml-4">라. 관계 법령에 위반되는 행위</li>
                    <li>2. 이용자는 프로젝트 진행에 필요한 자료 제공, 의사결정, 검수 등에 적극 협조하여야 합니다.</li>
                    <li>3. 이용자의 협조 지연으로 인한 일정 지연은 회사의 책임이 아닙니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제8조 (회사의 의무)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 계약된 서비스를 성실히 제공하여야 합니다.</li>
                    <li>2. 회사는 이용자의 개인정보를 「개인정보 보호법」에 따라 안전하게 관리하여야 합니다.</li>
                    <li>3. 회사는 서비스 제공과 관련하여 알게 된 이용자의 영업비밀을 제3자에게 누설하거나 부당하게 사용하지 않습니다.</li>
                    <li>4. 회사는 계약된 일정에 따라 프로젝트를 진행하며, 진행 상황을 이용자에게 정기적으로 보고합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제9조 (저작권 및 지적재산권)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 프로젝트 결과물의 저작권은 대금 완납 시 이용자에게 양도됩니다.</li>
                    <li>2. 단, 회사가 기존에 보유하고 있던 기술, 노하우, 범용 모듈 등의 지적재산권은 회사에 귀속됩니다.</li>
                    <li>3. 회사는 포트폴리오 목적으로 프로젝트 결과물을 소개할 수 있는 권리를 보유합니다. 단, 이용자가 비공개를 요청한 경우 이를 준수합니다.</li>
                    <li>4. 이용자가 제공한 콘텐츠의 저작권은 이용자에게 있으며, 회사는 서비스 제공 목적으로만 이를 사용합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제10조 (프로젝트 변경 및 추가 요청)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 계약 체결 이후 이용자의 요구에 의한 사양 변경이나 기능 추가는 별도 협의를 통해 추가 비용이 발생할 수 있습니다.</li>
                    <li>2. 각 개발 단계별로 정해진 수정 횟수를 초과하는 경우 추가 비용이 발생할 수 있습니다.</li>
                    <li>3. 추가 작업으로 인한 일정 변경은 상호 협의하여 조정합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제11조 (하자보수)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 프로젝트 완료 후 3개월간 무상 하자보수를 제공합니다.</li>
                    <li>2. 하자보수는 계약 당시 명시된 사양과 다르게 구현된 부분에 한합니다.</li>
                    <li>3. 다음의 경우는 무상 하자보수 대상에서 제외됩니다:</li>
                    <li className="ml-4">가. 이용자의 요구에 의한 사양 변경</li>
                    <li className="ml-4">나. 이용자의 부주의로 인한 오류</li>
                    <li className="ml-4">다. 제3자의 시스템 변경으로 인한 오류</li>
                    <li className="ml-4">라. 천재지변 등 불가항력적 사유</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제12조 (손해배상)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사와 이용자는 본 약관 및 개별 계약의 의무를 위반하여 상대방에게 손해를 입힌 경우 이를 배상하여야 합니다.</li>
                    <li>2. 회사의 손해배상 한도는 해당 프로젝트 계약금액을 초과하지 않습니다.</li>
                    <li>3. 천재지변, 전쟁, 폭동 등 불가항력적인 사유로 인한 손해는 배상책임이 면제됩니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제13조 (계약 해지)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 이용자와 회사는 다음의 경우 계약을 해지할 수 있습니다:</li>
                    <li className="ml-4">가. 상호 합의에 의한 경우</li>
                    <li className="ml-4">나. 상대방이 계약 내용을 현저히 위반한 경우</li>
                    <li className="ml-4">다. 상대방의 신용이 현저히 악화되어 계약 이행이 곤란한 경우</li>
                    <li>2. 계약 해지 시 환불 규정:</li>
                    <li className="ml-4">가. 착수 전: 계약금의 90% 환불</li>
                    <li className="ml-4">나. 기획/설계 단계: 계약금을 제외한 나머지 환불</li>
                    <li className="ml-4">다. 개발 단계: 진행률에 따른 공제 후 환불</li>
                    <li className="ml-4">라. 개발 완료 후: 환불 불가</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제14조 (비밀유지)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사와 이용자는 계약의 이행 과정에서 알게 된 상대방의 영업비밀, 기술정보, 경영정보 등 일체의 비밀정보를 계약기간은 물론 계약 종료 후에도 제3자에게 누설하거나 부당하게 사용하여서는 안 됩니다.</li>
                    <li>2. 비밀유지 의무는 계약 종료 후 3년간 유효합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제15조 (면책조항)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 천재지변, 전쟁 및 기타 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
                    <li>2. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임지지 않습니다.</li>
                    <li>3. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못한 것에 대하여 책임지지 않습니다.</li>
                    <li>4. 회사는 이용자가 제공한 정보의 정확성, 신뢰성 등 내용에 대하여 책임지지 않습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제16조 (분쟁 해결)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.</li>
                    <li>2. 제1항의 노력에도 불구하고 분쟁이 해결되지 않을 경우, 「민사소송법」상의 관할법원에 소를 제기할 수 있습니다.</li>
                    <li>3. 회사와 이용자 간 제기된 소송은 대한민국 법령에 따라 처리합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제17조 (기타)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 본 약관에 명시되지 않은 사항은 관계 법령 및 상관례에 따릅니다.</li>
                    <li>2. 개별 계약서의 내용이 본 약관과 상충하는 경우, 개별 계약서의 내용이 우선합니다.</li>
                  </ul>

                  <div className="mt-12 pt-8 border-t border-gray-700/50">
                    <h3 className="text-lg font-bold text-gray-200 mb-4">부칙</h3>
                    <p className="text-gray-400 mb-4">
                      본 약관은 2025년 1월 1일부터 시행됩니다.
                    </p>
                    <p className="text-gray-400">
                      주식회사 코넥서스<br />
                      대표이사: 김영아<br />
                      사업자등록번호: 853-81-03832<br />
                      주소: 충북 영동군 영동읍 눈어치4로 4, 201<br />
                      전화: 010-7741-4569<br />
                      이메일: contact@connexus.co.kr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
