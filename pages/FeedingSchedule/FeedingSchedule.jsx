import Panel from "../../components/Panel";
import VBox from "../../components/VBox";
import HBox from "../../components/HBox";

const FeedingSchedule = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Feeding Schedule</h2>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">Manage scheduled feedings</div>
        <button className="bg-primary/60 text-white px-4 py-2 rounded-lg">
          Add schedule
        </button>
      </div>

      <Panel className="p-4">
        <VBox>
          <div className="grid grid-cols-3 gap-3">
            <div className="font-medium">Time</div>
            <div className="font-medium">Amount</div>
            <div className="font-medium">Days</div>
          </div>

          <div className="mt-3 text-sm text-gray-600">No schedules yet.</div>
        </VBox>
      </Panel>
    </div>
  );
};

export default FeedingSchedule;
