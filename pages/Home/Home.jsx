import Panel from "../../components/Panel";
import VBox from "../../components/VBox";
import HBox from "../../components/HBox";

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        <Panel className="p-4">
          <VBox>
            <h3 className="font-semibold">Feeder Status</h3>
            <div className="text-sm text-gray-600">2 feeders online</div>
          </VBox>
        </Panel>

        <Panel className="p-4 col-span-2">
          <VBox>
            <h3 className="font-semibold">Upcoming Feedings</h3>
            <div className="mt-2 text-sm text-gray-600">
              No scheduled feedings for today
            </div>
          </VBox>
        </Panel>

        <Panel className="p-4 col-span-3">
          <HBox>
            <div className="flex-1">
              <h3 className="font-semibold">Recent Activity</h3>
              <div className="mt-2 text-sm text-gray-600">
                Feeder A dispensed 20g — 10 minutes ago
              </div>
            </div>
          </HBox>
        </Panel>
      </div>
    </div>
  );
};

export default Home;
