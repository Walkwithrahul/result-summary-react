import "./App.css";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const App = () => {
  return (
    <div className="wrapper">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default App;
