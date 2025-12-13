import Panel from "../../components/Panel";
import VBox from "../../components/VBox";

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      <Panel className="p-4">
        <VBox className="gap-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Notifications</div>
              <div className="text-sm text-gray-600">
                Receive alerts about feeder status
              </div>
            </div>
            <input type="checkbox" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Auto-updates</div>
              <div className="text-sm text-gray-600">
                Automatically install firmware updates
              </div>
            </div>
            <input type="checkbox" />
          </div>
        </VBox>
      </Panel>
    </div>
  );
};

export default Settings;
