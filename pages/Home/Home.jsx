import Panel from "../../components/Panel";
import VBox from "../../components/VBox";
import HBox from "../../components/HBox";
import { useState } from "react";

function Home() {
  const [tab, setTab] = useState("snack");
  const [amount, setAmount] = useState(50);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold mb-6">Home</h1>

      <div className="grid grid-cols-3 gap-4 items-stretch mb-6">
        <Panel className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Storage</h3>
            <div className="text-sm text-gray-600 mb-4">100%</div>
            <div className="mx-auto w-28 h-28 rounded-md bg-[#b89f84] border-2 border-black/20" />
          </div>
        </Panel>

        <Panel className="p-6">
          <div className="text-center flex flex-col items-center justify-center h-full">
            <h3 className="text-lg font-semibold mb-2">Bowl</h3>
            <div className="text-gray-600 flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className=""
              >
                <path
                  d="M12 2v4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="14"
                  r="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>Empty</div>
            </div>
          </div>
        </Panel>

        <div className="flex flex-col gap-4">
          <Panel className="p-6">
            <div className="text-center">
              <div className="text-xl font-semibold">2 Hours</div>
              <div className="text-sm text-gray-600">since last session</div>
            </div>
          </Panel>

          <Panel className="p-6">
            <div className="text-center">
              <div className="text-xl font-semibold">1 Hour</div>
              <div className="text-sm text-gray-600">until next session</div>
            </div>
          </Panel>
        </div>
      </div>

      <hr className="border-t-2 border-black/90 mb-6" />

      <div className="max-w-lg">
        <Panel className="p-6">
          <VBox>
            <h3 className="text-xl font-semibold mb-4">Manual Feeding</h3>

            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded-lg ${
                  tab === "snack" ? "bg-[#cbb49f]" : "bg-white"
                }`}
                onClick={() => setTab("snack")}
              >
                Light Snack
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  tab === "meal" ? "bg-[#cbb49f]" : "bg-white"
                }`}
                onClick={() => setTab("meal")}
              >
                Full Meal
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  tab === "empty" ? "bg-[#cbb49f]" : "bg-white"
                }`}
                onClick={() => setTab("empty")}
              >
                Dispense Until Empty
              </button>
            </div>

            <div className="mb-2">
              <input
                type="range"
                min="0"
                max="200"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="text-sm text-gray-600 mb-4">{amount}g</div>

            <button className="px-4 py-2 rounded-lg panel">
              Dispense Food
            </button>
          </VBox>
        </Panel>
      </div>
    </div>
  );
}

export default Home;
