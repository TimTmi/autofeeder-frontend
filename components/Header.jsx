import HBox from "./HBox";
import Panel from "./Panel";
import Icon from "assets/images/icon.png";

const Header = () => {
  return (
    <Panel>
      <HBox>
        <img src={Icon} className="w-10 h-10" />
      </HBox>
    </Panel>
  );
};

export default Header;
