import PropTypes from "prop-types";

function TemperatureScale(props) {
  // Complete me
  return <><div
          className="btn-group"
          role="group"
          aria-label="Convert temperature"
        >
          <button
            className="btn btn-outline-primary"
            value="F"
            onClick={e=>props.setScale(e.target.value)}
          >
            Fahrenheit
          </button>
          <button
            className="btn btn-outline-primary"
            value="C"
            onClick={e=>props.setScale(e.target.value)}
          >
            Celsius
          </button>
        </div></>;
}

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired,
};

export default TemperatureScale;
