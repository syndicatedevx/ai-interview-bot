import { useNavigate, Link } from "react-router";
import React from "react";

export default function Chatbot() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-8 left-8 z-20">
        <button 
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center"
          onClick={() => navigate("/schedule")}
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Back to Schedule
        </button>
      </div>
      <section className="rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="material-symbols-outlined mr-2">smart_toy</span>
        AI Interview
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
          <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div>
                <h3 className="font-medium">AI Interviewer</h3>
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
          
          <div className="h-[400px] overflow-y-auto pr-2 space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                <p className="text-blue-100">Hello John! I'm your AI interviewer today. I'll be asking you some questions about your experience with React and front-end development. Are you ready to begin?</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                <p className="text-blue-100">Yes, I'm ready. Looking forward to the interview!</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                <p className="text-blue-100">Great! Let's start with something basic. Can you explain the difference between controlled and uncontrolled components in React?</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                <p className="text-blue-100">Controlled components are those where form data is handled by React components. The component's state serves as the "single source of truth" for input elements. In uncontrolled components, form data is handled by the DOM itself, using refs to access values rather than setting state.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-none p-3 max-w-[80%] relative">
                <div className="flex space-x-1 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-100"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200"></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 mb-4 text-blue-200/70 text-sm">
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
        
        <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
          <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
          
          <h3 className="text-xl font-medium text-blue-100 mb-4 flex items-center">
            <span className="material-symbols-outlined mr-2">assessment</span>
            Interview Progress
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-100">Question 1/5</span>
                <span className="text-xs text-blue-200/70">20%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-blue-100">Topics Covered</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-green-400 text-sm mr-2">check_circle</span>
                  <span className="text-sm text-blue-100">React Basics</span>
                </div>
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
            
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-medium text-blue-100 mb-3">Quick Actions</h4>
              <div className="space-y-2">
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