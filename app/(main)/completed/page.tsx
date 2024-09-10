import TaskCard from "@/components/TaskCard/TaskCard";

export default function Page() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          Completed Tasks
        </h1>
      </header>
      <div className="mt-8 flex flex-warp gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
