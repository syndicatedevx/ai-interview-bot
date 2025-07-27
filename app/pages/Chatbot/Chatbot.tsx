import { useNavigate } from "react-router";
import React from "react";

export default function Chatbot() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="absolute top-4 left-4 z-20">
        <button 
          className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center justify-center"
          onClick={() => navigate("/schedule")}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>

      <section className="flex-1 mt-16 overflow-hidden p-4 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl flex flex-col mx-4">
        <h2 className="text-lg font-bold mb-3 flex items-center text-white">
          <span className="material-symbols-outlined mr-2">smart_toy</span>
          AI Interview
        </h2>

        <div className="grid md:grid-cols-3 gap-4 flex-1 overflow-hidden">
          {/* Left Panel: Chat Area */}
          <div className="md:col-span-2 relative flex flex-col overflow-hidden backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div>
                  <h3 className="font-medium text-white">AI Interviewer</h3>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
                    <span className="text-xs text-blue-200/70">Active</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-sm">volume_up</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-sm">settings</span>
                </button>
              </div>
            </div>

            {/* Scrollable Chat Messages */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-2 mb-3">
              {/* Example Chat Messages - Modern Bubble Style */}
              {/* Bot message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div className="bg-white/80 text-gray-900 rounded-2xl rounded-tl-none p-3 max-w-[75%] shadow-md">
                  <p className="">Hello! I'm your AI interviewer. Let's get started. Can you tell me a bit about your experience with React?</p>
                  <span className="block text-xs text-gray-400 mt-1">09:00</span>
                </div>
              </div>
              {/* User message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none p-3 max-w-[75%] shadow-md ml-auto">
                  <p className="">Hi! I have 3 years of experience building React apps, mostly with TypeScript and Redux.</p>
                  <span className="block text-xs text-blue-200 mt-1 text-right">09:01</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">person</span>
                </div>
              </div>
              {/* Bot message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div className="bg-white/80 text-gray-900 rounded-2xl rounded-tl-none p-3 max-w-[75%] shadow-md">
                  <p className="">That's great! Can you explain the difference between controlled and uncontrolled components in React?</p>
                  <span className="block text-xs text-gray-400 mt-1">09:02</span>
                </div>
              </div>
              {/* User message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none p-3 max-w-[75%] shadow-md ml-auto">
                  <p className="">Sure! Controlled components rely on React state for their value, while uncontrolled components use refs and the DOM. Controlled is more predictable for forms.</p>
                  <span className="block text-xs text-blue-200 mt-1 text-right">09:03</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">person</span>
                </div>
              </div>
              {/* Bot typing indicator */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div className="bg-white/80 text-gray-900 rounded-2xl rounded-tl-none p-3 max-w-[75%] shadow-md flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-1"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-1 delay-100"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200"></span>
                </div>
              </div>
            </div>

            {/* Chat Input + Transcription */}
            <div className="border-t border-white/10 pt-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 mb-2 text-blue-200/70 text-sm">
                <p>Real-time transcription: "...difference between controlled and uncontrolled components in React..."</p>
              </div>

              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined">mic</span>
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 pr-10 text-white"
                    placeholder="Type your answer..."
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Progress */}
          <div className="relative flex flex-col overflow-auto backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>

            <h3 className="text-lg font-medium text-blue-100 mb-3 flex items-center">
              <span className="material-symbols-outlined mr-2">assessment</span>
              Interview Progress
            </h3>

            <div className="space-y-3 flex-1 overflow-y-auto">
              {/* Progress Bar */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-100">Question 1/5</span>
                  <span className="text-xs text-blue-200/70">20%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-blue-100">Topics Covered</h4>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-green-400 text-sm mr-2">check_circle</span>
                    <span className="text-sm text-blue-100">React Basics</span>
                  </div>
                  {/* <div className="pl-6 space-y-1">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-blue-400 text-sm mr-2">radio_button_unchecked</span>
                      <span className="text-sm text-blue-200/70">Hooks</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-blue-400 text-sm mr-2">radio_button_unchecked</span>
                      <span className="text-sm text-blue-200/70">Context API</span>
                    </div>
                  </div> */}
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-blue-400 text-sm mr-2">radio_button_unchecked</span>
                    <span className="text-sm text-blue-200/70">State Management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-blue-400 text-sm mr-2">radio_button_unchecked</span>
                    <span className="text-sm text-blue-200/70">Performance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-blue-400 text-sm mr-2">radio_button_unchecked</span>
                    <span className="text-sm text-blue-200/70">Testing</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-blue-400 text-sm mr-2">radio_button_unchecked</span>
                    <span className="text-sm text-blue-200/70">Best Practices</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-3 border-t border-white/10">
                <h4 className="text-sm font-medium text-blue-100 mb-2">Quick Actions</h4>
                <div className="space-y-1">
                  <button className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-blue-100 flex items-center">
                    <span className="material-symbols-outlined text-sm mr-2">pause</span>
                    Pause Interview
                  </button>
                  <button className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-blue-100 flex items-center">
                    <span className="material-symbols-outlined text-sm mr-2">help</span>
                    Get Help
                  </button>
                  <button className="w-full py-2 px-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors text-sm text-red-200 flex items-center">
                    <span className="material-symbols-outlined text-sm mr-2">stop</span>
                    End Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
