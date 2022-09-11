// Calendar imports
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  const today = new Date();

  const [selectedDay, setSelectedDay] = useState(today);

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      weekStartsOn={1}
      className="transition"
      required
      defaultSelected
    />
  );
}
