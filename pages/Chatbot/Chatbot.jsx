import Panel from "../../components/Panel";
import VBox from "../../components/VBox";

const Chatbot = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>

      <Panel className="p-4">
        <VBox>
          <div className="h-64 bg-gray-50 rounded-lg p-3 overflow-auto">
            Chat history will appear here.
          </div>

          <div className="mt-3 flex gap-2">
            <input
              className="flex-1 border rounded-lg p-2"
              placeholder="Ask the assistant..."
            />
            <button className="bg-primary/60 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </VBox>
      </Panel>
    </div>
  );
};

export default Chatbot;
