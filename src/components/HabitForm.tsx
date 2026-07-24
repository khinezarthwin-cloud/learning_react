import { Button } from "./Button";

export function HabitForm() {
    return (
        <form  className="flex gap-2">
            <input type="text" className="flex-1 rounded-lg bg-zinc-800
             px-4 py-2 outline-none focus-visible:ring-2 ring-violet-600"
              placeholder="What is your main focus for today?
            " />
            <Button>Add Habit</Button>
        </form>
    );
}