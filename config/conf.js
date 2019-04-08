var newTechnologyObject = [
  {
    "no": 1,
    "page": 322,
    "en": "DES",
    "full_en": "Data Encryption Standard",
    "ko": "데이터 암호 표준",
    "description": "대표적인 비밀키 암호화 기법"
  },
  {
    "no": 2,
    "page": 322,
    "en": "OPE",
    "full_en": "Order Preserving Encryption",
    "ko": "순차적 암호화",
    "description": "원본 수치 데이터와 동일순서로 정렬되도록 암호화 하는 기술"
  },
  {
    "no": 3,
    "page": 322,
    "en": "PKI",
    "full_en": "Public Key Infrastructure",
    "ko": "공개키 기반 구조",
    "description": "공개키 암호 시스템 사용 관리"
  },
  {
    "no": 4,
    "page": 325,
    "en": "PET",
    "full_en": "privacy Enhancing Technology",
    "ko": "프라이버시 강화 기술",
    "description": "개인정보 침해위험 핵심기술 암호화 다양한 사용자 프라이버시 보호기술"
  },
  {
    "no": 5,
    "page": 325,
    "en": "Digital Forensics",
    "full_en": "",
    "ko": "",
    "description": "디지털 저장매체의 정보수집 수사과정"
  },
  {
    "no": 6,
    "page": 325,
    "en": "DRM",
    "full_en": "",
    "ko": "",
    "description": "데이터 저작권 보호 시스템, 인증 사용자만 접근 가능"
  },
  {
    "no": 7,
    "page": 325,
    "en": "ONS",
    "full_en": "Object Naming Service",
    "ko": "",
    "description": "사물의 정보저장된 서버위치 알려주는 서비스"
  },
  {
    "no": 8,
    "page": 325,
    "en": "IDS",
    "full_en": "Intrusion Detection System",
    "ko": "침입 탐지 시스템",
    "description": "컴퓨터 시스템 비정상적 과정 실시간 탐지"
  },
  {
    "no": 9,
    "page": 326,
    "en": "RFID",
    "full_en": "",
    "ko": "",
    "description": "라디오 주파수 인식 기술, IC, 판독기, 태그, 차세대인식기술"
  },
  {
    "no": 10,
    "page": 326,
    "en": "DLP",
    "full_en": "Data Leakage/Loss Prevention",
    "ko": "데이터 유출 방지",
    "description": "사내직원 사용하는 모든 정보 검색 행위 탐지 통제 외부 유출 막음"
  },
  {
    "no": 11,
    "page": 327,
    "en": "CC",
    "full_en": "Common Criteria",
    "ko": "공통 평가 기준",
    "description": "정보보호 제품평가기준"
  },
  {
    "no": 12,
    "page": 327,
    "en": "SSL",
    "full_en": "Secure Sockets Layer",
    "ko": "",
    "description": "TCP/IP 앱계층 사이에 위치 업계 표준 프로토콜"
  },
  {
    "no": 13,
    "page": 327,
    "en": "방화벽/캐시 기능",
    "full_en": "",
    "ko": "",
    "description": "프록시 서버 기능"
  },
  {
    "no": 14,
    "page": 327,
    "en": "HDCP",
    "full_en": "",
    "ko": "고대역폭 디지털 콘텐츠 전송 보호",
    "description": "고대역폭 비디오 암호화 전송 보호"
  },
  {
    "no": 15,
    "page": 328,
    "en": "CCL",
    "full_en": "Creative Commons License",
    "ko": "저작물 이용 약관",
    "description": "저작물 이용 약관"
  },
  {
    "no": 16,
    "page": 328,
    "en": "PIA",
    "full_en": "Privacy Impact Assessment",
    "ko": "개인정보 영향평가 제도",
    "description": "국민 사생활 미칠 영향 미리조사하는 제도"
  },
  {
    "no": 17,
    "page": 328,
    "en": "RPO",
    "full_en": "Recovery Point Objective",
    "ko": "목표 복구 시점",
    "description": "복구할 수 있는 기준점"
  },
  {
    "no": 18,
    "page": 328,
    "en": "RTO",
    "full_en": "Recovery Time Objective",
    "ko": "목표 복구 시간",
    "description": "복구하기 위한 목표 시간"
  },
  {
    "no": 19,
    "page": 329,
    "en": "ICMP",
    "full_en": "",
    "ko": "인터넷 제어 메시지 프로토콜",
    "description": "제어메시지 취급 프로토콜 OSI 네트워크층"
  },
  {
    "no": 20,
    "page": 329,
    "en": "WEP",
    "full_en": "",
    "ko": "",
    "description": "무선랜(WLAN) 보안 프로토콜 802.11b"
  },
  {
    "no": 21,
    "page": 329,
    "en": "WPA",
    "full_en": "Wifi Protected Access",
    "ko": "",
    "description": "무선랜 인증 암호화 관련 표준 802.11i"
  },
  {
    "no": 22,
    "page": 330,
    "en": "SSO",
    "full_en": "Single Sign On",
    "ko": "",
    "description": "한 번의 로그인 모든사이트 이용"
  },
  {
    "no": 23,
    "page": 330,
    "en": "Biometrics",
    "full_en": "",
    "ko": "생체인식",
    "description": "신체적, 행동적 특징을 이용해 개인의 신원 확인"
  },
  {
    "no": 24,
    "page": 331,
    "en": "BCP",
    "full_en": "Business Continuity Planning",
    "ko": "업무 연속성 계획",
    "description": "재난 발생 비즈니스 연속성 유지하기 위한 계획, 기업가치 극대화"
  },
  {
    "no": 25,
    "page": 331,
    "en": "CRL",
    "full_en": "Certificate Revocation List",
    "ko": "인증서 폐기 목록",
    "description": "폐기된 인증서 확인하도록 목록 배포, 공표"
  },
  {
    "no": 26,
    "page": 331,
    "en": "인증기관",
    "full_en": "",
    "ko": "",
    "description": "인증업무 수행 제3자 신뢰기관"
  },
  {
    "no": 27,
    "page": 332,
    "en": "SAM",
    "full_en": "Secure Application Module",
    "ko": "",
    "description": "카드 판독기 내부에 장착, 카드와 단말기 유효성 인증, 통신데이터 암호화 정보 노출방지"
  },
  {
    "no": 28,
    "page": 332,
    "en": "CLMS",
    "full_en": "Copyright License Management System",
    "ko": "저작권라이선스 통합관리시스템",
    "description": "정부가 디지털 저작물에 체계적인 관리"
  },
  {
    "no": 29,
    "page": 332,
    "en": "Key Pair",
    "full_en": "",
    "ko": "키 페어",
    "description": "공개키 암호 알고리즘에 사용되는 개인키, 공개키 쌍"
  },
  {
    "no": 30,
    "page": 332,
    "en": "Firewall",
    "full_en": "",
    "ko": "방화벽",
    "description": "네트워크와 인터넷 간 전송되는 정보 선별해 수용,거부,수정하는 능력을 가진 보안시스템"
  },
  {
    "no": 31,
    "page": 333,
    "en": "software Escrow",
    "full_en": "",
    "ko": "소프트웨어 에스크로",
    "description": "SW개발자의 지식재산권 보호 사용자에게는 저렴한 비용으로 안정적, 유지보수"
  },
  {
    "no": 32,
    "page": 333,
    "en": "MY-PIN",
    "full_en": "",
    "ko": "마이핀",
    "description": "주민번호 대체 무작위 13자리 번호"
  },
  {
    "no": 33,
    "page": 333,
    "en": "CAPTCHA",
    "full_en": "",
    "ko": "자동 계정 생성 방지 기술",
    "description": "악의적 회원가입, 스팸메시지 위해 사용되는 봇을 막기 위해 만들어짐"
  },
  {
    "no": 34,
    "page": 334,
    "en": "CTI",
    "full_en": "Cyber Threat Intelligence",
    "ko": "지능형 사이버 위협 대응",
    "description": "과거 내부조직, 외부 다양한 정보에 기초해 위협에 대응하는 방법"
  },
  {
    "no": 35,
    "page": 334,
    "en": "전체백업",
    "full_en": "",
    "ko": "",
    "description": "데이터 전체 대상 백업"
  },
  {
    "no": 36,
    "page": 334,
    "en": "증분백업",
    "full_en": "Incremental Backup",
    "ko": "",
    "description": "백업 대상 데이터중 변경되거나 증가된 데이터만을 대상으로 백업 수행"
  },
  {
    "no": 37,
    "page": 334,
    "en": "차별/누적증분",
    "full_en": "",
    "ko": "",
    "description": "증분백업의 종류"
  },
  {
    "no": 38,
    "page": 334,
    "en": "TrustZone technology",
    "full_en": "",
    "ko": "트러스트존 기술",
    "description": "ARM이 개발한 기술 일반구역과 보안구역으로 나뉨"
  },
  {
    "no": 39,
    "page": 334,
    "en": "doxing",
    "full_en": "",
    "ko": "독싱",
    "description": "개인이나 조직을 해킹해 빼낸 정보를 온라인에 공개하는 행위"
  },
  {
    "no": 40,
    "page": 334,
    "en": "doxware",
    "full_en": "",
    "ko": "독스 웨어",
    "description": "독싱+랜섬웨어 악성코드"
  },
  {
    "no": 41,
    "page": 339,
    "en": "Cyber Bullying",
    "full_en": "",
    "ko": "사이버 협박",
    "description": "인터넷에서 상대에게 나타내는 적대 행위"
  },
  {
    "no": 42,
    "page": 339,
    "en": "DDos",
    "full_en": "",
    "ko": "분산 서비스 거부 공격",
    "description": "여러 장비로 한 서버에 집중 공격"
  },
  {
    "no": 43,
    "page": 339,
    "en": "VoIP 보안 위협",
    "full_en": "",
    "ko": "",
    "description": "음성 패킷 불법 수집, 조합해 내용을 재생, 도청하는 위협"
  },
  {
    "no": 44,
    "page": 339,
    "en": "랜섬웨어",
    "full_en": "Ransomware",
    "ko": "",
    "description": "컴퓨터에 잠입해 문서나 파일등을 임의로 암호화, 풀기 위해 돈 요구"
  },
  {
    "no": 45,
    "page": 340,
    "en": "디지털 발자국",
    "full_en": "Digital Footprint",
    "ko": "",
    "description": "온라인 활동을 하면서 남긴 디지털 기록 또는 흔적"
  },
  {
    "no": 46,
    "page": 340,
    "en": "워터링 홀",
    "full_en": "Watering Hole",
    "ko": "",
    "description": "표적으로 삼은 집단이 주로 방문하는 웹 사이트를 감염시켜 피해 사이트 방문하도록 기다리는것"
  },
  {
    "no": 47,
    "page": 340,
    "en": "백도어",
    "full_en": "Back Door",
    "ko": "",
    "description": "시스템 보안이 제거된 비밀 통로"
  },
  {
    "no": 48,
    "page": 340,
    "en": "제로데이 공격",
    "full_en": "Zero Day Attack",
    "ko": "",
    "description": "보안의 취약점 발견 후 존재가 공표되기 전에 취약점을 악용해 이뤄지는 보안공격"
  },
  {
    "no": 49,
    "page": 340,
    "en": "스머핑",
    "full_en": "SMURFING",
    "ko": "",
    "description": "IP ICMP특성이용, 엄청난 양의 데이터 한사이트에 집중 공격 네트워크 일부 불능"
  },
  {
    "no": 50,
    "page": 341,
    "en": "typosquatting",
    "full_en": "",
    "ko": "타이포스쿼팅",
    "description": "주소를 잘못 입력, 철자를 빠트리는 실수 이용 광고사이트로 이동하게 만듦"
  },
  {
    "no": 51,
    "page": 341,
    "en": "Hacktivism",
    "full_en": "",
    "ko": "핵티비즘",
    "description": "자신의 정치적 목적을 위한 수단으로 노선을 달리하는 곳의 웹사이트 해킹"
  },
  {
    "no": 52,
    "page": 341,
    "en": "Tvishing",
    "full_en": "",
    "ko": "티비싱",
    "description": "스마트TV, 사생활 몰래 촬영 유출, 홈쇼핑 화면 해적방송 송출"
  },
  {
    "no": 53,
    "page": 341,
    "en": "APT",
    "full_en": "Advanced Persistent Threats",
    "ko": "지능형 지속 위협",
    "description": "조직적으로 기업, 조직 네트워크에 침투해 활동거점 마련, 보안 무력화"
  },
  {
    "no": 54,
    "page": 342,
    "en": "Pharming",
    "full_en": "",
    "ko": "파밍",
    "description": "합법적으로 소유중인 사용자 도메인 탈취, DNS 이름 속여 진짜 사이트로 오인"
  },
  {
    "no": 55,
    "page": 342,
    "en": "사회공학",
    "full_en": "Social Engineering",
    "ko": "",
    "description": "인간 상호작용의 깊은 신뢰 바탕, 사람들을 속여 정상 보안 절차 깨트리는 비기술적 시스템"
  },
  {
    "no": 56,
    "page": 342,
    "en": "Zeus",
    "full_en": "",
    "ko": "",
    "description": "온라인 뱅킹 계정 정보 탈취, 상용 멀웨어, 러시아에서 개발"
  },
  {
    "no": 57,
    "page": 342,
    "en": "Botnet",
    "full_en": "",
    "ko": "봇넷",
    "description": "악성프로그램에 감염된 컴퓨터의 네트워크로 연결된 형태"
  },
  {
    "no": 58,
    "page": 342,
    "en": "Zombie",
    "full_en": "",
    "ko": "",
    "description": "악성코드에 감염된 컴퓨터"
  },
  {
    "no": 59,
    "page": 343,
    "en": "Patent Troll",
    "full_en": "",
    "ko": "특허괴물",
    "description": "로열티 수입만으로 이익을 창출하는 특허 관리 전문 기업"
  },
  {
    "no": 60,
    "page": 343,
    "en": "Malware",
    "full_en": "",
    "ko": "악성 소프트웨어",
    "description": "악의적 목적을 위해 작성된것"
  },
  {
    "no": 61,
    "page": 343,
    "en": "스턱스 넷",
    "full_en": "",
    "ko": "",
    "description": "독일 지멘스사, 제어소프트웨어 침투 시스템 마비"
  },
  {
    "no": 62,
    "page": 343,
    "en": "Attack Toolkit",
    "full_en": "",
    "ko": "공격용 툴킷",
    "description": "악성코드 프로그램 모음"
  },
  {
    "no": 63,
    "page": 344,
    "en": "Ping of Death",
    "full_en": "",
    "ko": "죽음의 핑",
    "description": "65536이상 큰 패킷 고의 전송"
  },
  {
    "no": 64,
    "page": 344,
    "en": "Splogger",
    "full_en": "",
    "ko": "스플로거",
    "description": "다른사람 콘텐츠 무단사용, 광고성 블로거"
  },
  {
    "no": 65,
    "page": 344,
    "en": "IP Spoofing",
    "full_en": "",
    "ko": "IP 스푸핑",
    "description": "다른시스템과 신뢰관계 속여 침입하는 크래킹"
  },
  {
    "no": 66,
    "page": 344,
    "en": "Sniffing",
    "full_en": "",
    "ko": "스니핑",
    "description": "남의 패킷 정보 도청, 수동적 공격"
  },
  {
    "no": 67,
    "page": 344,
    "en": "스위치 재밍",
    "full_en": "Switch Jamming",
    "ko": "",
    "description": "위조된 MAC 주소 지속적으로 흘려보내 스위칭 허브 테이블 기능 마비"
  },
  {
    "no": 68,
    "page": 345,
    "en": "Vandalism",
    "full_en": "",
    "ko": "반달리즘",
    "description": "공개된 문서 훼손, 변경, 낙서"
  },
  {
    "no": 69,
    "page": 346,
    "en": "살라미 기법",
    "full_en": "",
    "ko": "",
    "description": "이탈리아 소시지, 아주 적은금액이나 양을 빼내는 컴퓨터 사기"
  },
  {
    "no": 70,
    "page": 346,
    "en": "무작위 공격",
    "full_en": "Brute Force Attack",
    "ko": "",
    "description": "암호키 찾기위해 모든값 대입해 공격"
  },
  {
    "no": 71,
    "page": 346,
    "en": "큐싱",
    "full_en": "Qshing",
    "ko": "",
    "description": "Qr 코드통해 악성 앱 다운로드 유도"
  },
  {
    "no": 72,
    "page": 346,
    "en": "다크 데이터",
    "full_en": "Dark Data",
    "ko": "",
    "description": "공간만 차지하는 데이터"
  },
  {
    "no": 73,
    "page": 347,
    "en": "스누핑",
    "full_en": "Snooping",
    "ko": "",
    "description": "남의정보 염탐해 불법으로 가로채는 행위"
  },
  {
    "no": 74,
    "page": 347,
    "en": "Dyre Malware",
    "full_en": "",
    "ko": "다이어 악성코드",
    "description": "인터넷 뱅킹정보 탈취하는 악성코드, 트로이 목마의 한종류"
  },
  {
    "no": 75,
    "page": 347,
    "en": "Dropper",
    "full_en": "",
    "ko": "드롭퍼",
    "description": "정상적인 파일 안에 바이러스가 숨겨진 형태"
  },
  {
    "no": 76,
    "page": 347,
    "en": "Memory Hacking",
    "full_en": "",
    "ko": "메모리 해킹",
    "description": "메모리 데이터 위,변조, 정상적 인터넷 뱅킹 사이트여도 이체 과정에서 돈이 다른곳으로 새어나감"
  },
  {
    "no": 77,
    "page": 348,
    "en": "Spyware",
    "full_en": "",
    "ko": "스파이웨어",
    "description": "사용자 동의없이 정보수집"
  },
  {
    "no": 78,
    "page": 348,
    "en": "Worm",
    "full_en": "",
    "ko": "웜",
    "description": "연속적 자신 복제, 시스템 부하 높임"
  },
  {
    "no": 79,
    "page": 348,
    "en": "Cracking",
    "full_en": "",
    "ko": "크래킹",
    "description": "시스템에 불법으로 침입, 정보 파괴 또는 수정"
  },
  {
    "no": 80,
    "page": 348,
    "en": "트로이목마",
    "full_en": "",
    "ko": "",
    "description": "정상적인척 하다가 프로그램 실행되면 부작용을 일으킴"
  },
  {
    "no": 81,
    "page": 348,
    "en": "Hoax",
    "full_en": "",
    "ko": "혹스",
    "description": "악성코드인것처럼 행동"
  },
  {
    "no": 82,
    "page": 366,
    "en": "VPN",
    "full_en": "",
    "ko": "가상 사설 통신망",
    "description": "가상 사설 네트워크, 인터넷을 자신의 전용 회선인것처럼 사용"
  },
  {
    "no": 83,
    "page": 366,
    "en": "WLAN",
    "full_en": "",
    "ko": "무선랜",
    "description": "Ap가 설치된 곳 중심 무선 주파수 기술 이용 근거리 (       ) 카드 장착된 휴대정보 연결 네트워크"
  },
  {
    "no": 84,
    "page": 366,
    "en": "OFDM",
    "full_en": "",
    "ko": "직교 주파수 분할 다중",
    "description": "각 반송파가 직교관계, 다수의 부반송파에 나눠실어 다중전송하는 디지털 변조방식"
  },
  {
    "no": 85,
    "page": 366,
    "en": "FTP",
    "full_en": "",
    "ko": "파일 전송 프로토콜",
    "description": "컴/컴, 컴/인터넷 사이의 원격 파일 전송 프로토콜"
  },
  {
    "no": 86,
    "page": 367,
    "en": "Multipath Fading",
    "full_en": "",
    "ko": "다중경로 페이딩",
    "description": "두개이상 경로를 통해 수신측에 도달할때 합성신호가 시공간적으로 강도가 변함"
  },
  {
    "no": 87,
    "page": 367,
    "en": "NDN",
    "full_en": "Named Data Network",
    "ko": "",
    "description": "데이터 전송을 콘텐츠 자체의 정보와 라우터 기능만으로 수행, 기존의 IP망을 대체할 새로운 인터넷 아키텍처"
  },
  {
    "no": 88,
    "page": 367,
    "en": "AMR",
    "full_en": "",
    "ko": "원격 검침",
    "description": "원격으로 검침하는거"
  },
  {
    "no": 89,
    "page": 367,
    "en": "NGN",
    "full_en": "Next Generation Network",
    "ko": "차세대 통신망",
    "description": "유선망 기반의 차세대 통신망"
  },
  {
    "no": 90,
    "page": 368,
    "en": "GLONASS",
    "full_en": "",
    "ko": "글로나스",
    "description": "러시아의 GPS같은거"
  },
  {
    "no": 91,
    "page": 368,
    "en": "MICS",
    "full_en": "Medical Implant Communication Service",
    "ko": "",
    "description": "임플란트 장치간 통신 서비스"
  },
  {
    "no": 92,
    "page": 368,
    "en": "NFC",
    "full_en": "",
    "ko": "근거리 무선 통신",
    "description": "고주파 이용 근거리 무선 통신 기술"
  },
  {
    "no": 93,
    "page": 368,
    "en": "SSID",
    "full_en": "Service Set IDentifier",
    "ko": "서비스 세트 식별자",
    "description": "모든 패킷의 헤더에 존재하는 고유 식별자"
  },
  {
    "no": 94,
    "page": 369,
    "en": "QoS",
    "full_en": "Quality of Service",
    "ko": "서비스 품질",
    "description": "서비스 질, 지연시간, 데이터 손실률 보증"
  },
  {
    "no": 95,
    "page": 369,
    "en": "TEIN",
    "full_en": "",
    "ko": "트랜스 유라시아 네트워크",
    "description": "아시아와 유럽 잇는 초고속 정보 통신망"
  },
  {
    "no": 96,
    "page": 369,
    "en": "Telepresence",
    "full_en": "",
    "ko": "원격 현장감",
    "description": "가상의 장소를 신체적으로 경험하는것"
  },
  {
    "no": 97,
    "page": 369,
    "en": "Carrier Aggregation",
    "full_en": "",
    "ko": "반송파 묶음",
    "description": "복수의 주파수대역 동시사용, 대역폭 확장기술"
  },
  {
    "no": 98,
    "page": 370,
    "en": "NRI",
    "full_en": "Networked Readiness Index",
    "ko": "네트워크 준비지수",
    "description": "세계 경제 포럼(WEF), 기업의 정보통신기술 발전도와 경쟁력 국가별 평가"
  },
  {
    "no": 99,
    "page": 370,
    "en": "SYN",
    "full_en": "",
    "ko": "동기상태 부호",
    "description": "유휴상태, 전송제어문자"
  },
  {
    "no": 100,
    "page": 370,
    "en": "TCP/IP",
    "full_en": "",
    "ko": "",
    "description": "인터넷에 연결된 컴퓨터들간 표준 프로토콜"
  },
  {
    "no": 101,
    "page": 371,
    "en": "protocol",
    "full_en": "",
    "ko": "프로토콜",
    "description": "서로다른 컴퓨터들간 정보교환 표준화된 통신규약"
  },
  {
    "no": 102,
    "page": 371,
    "en": "UWB",
    "full_en": "Ultra WideBand",
    "ko": "초광대역",
    "description": "짧은거리에서 많은양의 데이터를 낮은전력으로 전송하는 무선기술, 무선 디지털 펄스라고도 함"
  },
  {
    "no": 103,
    "page": 371,
    "en": "PICONET",
    "full_en": "",
    "ko": "피코넷",
    "description": "블루투스 기술, UWB통신기술 사용해 통신망 형성하는 무선 네트워크"
  },
  {
    "no": 104,
    "page": 371,
    "en": "DPM",
    "full_en": "Digital PostMark",
    "ko": "디지털 우편 소인",
    "description": "전자적인 우편배달 서비스"
  },
  {
    "no": 105,
    "page": 372,
    "en": "HSDPA",
    "full_en": "",
    "ko": "고속 하향 패킷 접속",
    "description": "3세대 이동통신 하향링크에서 10Mbps고속 패킷 서비스 제공 전송규격"
  },
  {
    "no": 106,
    "page": 372,
    "en": "u-Health",
    "full_en": "",
    "ko": "유헬스",
    "description": "물리적공간, 네트워크, 보건의료대상자"
  },
  {
    "no": 107,
    "page": 372,
    "en": "Digerati",
    "full_en": "",
    "ko": "디저라티",
    "description": "디지털 분야에 지식 많은 사람"
  },
  {
    "no": 108,
    "page": 373,
    "en": "WBAN",
    "full_en": "Wireless Body Area Network",
    "ko": "",
    "description": "웨어러블, 몸에심는, 센서나 기기 무선 연결, 개인영역 네트워크 기술"
  },
  {
    "no": 109,
    "page": 373,
    "en": "CTTH",
    "full_en": "Coax To The Home",
    "ko": "",
    "description": "기존 케이블 방송망으로 초고속/대용량 서비스 제공, 고품질 IPTV"
  },
  {
    "no": 110,
    "page": 373,
    "en": "PostNet",
    "full_en": "",
    "ko": "포스트넷",
    "description": "IT 기반 우편물류 통합정보 시스템"
  },
  {
    "no": 111,
    "page": 373,
    "en": "ZigBee",
    "full_en": "",
    "ko": "지그비",
    "description": "저속 전송속도, 데이터 네트워크를 위한 표준 기술"
  },
  {
    "no": 112,
    "page": 374,
    "en": "Digital Access Index",
    "full_en": "",
    "ko": "디지털 접근 지수",
    "description": "정보통신기술의 접근성, 서비스 이용에 관한 전세계적 비교지수"
  },
  {
    "no": 113,
    "page": 374,
    "en": "VMC",
    "full_en": "Vehicle Multihop Communication",
    "ko": "차량 멀티홉 통신",
    "description": "차량충돌 예방"
  },
  {
    "no": 114,
    "page": 374,
    "en": "망중립성",
    "full_en": "",
    "ko": "",
    "description": "모든 네트워크 사업자는 모든 콘텐츠 동등하게 취급, 차별안됨"
  },
  {
    "no": 115,
    "page": 374,
    "en": "GIS",
    "full_en": "Geographic Information System",
    "ko": "지리정보 시스템",
    "description": "지리적으로 자료 수집 저장 등 하는 컴퓨터 응용 시스템"
  },
  {
    "no": 116,
    "page": 375,
    "en": "USN",
    "full_en": "",
    "ko": "유비쿼터스 센서 네트워크",
    "description": "각종센서 수집한 정보 무선으로 수집하도록 구성"
  },
  {
    "no": 117,
    "page": 375,
    "en": "ANT+ protocol",
    "full_en": "",
    "ko": "",
    "description": "초저전력 무선 센서 네트워크"
  },
  {
    "no": 118,
    "page": 376,
    "en": "레드섹(RadSec) 프로토콜",
    "full_en": "",
    "ko": "",
    "description": "RADIUS over TLS, TCP나 TLS 이용해 전송하기 위한 프로토콜"
  },
  {
    "no": 119,
    "page": 376,
    "en": "SBAS",
    "full_en": "Satellite",
    "ko": "위성기반 보정 시스템",
    "description": "ICAO, GNSS, GNSS위성에 수신정보"
  },
  {
    "no": 120,
    "page": 376,
    "en": "GBAS",
    "full_en": "Ground",
    "ko": "지상기반 보정 시스템",
    "description": "ICAO, GNSS, GNSS위성 오차 보정위해"
  },
  {
    "no": 121,
    "page": 381,
    "en": "WebKit",
    "full_en": "",
    "ko": "웹키트",
    "description": "웹브라우저 만드는 레이아웃 엔진"
  },
  {
    "no": 122,
    "page": 381,
    "en": "Mashup",
    "full_en": "",
    "ko": "매시업",
    "description": "새로운 소프트웨어, 서비스, DB만드는 기술"
  },
  {
    "no": 123,
    "page": 381,
    "en": "VoIP",
    "full_en": "",
    "ko": "",
    "description": "인터넷 프로토콜상의 음성전송"
  },
  {
    "no": 124,
    "page": 382,
    "en": "IMS",
    "full_en": "IP Multimedia Subsystem",
    "ko": "",
    "description": "인터넷 프로토콜 기반 멀티미디어 서비스 제공 규격"
  },
  {
    "no": 125,
    "page": 383,
    "en": "RIA",
    "full_en": "Rich Internet Application",
    "ko": "리치 인터넷 애플리케이션",
    "description": "플래시애니매이션, 웹서버 애플리케이션, 역동적, 플래시 웹페이지 제작기술"
  },
  {
    "no": 126,
    "page": 383,
    "en": "ISP",
    "full_en": "Internet Service Provider",
    "ko": "인터넷 서비스 제공자",
    "description": "인터넷 접속서비스,웹사이트 구축 웹호스팅 서비스 등 제공하는 회사"
  },
  {
    "no": 127,
    "page": 384,
    "en": "CNAME",
    "full_en": "Canonical Name",
    "ko": "",
    "description": "하나의 IP 주소로 여러 개의 서버 운영"
  },
  {
    "no": 128,
    "page": 384,
    "en": "HVC",
    "full_en": "High performance Video Coding",
    "ko": "고성능 영상코딩",
    "description": "차세대 비디오 부호화 표준"
  },
  {
    "no": 129,
    "page": 384,
    "en": "Webaholism",
    "full_en": "",
    "ko": "웨바홀리즘",
    "description": "인터넷에 지나치게 몰두, 인터넷 없이 불안한 사람"
  },
  {
    "no": 130,
    "page": 385,
    "en": "RSS",
    "full_en": "Really Simple Syndication",
    "ko": "맞춤형 정보 배달",
    "description": "업데이트 잦은 사이트 최신정보 쉽게 확인"
  },
  {
    "no": 131,
    "page": 386,
    "en": "SEO",
    "full_en": "Search Engine Optimization",
    "ko": "검색 엔진 최적화",
    "description": "검색엔진에서 검색했을때 상위에 나타나도록 관리"
  },
  {
    "no": 132,
    "page": 386,
    "en": "Pro-Teur",
    "full_en": "",
    "ko": "프로튜어",
    "description": "전문가같은 아마추어"
  },
  {
    "no": 133,
    "page": 386,
    "en": "IPv6",
    "full_en": "",
    "ko": "",
    "description": "IPv4다음, 16비트씩 8부분, 128비트"
  },
  {
    "no": 134,
    "page": 386,
    "en": "Anycast",
    "full_en": "",
    "ko": "애니캐스트",
    "description": "한 송신자와 인근의 소수 수신자 간의 통신"
  },
  {
    "no": 135,
    "page": 387,
    "en": "Unicast",
    "full_en": "",
    "ko": "유니캐스트",
    "description": "1:1 통신"
  },
  {
    "no": 136,
    "page": 387,
    "en": "Semantic Web",
    "full_en": "",
    "ko": "시멘틱 웹",
    "description": "컴퓨터가 사람을 대신해 이해하기 쉬운 의미를 가진 차세대 지능형 웹"
  },
  {
    "no": 137,
    "page": 387,
    "en": "Meta Data",
    "full_en": "",
    "ko": "메타 데이터",
    "description": "일련의 데이터 정의, 설명"
  },
  {
    "no": 138,
    "page": 387,
    "en": "Collective Intelligence",
    "full_en": "",
    "ko": "집단 지성",
    "description": "서로 협력, 경쟁해 얻는 지적 능력의 결과로 얻어진 집단적 능력"
  },
  {
    "no": 139,
    "page": 388,
    "en": "XML",
    "full_en": "",
    "ko": "",
    "description": "HTML 떨어지는 호환성, SGML 복잡함 해결"
  },
  {
    "no": 140,
    "page": 388,
    "en": "WSDL",
    "full_en": "",
    "ko": "웹 서비스 기술 언어",
    "description": "웹 서비스 관련된 서식이나 프로토콜을 표준적 방법으로 기술하고 게시하기 위한 언어"
  },
  {
    "no": 141,
    "page": 388,
    "en": "Alt-Text",
    "full_en": "",
    "ko": "대체 텍스트",
    "description": "시각장애인이 게시된 이미지 이해도록 설명해주는 글, 문구"
  },
  {
    "no": 142,
    "page": 389,
    "en": "IP TV",
    "full_en": "",
    "ko": "",
    "description": "초고속 인터넷 이용 방송을 TV로 제공하는 양방향 서비스"
  },
  {
    "no": 143,
    "page": 389,
    "en": "WWW",
    "full_en": "",
    "ko": "",
    "description": "텍스트, 그림, 영상 등 다양한 정보를 거미줄처럼 연결해놓은 종합정보 서비스"
  },
  {
    "no": 144,
    "page": 389,
    "en": "디지털 원주민",
    "full_en": "",
    "ko": "",
    "description": "디지털 기술 어려서부터 사용"
  },
  {
    "no": 145,
    "page": 389,
    "en": "Relation Technology",
    "full_en": "",
    "ko": "관계기술",
    "description": "관계성 기반 새로운 기술 패러다임"
  },
  {
    "no": 146,
    "page": 390,
    "en": "Tagging",
    "full_en": "",
    "ko": "태그달기",
    "description": "태그를 다는 것"
  },
  {
    "no": 147,
    "page": 390,
    "en": "Quickdom",
    "full_en": "",
    "ko": "퀵돔",
    "description": "XXX.kr(2단계 영문 도메인)"
  },
  {
    "no": 148,
    "page": 390,
    "en": "DX",
    "full_en": "",
    "ko": "디지털 전환",
    "description": "디지털 기술을 활용해 전통적인 사회를 혁신해 경쟁력을 확보하는것"
  },
  {
    "no": 149,
    "page": 390,
    "en": "NB-IoT",
    "full_en": "",
    "ko": "협대역 사물 인터넷",
    "description": "사물인터넷을 위해 설계된 협대역 무선기술"
  },
  {
    "no": 150,
    "page": 396,
    "en": "Ad-hoc Network",
    "full_en": "",
    "ko": "애드혹 네트워크",
    "description": "모바일 호스트만을 이용해 구성한 네트워크"
  },
  {
    "no": 151,
    "page": 396,
    "en": "VHT",
    "full_en": "Very High Throughput",
    "ko": "",
    "description": "802.11n 후속, 802.11n 대비 두배 이상 전송속도인 1Gbps 이상 지원"
  },
  {
    "no": 152,
    "page": 396,
    "en": "STTD",
    "full_en": "Space Time Transmit Diversity",
    "ko": "시공간 송신 다이버시티",
    "description": "WCDMA시스템에 적용하는 송신다이버시티 방식, 송신안테나 2개 수신안테나 1개"
  },
  {
    "no": 153,
    "page": 396,
    "en": "Giga Fi",
    "full_en": "",
    "ko": "기가파이",
    "description": "60GHz 대역을 이용해 데이터를 기가급으로 전송할 수 있는 기술"
  },
  {
    "no": 154,
    "page": 397,
    "en": "MST",
    "full_en": "Magnetic Secure Transmission",
    "ko": "마그네틱 안전 전송",
    "description": "삼성전자 LoopPay 인수, 휴대폰을 마그네틱 결제 단말기에"
  },
  {
    "no": 155,
    "page": 397,
    "en": "WiFi",
    "full_en": "",
    "ko": "와이파이",
    "description": "무선랜 규격 802.11b"
  },
  {
    "no": 156,
    "page": 398,
    "en": "Thin client PC",
    "full_en": "",
    "ko": "신 클라이언트 PC",
    "description": "기본적인 메모리만 갖추고 서버와 네트워크로 운용되는 개인용 컴퓨터"
  },
  {
    "no": 157,
    "page": 398,
    "en": "phablet",
    "full_en": "",
    "ko": "패블릿",
    "description": "태블릿 기능을 포함한 5인치 이상의 대화면 스마트폰"
  },
  {
    "no": 158,
    "page": 398,
    "en": "A CN",
    "full_en": "",
    "ko": "",
    "description": "AP가 내장된 단말기로 구성된 네트워크"
  },
  {
    "no": 159,
    "page": 398,
    "en": "BYOD",
    "full_en": "Bring Your Own Device",
    "ko": "",
    "description": "개인소유 단말기 업무에 사용하는 환경"
  },
  {
    "no": 160,
    "page": 398,
    "en": "LTE",
    "full_en": "",
    "ko": "",
    "description": "4G 기술"
  },
  {
    "no": 161,
    "page": 399,
    "en": "Femtocell Base Station",
    "full_en": "",
    "ko": "펨토셀 기지국",
    "description": "사무실, 집에 설치하는 초소형 이동통신 기지국"
  },
  {
    "no": 162,
    "page": 399,
    "en": "PES",
    "full_en": "Personal Environment Service",
    "ko": "개인환경서비스",
    "description": "사용자에게 최적화된 생활환경 제공하는 서비스"
  },
  {
    "no": 163,
    "page": 399,
    "en": "Mobile Computing",
    "full_en": "",
    "ko": "모바일 컴퓨팅",
    "description": "휴대형 기기로 이동하며 자유로이 네트워크에 접속해 업무 처리"
  },
  {
    "no": 164,
    "page": 400,
    "en": "Netbook",
    "full_en": "",
    "ko": "넷북",
    "description": "휴대용 미니 노트북 컴퓨터"
  },
  {
    "no": 165,
    "page": 400,
    "en": "SCO",
    "full_en": "",
    "ko": "동기식 접속 지향 링크",
    "description": "블루투스 데이터 링크, 지정된 대역폭 통신을 위한 전용회선 동기 접속 방법"
  },
  {
    "no": 166,
    "page": 400,
    "en": "AP",
    "full_en": "",
    "ko": "무선 접속 장치",
    "description": "무선 랜과 유선 랜을 연결시켜주는 장비"
  },
  {
    "no": 167,
    "page": 401,
    "en": "Haptic Technology",
    "full_en": "",
    "ko": "촉각 기술",
    "description": "진동의 장단과 고저를 이용해 다양한 종류의 진동기호 만드는 기술"
  },
  {
    "no": 168,
    "page": 402,
    "en": "WCDMA",
    "full_en": "",
    "ko": "",
    "description": "제3세대 이동통신 시스템, 멀티미디어 전송 목적"
  },
  {
    "no": 169,
    "page": 402,
    "en": "WiBrO",
    "full_en": "",
    "ko": "와이브로",
    "description": "무선광대역, 고속 무선 인터넷 접속 가능 서비스"
  },
  {
    "no": 170,
    "page": 402,
    "en": "Femto Cell",
    "full_en": "",
    "ko": "펨토셀",
    "description": "기존 이동통신 서비스 반경보다 훨씬 작은 지역 커버하는 시스템"
  },
  {
    "no": 171,
    "page": 402,
    "en": "WIPI",
    "full_en": "",
    "ko": "위피",
    "description": "한국형 무선인터넷 플랫폼"
  },
  {
    "no": 172,
    "page": 403,
    "en": "Telematics",
    "full_en": "",
    "ko": "텔레매틱스",
    "description": "자동차와 무선통신 결합"
  },
  {
    "no": 173,
    "page": 404,
    "en": "C형 유에스비",
    "full_en": "",
    "ko": "",
    "description": "24핀 위아래 구분 없는 유에스비"
  },
  {
    "no": 174,
    "page": 404,
    "en": "WPAN",
    "full_en": "Wireless Personal Area Network",
    "ko": "단거리 무선망",
    "description": "가까운거리의 저가의 무선 통신망"
  },
  {
    "no": 175,
    "page": 404,
    "en": "MCC",
    "full_en": "",
    "ko": "모바일 클라우드 컴퓨팅",
    "description": "모바일기기를 통해 클라우드 컴퓨팅 인프라 구성"
  },
  {
    "no": 176,
    "page": 405,
    "en": "NR",
    "full_en": "New Radio",
    "ko": "",
    "description": "5세대 무선 접속기술"
  },
  {
    "no": 177,
    "page": 405,
    "en": "Wearable Technology",
    "full_en": "",
    "ko": "착용 기술",
    "description": "사용자가 IT 기기를 몸에 착용하도록 하는 기술"
  },
  {
    "no": 178,
    "page": 405,
    "en": "Digital Mesh",
    "full_en": "",
    "ko": "디지털 메시",
    "description": "가트너, 서로다른 성격의 기기들 연결, 그물같은 형태를 이루는것"
  },
  {
    "no": 179,
    "page": 406,
    "en": "AllJoyn",
    "full_en": "",
    "ko": "올조인",
    "description": "오픈소스 기반의 사물인터넷 플랫폼"
  },
  {
    "no": 180,
    "page": 406,
    "en": "WiFi HaLow",
    "full_en": "",
    "ko": "와이파이 헤일로",
    "description": "1GHz이하의 저주파 대역을 사용하는 와이파이 규격"
  },
  {
    "no": 181,
    "page": 406,
    "en": "K-ICT Free Band",
    "full_en": "",
    "ko": "용도 자유 대역",
    "description": "허가, 신고 없이 자유롭게 사용할 수 있는 주파수 대역"
  },
  {
    "no": 182,
    "page": 410,
    "en": "Service Level Agreement",
    "full_en": "",
    "ko": "서비스 수준 협약",
    "description": "서비스 사업자와 사용자가 여러 조건에 대한 서로의 책임과 의무 사항을 기술해놓은 협약서"
  },
  {
    "no": 183,
    "page": 410,
    "en": "PAD",
    "full_en": "Program Associated Data",
    "ko": "프로그램 연동 정보",
    "description": "전송되고 있는 프로그램의 내용과 부가적인 정보 설명, 방송에 관련"
  },
  {
    "no": 184,
    "page": 410,
    "en": "LBS",
    "full_en": "Location-Based Services",
    "ko": "위치 중심 서비스",
    "description": "이동통신망 기반, 위치 정확하게 파악, 응용 시스템 및 서비스"
  },
  {
    "no": 185,
    "page": 410,
    "en": "Digital Prosumer",
    "full_en": "",
    "ko": "디지털 프로슈머",
    "description": "인터넷 커뮤니티에 참여해 정보와 자료 얻는 소비자, 의견 개진해 생산에도 영향을 미치는 사람"
  },
  {
    "no": 186,
    "page": 411,
    "en": "LBSNS",
    "full_en": "",
    "ko": "위치기반 소셜네트워크 서비스",
    "description": "위치기반 서비스에 소셜네트워크 서비스 결합"
  },
  {
    "no": 187,
    "page": 411,
    "en": "Hadoop",
    "full_en": "",
    "ko": "하둡",
    "description": "오픈소스 기반의 분산 컴퓨팅 플랫폼"
  },
  {
    "no": 188,
    "page": 411,
    "en": "4K 해상도",
    "full_en": "",
    "ko": "",
    "description": "차세대 고화질 모니터 해상도 지칭 용어"
  },
  {
    "no": 189,
    "page": 411,
    "en": "Nomophobia",
    "full_en": "",
    "ko": "노모포비아",
    "description": "스마트폰이 곁에 없을 때 불안감, 두려움 느끼는 사람"
  },
  {
    "no": 190,
    "page": 411,
    "en": "Social Dining",
    "full_en": "",
    "ko": "",
    "description": "SNS통해 관심사 비슷한 사람끼리 저녁 먹는거"
  },
  {
    "no": 191,
    "page": 412,
    "en": "FinTech",
    "full_en": "",
    "ko": "금융기술",
    "description": "이동통신과 인터넷 기술을 금융산업과 전목시킨 서비스"
  },
  {
    "no": 192,
    "page": 412,
    "en": "cordCutters",
    "full_en": "",
    "ko": "코드커터족",
    "description": "텔레비전 방송 서비스 해지, 인터넷 방송 서비스를 선택"
  },
  {
    "no": 193,
    "page": 412,
    "en": "Posix",
    "full_en": "",
    "ko": "포직스",
    "description": "유닉스 기반 표준 운영체제 인터페이스, P1003"
  },
  {
    "no": 194,
    "page": 412,
    "en": "Foursquare",
    "full_en": "",
    "ko": "포스퀘어",
    "description": "모바일 기기에 특화된 위치기반 소셜 네트워크 서비스, 체크인, 배지"
  },
  {
    "no": 195,
    "page": 413,
    "en": "Infodemics",
    "full_en": "Information정보/Epidemics전염병",
    "ko": "인포데믹스",
    "description": "정보 확산으로 인한 각종 부작용"
  },
  {
    "no": 196,
    "page": 413,
    "en": "data Diet",
    "full_en": "",
    "ko": "데이터 다이어트",
    "description": "데이터 삭제x 압축, 겹친 정보 중복 배제, 새로운 기준에 나눠 저장하는 작업"
  },
  {
    "no": 197,
    "page": 413,
    "en": "Beacon",
    "full_en": "",
    "ko": "비컨",
    "description": "전파 이용, 프레임 동기신호 맞추고, 시스템 정보 전송, 블루투스 4.0기반"
  },
  {
    "no": 198,
    "page": 414,
    "en": "Vaporware",
    "full_en": "",
    "ko": "증발품",
    "description": "판매, 배포 계획 발표 하지만 아직 판매, 배포되지 않음"
  },
  {
    "no": 199,
    "page": 414,
    "en": "Subscription Commerce",
    "full_en": "",
    "ko": "",
    "description": "정기적 비용 지불 큐레이션 통해 주기적 배송받는것"
  },
  {
    "no": 200,
    "page": 414,
    "en": "Zapping Effect",
    "full_en": "",
    "ko": "재핑 효과",
    "description": "채널을 돌리다가 중간에 있는 채널의 시청률이 높아지는 현상"
  },
  {
    "no": 201,
    "page": 414,
    "en": "Bioinformatics",
    "full_en": "",
    "ko": "생명정보학",
    "description": "생명정보 처리하는 학문, 바이오칩"
  },
  {
    "no": 202,
    "page": 415,
    "en": "Smart Grid",
    "full_en": "",
    "ko": "스마트 그리드",
    "description": "정보기술을 전력이 접목 효율성 제고, 전력 IT, 에너지 절약형 전력망"
  },
  {
    "no": 203,
    "page": 415,
    "en": "Meformer",
    "full_en": "",
    "ko": "미포머",
    "description": "나를 알리는 데에만 열중하는 사람"
  },
  {
    "no": 204,
    "page": 415,
    "en": "Tajo",
    "full_en": "",
    "ko": "타조",
    "description": "오픈소스 기반 분산 컴퓨팅플랫폼 기반의 분산 데이터 웨어하우스 프로젝트"
  },
  {
    "no": 205,
    "page": 416,
    "en": "4d 프린팅",
    "full_en": "",
    "ko": "",
    "description": "특정 시간, 환경 조건이 갖춰지면 스스로 형태를 변화시키거나 자가조립 기술이 적용된 제품을 3d프린팅 하는 기술"
  },
  {
    "no": 206,
    "page": 416,
    "en": "Cresumer",
    "full_en": "prosumer 발전개념",
    "ko": "크리슈머",
    "description": "제품의 기능이나 가치에 스토리를 담아 새로운 문화 소비유행 만들어가는 사람들"
  },
  {
    "no": 207,
    "page": 416,
    "en": "Social Curation",
    "full_en": "",
    "ko": "소셜 큐레이션",
    "description": "다수 사용자가 자신의 취향대로 정보 가공, 다른사람들과 공유, 자신만의 전시회"
  },
  {
    "no": 208,
    "page": 416,
    "en": "VBR",
    "full_en": "Variable BitRate",
    "ko": "가변 비트레이트",
    "description": "부호화 할 때 상황에 따라 압축률을 다르게 하는 압축 방법"
  },
  {
    "no": 209,
    "page": 417,
    "en": "stereoscope",
    "full_en": "",
    "ko": "스테레오 스코프",
    "description": "하나의 물체 다른각도, 두장의 사진, 입체적으로 보이도록"
  },
  {
    "no": 210,
    "page": 417,
    "en": "OGSA",
    "full_en": "Open Grid Service Architecture",
    "ko": "오픈 그리드 서비스 아키텍쳐",
    "description": "앱공유를 위한 웹 서비스를 그리드 상에서 제공하기 위해 만든 개방형 표준"
  },
  {
    "no": 211,
    "page": 417,
    "en": "AJAX",
    "full_en": "",
    "ko": "비동기 자바 스크립트와 XML",
    "description": "자바스크립트와 XML로 데이터 교환, 새로고침 없이 웹페이지 기능 이용"
  },
  {
    "no": 212,
    "page": 417,
    "en": "EDI",
    "full_en": "Electronic Data Interchange",
    "ko": "전자 자료 교환",
    "description": "문서 표준화, 컴퓨터 통신망으로 거래 당사자가 직접 송수신하는 정보전달시스템"
  },
  {
    "no": 213,
    "page": 417,
    "en": "BEMS",
    "full_en": "Building Energy Management System",
    "ko": "건물 에너지 관리 시스템",
    "description": "건물, IT기술, 여러 건축설비 관리하는 시스템"
  },
  {
    "no": 214,
    "page": 418,
    "en": "TPS",
    "full_en": "Transaction Processing System",
    "ko": "거래 처리 시스템",
    "description": "기업에서 업무처리시 다양하게 발생하는 거래자료 전산화, 신속 정확하게 처리"
  },
  {
    "no": 215,
    "page": 418,
    "en": "Smart Divide",
    "full_en": "",
    "ko": "스마트 정보격차",
    "description": "스마트 미디어 활용자, 비활용자의 정보격차"
  },
  {
    "no": 216,
    "page": 418,
    "en": "CPM",
    "full_en": "",
    "ko": "기업 성과 관리",
    "description": "예측경영을 통한 최적의 의사결정 도와주는 시스템"
  },
  {
    "no": 217,
    "page": 418,
    "en": "Digital Archiving",
    "full_en": "",
    "ko": "디지털 아카이빙",
    "description": "디지털 정보자원 장기적 보존하기 위한 작업"
  },
  {
    "no": 218,
    "page": 418,
    "en": "Media Big Bang",
    "full_en": "",
    "ko": "미디어 빅뱅",
    "description": "새로운 미디어가 등장하여 기존 미디어 질서가 해체되는 미디어 환경변화"
  },
  {
    "no": 219,
    "page": 419,
    "en": "CEP",
    "full_en": "Complex Event Processing",
    "ko": "복잡 이벤트 처리",
    "description": "많은 사건중 의미가 있는것만 추출하도록 사건 발생 조건을 정의하는 데이터 처리방법"
  },
  {
    "no": 220,
    "page": 419,
    "en": "Green IT",
    "full_en": "",
    "ko": "그린 IT",
    "description": "정보기술 전 분야에서 유해물질 자제, 친환경 제품, 서비스 제공"
  },
  {
    "no": 221,
    "page": 419,
    "en": "Green Technology",
    "full_en": "",
    "ko": "녹색 기술",
    "description": "환경 친화적인 기술"
  },
  {
    "no": 222,
    "page": 419,
    "en": "DAISY",
    "full_en": "",
    "ko": "데이지",
    "description": "시각 장애인, 독서 장애인을 위한 국제 디지털 문서 포맷"
  },
  {
    "no": 223,
    "page": 420,
    "en": "SOA",
    "full_en": "Service Oriented Architecture",
    "ko": "서비스 지향 아키텍처",
    "description": "정보 시스템을 공유와 재사용이 가능한 서비스 단위, 컴포넌트 중심으로 구축하는 정보기술 아키텍처"
  },
  {
    "no": 224,
    "page": 420,
    "en": "OCAP",
    "full_en": "",
    "ko": "오픈 케이블 응용 플랫폼",
    "description": "모든 종합 유선방송에서 운용, 미들웨어 소프트웨어 계층"
  },
  {
    "no": 225,
    "page": 420,
    "en": "One Seg",
    "full_en": "",
    "ko": "원 세그",
    "description": "일본의 디지털 휴대 이동방송 서비스"
  },
  {
    "no": 226,
    "page": 420,
    "en": "Social Search",
    "full_en": "",
    "ko": "소셜 서치",
    "description": "특정 질문에 답변을 제시, 공통 관심사가 포함된 웹사이트나 여타 자료원의 링크를 제공하는 웹사이트 또는 서비스"
  },
  {
    "no": 227,
    "page": 421,
    "en": "Digilog",
    "full_en": "",
    "ko": "디지로그",
    "description": "디지털기술과 아날로그정서가 결합한 제품"
  },
  {
    "no": 228,
    "page": 421,
    "en": "QoE",
    "full_en": "",
    "ko": "체감 품질",
    "description": "서비스의 총체적인 허용도"
  },
  {
    "no": 229,
    "page": 421,
    "en": "ITS",
    "full_en": "",
    "ko": "지능형 교통 시스템",
    "description": "교통시스템에 첨단기술 접목"
  },
  {
    "no": 230,
    "page": 421,
    "en": "EIS",
    "full_en": "Executive Information System",
    "ko": "경영진 정보 시스템",
    "description": "최고경영자들이 조직 내외부의 정보를 효과적으로 제공하는 컴퓨터 기반 정보시스템"
  },
  {
    "no": 231,
    "page": 422,
    "en": "Gap Filler",
    "full_en": "",
    "ko": "갭 필러",
    "description": "DMB 서비스 제공시 위성 신호가 도달하지 못하는 지역 위해 신호 재생 중계"
  },
  {
    "no": 232,
    "page": 422,
    "en": "Deep Learning",
    "full_en": "",
    "ko": "딥러닝",
    "description": "인간의 두뇌를 모델로 만든 인공신경망"
  },
  {
    "no": 233,
    "page": 422,
    "en": "AI",
    "full_en": "",
    "ko": "인공지능",
    "description": "인간의 두뇌와 같이, 인간 지능적인 작업 수행"
  },
  {
    "no": 234,
    "page": 422,
    "en": "RAID",
    "full_en": "",
    "ko": "",
    "description": "여러 하드디스크로 배열 구성, 분산 저장할경우 디스크 속도 매우 향상"
  },
  {
    "no": 235,
    "page": 423,
    "en": "Force Touch",
    "full_en": "",
    "ko": "누름힘 접촉",
    "description": "아이폰에서 트랙패드와 터치스크린에 적용되는 기술"
  },
  {
    "no": 236,
    "page": 423,
    "en": "Stick-PC",
    "full_en": "",
    "ko": "막대형 컴퓨터",
    "description": "작고 긴 막대모양 컴퓨터, 단일보드 컴퓨터"
  },
  {
    "no": 237,
    "page": 423,
    "en": "Food Tech",
    "full_en": "",
    "ko": "먹거리 테크",
    "description": "식품관련 서비스업을 정보통신기술과 결합"
  },
  {
    "no": 238,
    "page": 424,
    "en": "SNG",
    "full_en": "Satellite News Gathering",
    "ko": "에스엔지",
    "description": "현장에서 촬영 영상 위성을 통해 방송사로 전송"
  },
  {
    "no": 239,
    "page": 424,
    "en": "MNG",
    "full_en": "Mobile",
    "ko": "엠엔지",
    "description": "야외 촬영 영상 무선망 접속장비를 통해 전송"
  },
  {
    "no": 240,
    "page": 424,
    "en": "USAP",
    "full_en": "",
    "ko": "",
    "description": "USB저장장치 송수신시 사용되는 컴퓨터 프로토콜, SCSI프로토콜 탑재"
  },
  {
    "no": 241,
    "page": 424,
    "en": "EFP",
    "full_en": "Electronic Field Production",
    "ko": "이에프피",
    "description": "스튜디오 말고 야외에서 촬영할때 사용되는 카메라 시스템"
  },
  {
    "no": 242,
    "page": 424,
    "en": "ENG",
    "full_en": "Electronic News Gathering",
    "ko": "이엔지",
    "description": "카메라와 녹화부가 탑제된 일체형 카메라 시스템"
  },
  {
    "no": 243,
    "page": 425,
    "en": "IPA",
    "full_en": "Intelligent Personal Assistant",
    "ko": "지능형 가상 비서",
    "description": "개인에게 맞춘 서비스나 업무 수행하는 소프트웨어 에이전트, ex) Siri,Google Now, S Voice"
  },
  {
    "no": 244,
    "page": 425,
    "en": "TensorFlow",
    "full_en": "",
    "ko": "텐서플로",
    "description": "구글의 구글브레인 팀이 만든 머신러닝을 위한 오픈소스 소프트웨어 라이브러리"
  },
  {
    "no": 245,
    "page": 425,
    "en": "Flat Design",
    "full_en": "",
    "ko": "평면 디자인",
    "description": "그림자나 기울기 등 3차원입체감을 주는 화려한 요소 사용 최소화 하는 디자인 장르"
  },
  {
    "no": 246,
    "page": "",
    "en": "Kill Switch",
    "full_en": "",
    "ko": "킬스위치",
    "description": "스마트폰 이용자가 도난당한 스마트폰의 작동을 웹사이트를 통해 정지할 수 있도록 하는 일종의 자폭기능이다. 이 기능을 통해 스마트폰의 불법유통, 도난이나 분실을 어느정도 막을 수 있다."
  },
  {
    "no": 247,
    "page": "",
    "en": "Click Farm",
    "full_en": "",
    "ko": "클릭농장",
    "description": "인터넷에서 특정 상품의 조회수, 앱 다운로드 수 등을 조작할 목적으로 가짜 클릭을 대량으로 생산하는 행위나 생산하는 곳을 말한다. 주로 저임금 근로자들, 자동화된 스크립트, 컴퓨터 프로그램 등을 이용하여 특정 게시글의 좋아요, 추천수, 조회수, 팔로워 구독자 수를 조작하여 이용자들을 속인다."
  },
  {
    "no": 248,
    "page": "",
    "en": "BIT",
    "full_en": "",
    "ko": "BIO Iformation Technology",
    "description": "생명기술(BT)와 정보기술(IT)의 합성어로 크게 생명정보학, 바이오칩, BIO-MEMS로 기술영역이 구성됨."
  },
  {
    "no": 249,
    "page": "",
    "en": "HMD",
    "full_en": "Head Mounted Display",
    "ko": "머리 장착형 디스플레이",
    "description": "사람이 눈이 볼 수 있는 시야각 전체에 영상이 꽉 차게 들어올 수 있도록 머리에 부착하는 디스플레이 장치"
  },
  {
    "no": 250,
    "page": "",
    "en": "Space Club",
    "full_en": "",
    "ko": "",
    "description": "자체 기술로 자신의 우주기지에서 로켓을 성공적으로 발사한 나라를 말함."
  },
  {
    "no": 251,
    "page": "",
    "en": "EA",
    "full_en": "Enpterprise Archtecture",
    "ko": "엔터프라이즈 아키텍처",
    "description": "기업 정보와 관련된 자원을 단순화하고 재사용성을 재대화함으로써 변화에 신속하게 대응하도록 기업내 최고정보책임자(CIO)들이 마련하는 밑그림"
  },
  {
    "no": 252,
    "page": "",
    "en": "SDN",
    "full_en": "Software Defined Network",
    "ko": "소프트정의 네트워크",
    "description": "전통적인 네트워크 장비들에서는 결한되어있는 제어부와 데이터부를 분리한 후 네트워크 제어부들을 한곳에 모아 중앙 집중형으로 관리하는 일종의 네트워크 가상화 기술"
  },
  {
    "no": 253,
    "page": "",
    "en": "OLAP",
    "full_en": "Online Analytical Processing",
    "ko": "올랩",
    "description": "사용자가 데이터베이스를 직접 검색하고 분석해서 문제점이나 해결책을 찾는 애플리케이션"
  },
  {
    "no": 254,
    "page": "",
    "en": "ICN",
    "full_en": "",
    "ko": "",
    "description": "통신을 기반으로 한 이전의 인터넷 통신 패러다임 정보 중심으로 재편성하려는 네트워킹을 가리킴 통신을 원하는 개체가 대상 호스트의 주소에 기반한 통신이 아닌 정보 식별자를 기반으로 하는 통신"
  },
  {
    "no": 255,
    "page": "",
    "en": "TEE",
    "full_en": "Trusted Execution Environment",
    "ko": "신뢰 실행 환경",
    "description": "프로세서 내에 일반 영역과 다른 보안 영역을 제공함으로써, 보안 관련 애플리케이션이 다른 애플리케이션의 영향을 받지 않고 안전하게 실행될 수 있도록 조성된 환경을 의미한다."
  },
  {
    "no": 256,
    "page": "",
    "en": "Bitcoin",
    "full_en": "",
    "ko": "비트코인",
    "description": "디지털 정보량 기본단위인 비트(bit)로 표시한 전자 화폐, 2009년 1월 부터 인터넷 개인간(P2P) 거래에 쓰이기 시작함."
  },
  {
    "no": 257,
    "page": "",
    "en": "ITIL",
    "full_en": "Information Technology Infrastructure Library",
    "ko": "",
    "description": "IT서비스 분야의 우수 사례를 모은 책들. 1980년대 영국정부 기관인 OGC가 개발했으며 전세계 기업으로부터 효율성을 인정받아 사실상의 표준 IT관리 가이드라인으로 활용되고 있다."
  },
  {
    "no": 258,
    "page": "",
    "en": "AT",
    "full_en": "Agnostic Technology",
    "ko": "애그토스틱 기술",
    "description": "사용자가 아무지식 없어도 특정 시스템의 기능을 수행하거나 운영할 때 아무문제 없도록 해줌"
  },
  {
    "no": 259,
    "page": "",
    "en": "DB Sharding",
    "full_en": "",
    "ko": "데이터베이스 샤딩",
    "description": "샤드들을 생성해서 대용량 데이터들을 분산하여 저장하는 기술"
  },
  {
    "no": 260,
    "page": "",
    "en": "MQTT",
    "full_en": "Message Queuing Telemetry Transport",
    "ko": "엠큐티티",
    "description": "송신자가 메시지를 매개자에게 발행한 후 수신자가 메시지를 구독하는 방식"
  },
  {
    "no": 261,
    "page": "",
    "en": "connected car",
    "full_en": "",
    "ko": "커넥티드 카",
    "description": "자동차와 IT기술을 융합하여 인터넷 접속이 양방향 소통이 가능한 자동차"
  },
  {
    "no": 262,
    "page": "",
    "en": "UTIS",
    "full_en": "Urban Traffic Information System",
    "ko": "도시 교통 정보 시스템",
    "description": "GPS를 이용하여 차량의 이동경로, 속도를 산출하여 교통 정보를 제공하는 정보 시스템.(ITS에서 발달됨)"
  },
  {
    "no": 263,
    "page": "",
    "en": "CoAP",
    "full_en": "Constrained Application Protocol",
    "ko": "코앱",
    "description": "레스트 기반의 경량 메시지 전송규약"
  },
  {
    "no": 264,
    "page": "",
    "en": "Bimodal IT",
    "full_en": "",
    "ko": "이중 정보 기술",
    "description": "정보기술방식이 안정적이고 순차적으로 대응하는 방식과 불규칙적이고 실험적으로  대응하는 방식을 동시에 사용하는 경우를 말함."
  },
  {
    "no": 265,
    "page": "",
    "en": "Crowd - Sourcing",
    "full_en": "",
    "ko": "크라우드 소싱",
    "description": "기업 내부 사원이 해야하는 업무의 일부를 기업 외부 일반인들에게 저렴하게 시키는 방식"
  },
  {
    "no": 266,
    "page": "",
    "en": "랜드공격",
    "full_en": "",
    "ko": "",
    "description": "패킷의 출발지 주소나 포트를 목적지 주소나 포트와 동일하게함으로써 서비스 거부 상태에 빠지도록 하는 공격"
  },
  {
    "no": 267,
    "page": "",
    "en": "IMT-2020",
    "full_en": "",
    "ko": "",
    "description": "국제 전기 통신 연합에서 채택한 5세대 이동 통신에 대한 공식명칭(전송속도가 최대 20Gbps)"
  },
  {
    "no": 268,
    "page": "",
    "en": "Flipped Learning",
    "full_en": "",
    "ko": "역순학습, 플립트러닝",
    "description": "학생들이 정식 수업전에 미리 학습한 후, 정식 수업에서 수업을 진행하는 학습법"
  },
  {
    "no": 269,
    "page": "",
    "en": "MOOC",
    "full_en": "Massive Open Online Course",
    "ko": "온라인 공개 수업",
    "description": "인터넷 온라인을 통하여 세계를 상대로 진행하는 공개 강의"
  },
  {
    "no": 270,
    "page": "",
    "en": "SaaS",
    "full_en": "Software as a Service",
    "ko": "서비스형 소프트웨어",
    "description": "기업들이 필요로 하는 SW들을 인터넷을 통해 제공해주는 BM이다. ex) Google Apps, MS Office live, 웹 오피스"
  },
  {
    "no": 271,
    "page": "",
    "en": "DOI",
    "full_en": "Digital Object Identifier",
    "ko": "디지털 객체 식별자",
    "description": "디지털콘텐츠의 식별체계 및 저작권 정보관리를 하는 시스템 (e-book에서 사용 많이 함.)"
  },
  {
    "no": 272,
    "page": "",
    "en": "TVoD",
    "full_en": "Transactional Video on Demand",
    "ko": "건당 요금제 주문형 비디오",
    "description": "디지털 콘텐츠 1건을 이용할 때마다 요금 지불함."
  },
  {
    "no": 273,
    "page": "",
    "en": "SVoD",
    "full_en": "Subscription VoD",
    "ko": "가입형 주문형 비디오",
    "description": "사용자가 가입함과 동시에 다양한 디지털 콘텐츠 이용하는 방식"
  },
  {
    "no": 274,
    "page": "",
    "en": "APPC",
    "full_en": "Advanced Program to Program Communication",
    "ko": "",
    "description": "컴퓨터프로그램들이 네트워크상에서 통신할 때 사용하도록 한 프로토콜, OSI모델에서 응용계층, 다른 컴퓨터상 프로그램들이 커뮤니케이션 가능하도록 함."
  }
];
