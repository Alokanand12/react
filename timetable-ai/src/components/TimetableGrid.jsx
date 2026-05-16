import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const SUBJECT_COLORS = {
  Math: "bg-blue-500/80",
  DBMS: "bg-green-500/80",
  OS: "bg-purple-500/80",
  Default: "bg-yellow-500/80",
};

const getColor = (subject) =>
  SUBJECT_COLORS[subject] || SUBJECT_COLORS["Default"];

export default function TimetableGrid({ timetable, setTimetable }) {
  if (!timetable) return null;

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newTable = JSON.parse(JSON.stringify(timetable)); // deep copy

    const [cls1, day1, slot1] = result.source.droppableId.split("||");
    const [cls2, day2, slot2] = result.destination.droppableId.split("||");

    const temp = newTable[cls1][day1][Number(slot1)];
    newTable[cls1][day1][Number(slot1)] = newTable[cls2][day2][Number(slot2)];
    newTable[cls2][day2][Number(slot2)] = temp;

    setTimetable(newTable);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div id="timetable" className="p-4 space-y-8">
        {Object.keys(timetable).map((cls) => {
          const days = Object.keys(timetable[cls]);
          const slots = timetable[cls][days[0]].length;

          return (
            <div
              key={cls}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
            >
              <h2 className="text-xl font-bold mb-4 text-white tracking-wide">
                📚 Class: {cls}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-white border-collapse">
                  <thead>
                    <tr>
                      <th className="py-2 px-3 bg-white/20 rounded-tl-xl text-left">
                        Day / Slot
                      </th>
                      {Array.from({ length: slots }, (_, i) => (
                        <th
                          key={i}
                          className="py-2 px-3 bg-white/20 text-center"
                        >
                          🕐 Slot {i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {days.map((day) => (
                      <tr key={day} className="border-t border-white/10">
                        <td className="py-2 px-3 font-semibold bg-white/10 rounded-l-lg">
                          {day}
                        </td>

                        {timetable[cls][day].map((item, i) => (
                          <td key={i} className="py-1 px-1 text-center">
                            <Droppable droppableId={`${cls}||${day}||${i}`}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                  className={`min-h-[52px] rounded-xl flex items-center justify-center transition-all duration-200 ${
                                    snapshot.isDraggingOver
                                      ? "bg-white/30 scale-105 ring-2 ring-white"
                                      : "bg-white/5"
                                  }`}
                                >
                                  {item ? (
                                    <Draggable
                                      key={`${cls}-${day}-${i}`}
                                      draggableId={`${cls}-${day}-${i}`}
                                      index={0}
                                    >
                                      {(p, snap) => (
                                        <div
                                          ref={p.innerRef}
                                          {...p.draggableProps}
                                          {...p.dragHandleProps}
                                          className={`w-full rounded-xl px-2 py-2 text-center cursor-grab active:cursor-grabbing transition-all duration-150 ${getColor(
                                            item.subject
                                          )} ${
                                            snap.isDragging
                                              ? "shadow-2xl scale-110 rotate-1"
                                              : "hover:scale-105"
                                          }`}
                                        >
                                          <p className="font-bold text-xs">
                                            {item.subject}
                                          </p>
                                          <p className="text-[10px] opacity-80">
                                            {item.teacher}
                                          </p>
                                        </div>
                                      )}
                                    </Draggable>
                                  ) : (
                                    <span className="text-white/30 text-xs">
                                      —
                                    </span>
                                  )}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
}