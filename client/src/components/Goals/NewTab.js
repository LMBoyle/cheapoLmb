// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row } from "../../components/Grid";
import { Card } from "../../components/Card"
import { FormBtn, Input } from "../../components/Form";

// Functions ======================================================================================

export const NewTab = props => {
  const { goalName, totalAmt, weeklyAmt, handleChange, handleSubmit} = props
  
  return (
    <Row>
      <Col size="md-12">
        <Card title="Your Personal Goals: ">
          <form style={{ marginTop: 10 }}>
            <label htmlFor="goalName"> Goal Name: </label>
            <Input
              type="text"
              name="goalName"
              value={goalName}
              onChange={handleChange}
            />
            <label htmlFor="totalAmt"> Total Amount: </label>
            <Input
              type="text"
              name="totalAmt"
              value={totalAmt}
              onChange={handleChange}
              prepend="true"
            />
            <label htmlFor="weeklyAmt"> Weekly Amount: </label>
            <Input
              type="text"
              name="weeklyAmt"
              value={weeklyAmt}
              onChange={handleChange}
              prepend="true"
            />
            <FormBtn
              disabled={!(goalName && totalAmt && weeklyAmt)}
              onClick={handleSubmit}
            >
              Submit Goal!
            </FormBtn>
          </form>
        </Card>
      </Col>
    </Row>
  )
}
