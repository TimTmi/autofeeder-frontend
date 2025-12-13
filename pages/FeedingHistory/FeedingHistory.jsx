import Panel from "../../components/Panel";
import VBox from "../../components/VBox";

const FeedingHistory = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Feeding Log</h2>

      <Panel className="p-4">
        <VBox>
          <table className="w-full text-left text-sm">
            <thead>
              <tr>
                <th className="pb-2">Time</th>
                <th className="pb-2">Feeder</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">2025-12-13 09:20</td>
                <td className="py-2">Feeder A</td>
                <td className="py-2">20g</td>
                <td className="py-2">Success</td>
              </tr>
            </tbody>
          </table>
        </VBox>
      </Panel>
    </div>
  );
};

export default FeedingHistory;
