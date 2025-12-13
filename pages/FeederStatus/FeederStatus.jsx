import Panel from "../../components/Panel";
import VBox from "../../components/VBox";
import HBox from "../../components/HBox";

const FeederStatus = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Feeder Status</h2>

      <div className="grid grid-cols-2 gap-4">
        <Panel className="p-4">
          <VBox>
            <h3 className="font-semibold">Feeder A</h3>
            <div className="text-sm text-gray-600">
              Online · Last ping 1m ago
            </div>
            <div className="mt-3">
              <button className="bg-primary/60 text-white px-4 py-2 rounded-lg">
                Dispense
              </button>
            </div>
          </VBox>
        </Panel>

        <Panel className="p-4">
          <VBox>
            <h3 className="font-semibold">Feeder B</h3>
            <div className="text-sm text-gray-600">
              Offline · Last ping 2d ago
            </div>
            <div className="mt-3">
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                Retry
              </button>
            </div>
          </VBox>
        </Panel>
      </div>
    </div>
  );
};

export default FeederStatus;
