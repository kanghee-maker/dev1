export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                홈
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                소개
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                프로젝트
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                연락처
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">강희</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              안녕하세요,
              <br />
              <span className="text-blue-600 dark:text-blue-400">이강희</span>입니다
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Android, IoT, Tizen 플랫폼에서 네이티브 애플리케이션을 개발하는 소프트웨어 엔지니어입니다.
              삼성전자에서 SmartThings와 Tizen 생태계 구축에 기여하고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                프로젝트 보기
          </a>
          <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                연락하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              소개
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              저에 대해 더 알아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                개발자 이강희
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                10년 이상의 모바일 및 임베디드 시스템 개발 경험을 바탕으로 
                안정적이고 효율적인 네이티브 애플리케이션을 구축합니다. 
                새로운 기술 학습과 팀과의 협업을 즐기며, 항상 더 나은 코드를 작성하기 위해 노력합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                현재는 Android, Kotlin, C/C++을 주로 사용하며, 
                IoT 생태계와 디바이스 간 연결성에 관심이 많습니다.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                기술 스택
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile/Native</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Android / Kotlin</li>
                    <li>Java</li>
                    <li>RxJava / RxKotlin</li>
                    <li>Coroutine</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">IoT/Platform</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Iotivity / OCF</li>
                    <li>SmartThings SDK</li>
                    <li>Tizen Native</li>
                    <li>EFL Framework</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">System/Language</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>C / C++</li>
                    <li>Linux Embedded</li>
                    <li>RTOS</li>
                    <li>IPC / Threading</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Tools</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Git / Gerrit</li>
                    <li>Android Studio</li>
                    <li>GDB / Valgrind</li>
                    <li>Jenkins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              프로젝트
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              제가 작업한 주요 프로젝트들입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  SmartThings Onboarding
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Android 기반 SmartThings 디바이스 온보딩 시스템 개발
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    Android
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                    RxJava
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                    RxKotlin
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    Coroutine
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Samsung SmartThings
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  SmartThings OCF Client
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  IoT 디바이스 간 통신을 위한 OCF(Open Connectivity Foundation) 클라이언트 구현
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm rounded-full">
                    Iotivity
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                    OCF
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                    IoT
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Samsung SmartThings
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tizen Home App & UIFW
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Tizen OS 기반 홈 애플리케이션 및 UI 프레임워크 개발
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full">
                    Tizen
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    EFL
                  </span>
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-sm rounded-full">
                    Native App
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Samsung Tizen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              연락처
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              언제든지 연락주세요!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  연락 방법
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 dark:text-blue-400">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">이메일</p>
                      <p className="text-gray-600 dark:text-gray-400">khee85.lee@samsung.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 dark:text-green-400">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">전화번호</p>
                      <p className="text-gray-600 dark:text-gray-400">010-2578-9829</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 dark:text-purple-400">🌐</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-400">github.com/username</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  메시지 보내기
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      메시지
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="메시지를 입력해주세요"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 이강희. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
