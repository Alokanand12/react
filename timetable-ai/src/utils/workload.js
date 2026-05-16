// src/utils/workload.js

export function calculateWorkload(timetable) {
  const load = {};

  Object.values(timetable).forEach((cls) => {
    Object.values(cls).forEach((day) => {
      day.forEach((slot) => {
        if (slot && slot.teacher) {
          load[slot.teacher] = (load[slot.teacher] || 0) + 1;
        }
      });
    });
  });

  return load;
}