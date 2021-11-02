import React, { useState } from "react";
import styled from "styled-components";

const ResultWrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 50px;
  }
  p {
    margin-left: 30px;
  }
`;

const Result = ({ date, type }) => {
  const initNum = type === "d+day" ? 1 : 0;
  const [day, setDay] = useState(initNum);

  const printResult = (input) => {
    const tempDate = new Date();
    tempDate.setFullYear(date.year);
    tempDate.setMonth(date.month - 1);
    if (isNaN(input)) {
      tempDate.setDate(date.day);
    } else {
      type === "d+day"
        ? tempDate.setDate(date.day + input - 1)
        : tempDate.setDate(date.day - input);
    }

    return `${tempDate.getFullYear()}년 ${
      tempDate.getMonth() + 1
    }월 ${tempDate.getDate()}일`;
  };

  return (
    <ResultWrap>
      <span>
        {type === "d+day" ? "" : "D-"}
        <input
          type="number"
          value={day}
          onChange={(e) => setDay(parseInt(e.target.value))}
        />
        {type === "d+day" ? "일째 되는 날은?" : "는?"}
      </span>
      <p>{printResult(day)}</p>
    </ResultWrap>
  );
};

export default Result;
