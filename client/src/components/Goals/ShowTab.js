// Imports ========================================================================================

import React, { Component } from "react";

// Components
import { GoalCircle } from "../../components/List";

// Functions ======================================================================================

class ShowTab extends Component {
  // Calculate the percent saved
  calcPercent(goal, saved) {
    return(Math.round((saved/goal)*100))
  }
  
  render() {
    return (
      <>
        { this.props.goals.map(goal => (
          <GoalCircle
            key={goal._id}
            goal={goal.goalName}
            total={goal.totalAmt}
            weekly={goal.weeklyAmt}
            strokeWidth="10"
            sqSizeProp="200"
            percentage={this.calcPercent(goal.totalAmt, goal.totalSavedAmt)}
          />
        ))}
      </>
    )
  }
}

// Export =========================================================================================

export {ShowTab};
