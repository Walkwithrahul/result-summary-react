import "./LeftSection.css";

const LeftSection = () => {
  return (
    <div className="result-section">
      <div className="heading">Your Result</div>
      <div className="result-circle">
        <div className="score">76</div>
        of 100
      </div>
      <div className="result-greet">Great</div>
      <div className="result-description">
        You scored higher than 65% of the people who have taken these tests
      </div>
    </div>
  );
};

export default LeftSection;
