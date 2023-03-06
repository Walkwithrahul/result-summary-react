const dataArray = [
  {
    category: "Reaction",
    score: 80,
  },
  {
    category: "Memory",
    score: 92,
  },
  {
    category: "Verbal",
    score: 61,
  },
  {
    category: "Visual",
    score: 72,
  },
];

const [one, two, three, four] = dataArray;

import Reaction from "../images/icon-reaction.svg";
import Memory from "../images/icon-memory.svg";
import Verbal from "../images/icon-verbal.svg";
import Visual from "../images/icon-visual.svg";
import "./ResultSpecs.css";

const ResultSpecs = () => {
  return (
    <>
      <div className="specs first">
        <div className="flex-center">
          <img src={Reaction} alt="icon" />
          <span>{one.category}</span>
        </div>
        <div style={{ color: "black" }}>{one.score} / 100</div>
      </div>

      <div className="specs second">
        <div className="flex-center">
          <img src={Memory} alt="" />
          <span>{two.category}</span>
        </div>
        <div style={{ color: "black" }}>{two.score} / 100</div>
      </div>

      <div className="specs third">
        <div className="flex-center">
          <img src={Verbal} alt="icon" />
          <span>{three.category}</span>
        </div>
        <div style={{ color: "black" }}>{three.score} / 100</div>
      </div>

      <div className="specs fourth">
        <div className="flex-center">
          <img src={Visual} alt="icon" />
          <span>{four.category}</span>
        </div>
        <div style={{ color: "black" }}>{four.score} / 100 </div>
      </div>

      <button className="continue-btn">Continue</button>
    </>
  );
};

export default ResultSpecs;
