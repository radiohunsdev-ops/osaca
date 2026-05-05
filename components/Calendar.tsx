type CalendarProps = {
  currentDate: Date;
};

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function Calendar({ currentDate }: CalendarProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const dates: { day: number; currentMonth: boolean }[] = [];

  // Previous month filler
  for (let i = firstDay - 1; i >= 0; i--) {
    dates.push({
      day: prevMonthDays - i,
      currentMonth: false,
    });
  }

  // Current month
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      day: i,
      currentMonth: true,
    });
  }

  // Next month filler
  while (dates.length < 42) {
    dates.push({
      day: dates.length - (firstDay + daysInMonth) + 1,
      currentMonth: false,
    });
  }

  const today = new Date();

  return (
    <div className="bg-[#F6F1E7] px-3 py-6 sm:px-6 sm:py-12 lg:px-10 lg:py-20">
      {/* Days */}
      <div className="grid grid-cols-7 mb-4 text-center tracking-widest text-[#1F2D2D] text-xs sm:text-sm lg:text-base">
        {days.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 grid-rows-6 border border-[#EFE4D2] bg-white">
        {dates.map((date, i) => {
          const isToday =
            date.currentMonth &&
            date.day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={i}
              className={`relative h-10 sm:h-16 md:h-20 lg:h-27 border border-[#EFE4D2]
              ${!date.currentMonth ? "bg-gray-50 text-gray-400" : ""}
              ${isToday ? "bg-[#01249E] text-white" : ""}
              `}
            >
              <span className="absolute top-1 right-1 sm:top-2 sm:right-2 lg:top-4 lg:right-4 text-[10px] sm:text-xs lg:text-sm font-light">
                {date.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
