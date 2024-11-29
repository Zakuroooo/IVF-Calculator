import { useState } from "react";

function CycleSelector() {
  const [cycles, setCycles] = useState(1);
  const maxCycles = 6;

  const handleChange = (e) => {
    setCycles(parseInt(e.target.value));
  };

  const percentage = ((cycles - 1) / (maxCycles - 1)) * 100;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Number of IVF Cycles?</h2>

      <div className="relative w-full h-10">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-full bg-red-400 rounded-full transition-all duration-200"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <input
          type="range"
          min="1"
          max={maxCycles}
          value={cycles}
          onChange={handleChange}
          className="absolute top-1/2 -translate-y-1/2 w-full h-2 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-red-400 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>

      <div className="mt-4">
        <span className="bg-red-400 text-white px-3 py-1 rounded">
          {cycles}
        </span>
      </div>
    </div>
  );
}

export default CycleSelector;
