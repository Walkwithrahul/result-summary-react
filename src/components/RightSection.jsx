import ResultSpecs from "./ResultSpecs";

const RightSection = () => {
  return (
    <div className="summary-section">
      <div className="heading" style={{ color: "black" }}>
        Summary
      </div>
      <div className="result-specs">
        <ResultSpecs />
      </div>
    </div>
  );
};

export default RightSection;
