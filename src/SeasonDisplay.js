import './SeasonDisplay.css';
import React from "react";

class SeasonDisplay extends React.Component {
  seasonConfig = {
    summer: {
      text: "Lets hit the beach",
      iconName: "sun",
    },
    winter: {
      text: "Burr it is chilly",
      iconName: "snowflake",
    },
  };

  getSeason = (lat, month) => {
    if (month > 2 && month < 8) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  };

  getSeason() {
    return new Date().getMonth();
  }

  render() {
    const season = this.getSeason(this.props.lat, new Date().getMonth());
    const { text, iconName } = this.seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
