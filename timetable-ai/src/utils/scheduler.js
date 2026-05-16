export function generateTimetable(data) {
  const timetable = {};

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const isTeacherFree = (teacher, timetable, day, slot) => {
    for (let cls in timetable) {
      if (timetable[cls][day][slot]?.teacher === teacher) return false;
    }
    return true;
  };

  data.classes.forEach((cls) => {
    timetable[cls] = {};
    data.days.forEach((day) => {
      timetable[cls][day] = Array(data.slots).fill(null);
    });

    data.subjects.forEach((sub) => {
      let hours = sub.hours;
      let maxTries = 1000; // ✅ Infinite loop fix

      while (hours > 0 && maxTries > 0) {
        let day = random(data.days);
        let slot = Math.floor(Math.random() * data.slots);
        maxTries--;

        if (
          !timetable[cls][day][slot] &&
          isTeacherFree(sub.teacher, timetable, day, slot)
        ) {
          timetable[cls][day][slot] = {
            subject: sub.name,
            teacher: sub.teacher,
          };
          hours--;
        }
      }

      if (hours > 0) {
        console.warn(`⚠️ Could not place all hours for subject: ${sub.name}`);
      }
    });
  });

  return timetable;
}