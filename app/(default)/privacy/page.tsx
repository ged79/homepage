import PageIllustration from "@/components/page-illustration";

export default function PrivacyPage() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 pt-32 md:py-20 md:pt-40">
            {/* Header */}
            <div className="mx-auto max-w-3xl pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                개인정보처리방침
              </h1>
              <p className="text-lg text-indigo-200/65">
                시행일: 2025년 1월 1일
              </p>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-400 mb-6">
                    주식회사 코넥서스(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 
                    이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
                  </p>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제1조 (개인정보의 처리목적)</h2>
                  <p className="text-gray-400 mb-6">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                    이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 서비스 제공 계약의 체결 및 이행</li>
                    <li className="ml-4">• 본인 식별·인증, 서비스 제공, 계약서·청구서 발송</li>
                    <li>2. 고객 관리</li>
                    <li className="ml-4">• 고객 상담, 고충 처리, 공지사항 전달</li>
                    <li>3. 마케팅 및 광고 활용</li>
                    <li className="ml-4">• 신규 서비스 안내, 이벤트 정보 제공 (동의한 경우에 한함)</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제2조 (개인정보의 처리 및 보유기간)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</li>
                    <li>2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:</li>
                    <li className="ml-4">• 서비스 제공 계약 이행: 계약 종료 후 5년 (「상법」 제64조)</li>
                    <li className="ml-4">• 대금결제 및 재화 등의 공급에 관한 기록: 5년 (「전자상거래 등에서의 소비자보호에 관한 법률」)</li>
                    <li className="ml-4">• 계약 또는 청약철회 등에 관한 기록: 5년 (「전자상거래 등에서의 소비자보호에 관한 법률」)</li>
                    <li className="ml-4">• 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (「전자상거래 등에서의 소비자보호에 관한 법률」)</li>
                    <li className="ml-4">• 웹사이트 방문기록: 3개월 (「통신비밀보호법」)</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제3조 (처리하는 개인정보의 항목)</h2>
                  <p className="text-gray-400 mb-6">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                  
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 서비스 이용 시</li>
                    <li className="ml-4">• 필수항목: 성명, 연락처(휴대전화번호), 이메일</li>
                    <li className="ml-4">• 선택항목: 회사명, 회사주소, 사업자등록번호</li>
                    <li>2. 서비스 이용 과정에서 자동 생성/수집되는 정보</li>
                    <li className="ml-4">• IP주소, 쿠키, 서비스 이용기록, 방문기록</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제4조 (개인정보의 제3자 제공)</h2>
                  <p className="text-gray-400 mb-6">
                    회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 
                    정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  </p>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제5조 (개인정보처리의 위탁)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:</li>
                    <li className="ml-4">• 수탁업체: Amazon Web Services (AWS)</li>
                    <li className="ml-4">• 위탁업무: 클라우드 서버 운영 및 데이터 보관</li>
                    <li>2. 회사는 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제6조 (정보주체와 법정대리인의 권리·의무 및 행사방법)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
                    <li>2. 제1항에 따른 권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</li>
                    <li>3. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 "개인정보 처리 방법에 관한 고시(제2020-7호)" 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</li>
                    <li>4. 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제7조 (개인정보의 파기)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</li>
                    <li>2. 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</li>
                    <li>3. 개인정보 파기의 절차 및 방법은 다음과 같습니다:</li>
                    <li className="ml-4">• 파기절차: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                    <li className="ml-4">• 파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제8조 (개인정보의 안전성 확보조치)</h2>
                  <p className="text-gray-400 mb-6">
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
                  </p>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                    <li>2. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                    <li>3. 물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</li>
                    <li>2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.</li>
                    <li>3. 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</li>
                    <li>4. 쿠키의 설치·운영 및 거부: 웹브라우저 상단의 도구{'>'} 인터넷 옵션{'>'} 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
                    <li>5. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제10조 (개인정보보호책임자)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</li>
                    <li className="ml-4">• 개인정보보호책임자: 김영아 대표이사</li>
                    <li className="ml-4">• 연락처: 010-7741-4569, contact@connexus.co.kr</li>
                    <li>2. 정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보보호책임자에게 문의하실 수 있습니다.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제11조 (개인정보 열람청구)</h2>
                  <p className="text-gray-400 mb-6">
                    정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 
                    회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
                  </p>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>• 개인정보 열람청구 접수·처리 부서: 경영지원팀</li>
                    <li>• 연락처: 010-7741-4569, contact@connexus.co.kr</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제12조 (권익침해 구제방법)</h2>
                  <p className="text-gray-400 mb-6">
                    정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 
                    분쟁해결이나 상담 등을 신청할 수 있습니다:
                  </p>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                    <li>2. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
                    <li>3. 대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
                    <li>4. 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
                  </ul>
                  
                  <p className="text-gray-400 mb-6">
                    「개인정보 보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 
                    요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 
                    행정심판을 청구할 수 있습니다.
                  </p>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제13조 (영상정보처리기기 운영·관리에 관한 사항)</h2>
                  <p className="text-gray-400 mb-6">
                    회사는 영상정보처리기기를 설치·운영하지 않습니다.
                  </p>

                  <h2 className="text-xl font-bold text-gray-200 mb-4">제14조 (개인정보처리방침의 변경)</h2>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    <li>1. 이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다.</li>
                    <li>2. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.</li>
                    <li className="ml-4">• 해당사항 없음 (최초 제정)</li>
                  </ul>

                  <div className="mt-12 pt-8 border-t border-gray-700/50">
                    <p className="text-gray-400">
                      공고일자: 2025년 1월 1일<br />
                      시행일자: 2025년 1월 1일
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
