import { useState, type FormEvent } from "react";
import { Button } from "./Button";

type HabitFormProps = {
  addHabit: (name: string) => void;
};

export function HabitForm({ addHabit }: HabitFormProps) {
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name.trim() === "") return setName("");
    addHabit(name);
    setName("");
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="flex-1 rounded-lg bg-zinc-800
             px-4 py-2 outline-none focus-visible:ring-2 ring-violet-600"
        placeholder="What is your main focus for today?
            "
      />
      <Button className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>
    </form>
  );
}
