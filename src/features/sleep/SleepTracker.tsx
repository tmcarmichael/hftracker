import React from "react";

const SleepTracker: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-bold mb-2">Sleep Tracker</h2>
      <p className="mb-4">Log your bedtime, wake-up times, and quality here.</p>
      {/* DEV placeholder - forms/chats/data from Redux/Apollo */}
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="bedtime">
            Bedtime
          </label>
          <input type="time" id="bedtime" className="border border-gray-300 rounded p-2 w-full" />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="wakeup">
            Wake-up Time
          </label>
          <input type="time" id="wakeup" className="border border-gray-300 rounded p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </section>
  );
};

export default SleepTracker;
