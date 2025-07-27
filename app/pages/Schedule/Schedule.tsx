import { useNavigate, Link } from "react-router";
import React from "react";

export default function Schedule() { 
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const goToPreviousMonth = () => {
    console.log('Previous month clicked');
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    console.log('New date:', newDate);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    console.log('Next month clicked');
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    console.log('New date:', newDate);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);

  // Force re-render when currentDate changes
  React.useEffect(() => {
    console.log('Current date updated:', currentDate);
  }, [currentDate]);

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-8 left-8 z-20">
        <button 
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center"
          onClick={() => navigate("/home")}
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Back to Home
        </button>
      </div>
      <button
        className="absolute top-8 right-8 z-20 py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center"
        onClick={() => navigate("/chatbot")}
      >
        <span className="material-symbols-outlined mr-2">smart_toy</span>
        Start Interview
      </button>
      <section className="rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl">
	      <h2 className="text-2xl font-bold mb-6 flex items-center">
	        <span className="material-symbols-outlined mr-2">calendar_month</span>
	        
	      </h2>
	      <div className="grid md:grid-cols-3 gap-8">
	        <div className="md:col-span-2 relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:border-purple-300/40">
	          <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
	          
	          <div className="flex justify-between items-center mb-6">
	            <div className="flex items-center space-x-4">
	              <button 
	                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer active:scale-95 relative z-10"
	                onClick={goToPreviousMonth}
	                type="button"
	              >
	                <span className="material-symbols-outlined text-lg">chevron_left</span>
	              </button>
	              <h3 className="text-xl font-medium text-blue-100">{formatDate(currentDate)}</h3>
	              <button 
	                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer active:scale-95 relative z-10"
	                onClick={goToNextMonth}
	                type="button"
	              >
	                <span className="material-symbols-outlined text-lg">chevron_right</span>
	              </button>
	            </div>
	            <button 
	              className="px-3 py-1 rounded-lg bg-white/10 text-sm flex items-center hover:bg-white/20 transition-colors"
	              onClick={goToToday}
	            >
	              <span className="material-symbols-outlined text-sm mr-1">today</span>
	              Today
	            </button>
	          </div>
	          
	          <div className="grid grid-cols-7 gap-1 mb-2">
	            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
	              <div key={day} className="text-center text-xs font-medium text-blue-200/70 py-2">
	                {day}
	              </div>
	            ))}
	          </div>
	          
	          <div className="grid grid-cols-7 gap-1">
	            {Array.from({ length: 42 }, (_, i) => {
	              const day = i - startingDay + 1;
	              const isCurrentMonth = day > 0 && day <= daysInMonth;
	              const isTodayDate = isToday(day);
	              const isSelectedDate = isSelected(day);
	              const hasEvents = [3, 8, 12, 17, 22, 24].includes(day);
	              
	              return (
	                <div 
	                  key={i} 
                  onClick={() => isCurrentMonth && handleDateClick(day)}
	                  className={`aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-white/10 ${
	                    !isCurrentMonth ? 'text-blue-200/30' : 
	                    isSelectedDate ? 'bg-purple-500/30 border border-purple-400/50' :
	                    isTodayDate ? 'bg-blue-500/20 border border-blue-400/30' : 
	                    'border border-white/5'
	                  }`}
	                >
	                  <span className={`text-sm ${
	                    isSelectedDate ? 'font-bold text-purple-200' : 
	                    isTodayDate ? 'font-bold text-blue-200' : ''
	                  }`}>
	                    {isCurrentMonth ? day : ''}
	                  </span>
	                  {hasEvents && isCurrentMonth && (
	                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1"></div>
	                  )}
	                </div>
	              );
	            })}
	          </div>
	        </div>
	        
	        <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:border-purple-300/40">
	          <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
	          
	          <h3 className="text-xl font-medium text-blue-100 mb-4">Available Time Slots</h3>
	          <p className="text-blue-200/70 mb-4">
	            {selectedDate 
	              ? selectedDate.toLocaleDateString('en-US', { 
	                  weekday: 'long', 
	                  year: 'numeric', 
	                  month: 'long', 
	                  day: 'numeric' 
	                })
	              : 'Select a date'
	            }
	          </p>
	          
	          <div className="space-y-2 mb-6">
	            {[
	              { time: '9:00 AM - 10:00 AM', available: true },
	              { time: '10:30 AM - 11:30 AM', available: true },
	              { time: '1:00 PM - 2:00 PM', available: false },
	              { time: '2:30 PM - 3:30 PM', available: true },
	              { time: '4:00 PM - 5:00 PM', available: true },
	            ].map((slot, index) => (
	              <div 
	                key={index}
	                className={`p-3 rounded-lg border ${
	                  slot.available 
	                    ? 'border-purple-400/30 bg-purple-500/10 cursor-pointer hover:bg-purple-500/20 transition-colors' 
	                    : 'border-white/10 bg-white/5 opacity-50'
	                }`}
	              >
	                <div className="flex justify-between items-center">
	                  <span className={slot.available ? 'text-blue-100' : 'text-blue-200/50'}>
	                    {slot.time}
	                  </span>
	                  {slot.available ? (
	                    <span className="material-symbols-outlined text-purple-300 text-sm">add_circle</span>
	                  ) : (
	                    <span className="text-xs text-blue-200/50">Booked</span>
	                  )}
	                </div>
	              </div>
	            ))}
	          </div>
	          
	          <div className="flex justify-between items-center">
	            <div className="flex space-x-2">
	              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
	                <i className="fa-brands fa-google text-lg"></i>
	              </button>
	              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
	                <i className="fa-brands fa-microsoft text-lg"></i>
	              </button>
	            </div>
	            <button 
	              className="py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:translate-y-[-2px] flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
	              disabled={!selectedDate}
	            >
	              <span className="material-symbols-outlined mr-2">schedule</span>
	              Schedule
	            </button>
	          </div>
	        </div>
	      </div>
	      {/* Next: "Add timezone selector and recurring interview option" */}
	    </section>
    </div>
  );
}