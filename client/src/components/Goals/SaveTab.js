// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row } from "../Grid";
import { FormBtn, Input } from "../Form";

// Other
import { Line } from "react-chartjs-2"

const data = {
  labels: [],
  datasets: [
    {
      label: 'Saving Progress',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#BF7E04',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#577720',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#577720',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 500]
    }
  ]
};

// Functions ======================================================================================

export const SaveTab = props => {
  const { goals, selectedGoal, totalAmt, totalSavedAmt, amtToSave, handleChange, handleAdd, handleSelect, chartData } = props

  let setChart = () => {
    data.labels = []
    data.datasets[0].data = []
    chartData.map(res => {
      data.datasets[0].data.push(Number(res.savingAmt))
      data.labels.push(res.dateSaved)
    })
  }
  
  setChart()

  return (
    <Row>
      <Col size="md-6">
        <div className="btn-group dropright">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Goals
          </button>
          <div className="dropdown-menu">
            {goals.map(goal => (
              <button key={goal._id} className="dropdown-item goalDropdown" onClick={() => handleSelect(goal._id)}> {goal.goalName} </button>
            ))} 
          </div>
        </div>
      </Col>
      <Col size="md-6">
        { selectedGoal ? (
          <form style={{ marginTop: 10 }}>
            <h1 id="selectedGoalTitle"> {selectedGoal} </h1>
            <h2> You have saved ${totalSavedAmt} towards your goal of {totalAmt} </h2>
          
            <label htmlFor="amtToSave"> Savings To Add: </label>
            
            <Input
              type="number"
              name="amtToSave"
              value={amtToSave}
              onChange={handleChange}
              prepend="true"
            />

            <FormBtn
              disabled={!(amtToSave)}
              onClick={handleAdd}
            >
              Add To Goal!
            </FormBtn>

            <Line data={data} />
          </form>
        ) : (
          <h2> Select A Goal To Update </h2>
        )}
      </Col>
    </Row>
    )
  }