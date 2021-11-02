import React from "react";
import styled from "styled-components";

const DateInputWrap = styled.div`
  width: 350px;
  .date-input {
    &__today {
      width: 100%;
    }
    &__wrap {
      display: flex;
      justify-content: center;
      margin: 5px;
    }
    &__wrap > input {
      width: 50px;
    }
  }
  button:hover {
    cursor: pointer;
  }
`;

const DateInput = ({ date, setDate, setToday }) => {
  return (
    <DateInputWrap>
      <button className="date-input__today" onClick={() => setDate(setToday())}>
        오늘
      </button>
      <div className="date-input__wrap">
        <input
          type="number"
          value={date.year}
          onChange={(e) => setDate({ ...date, year: parseInt(e.target.value) })}
        />
        년&nbsp;
        <input
          type="number"
          value={date.month}
          onChange={(e) =>
            setDate({ ...date, month: parseInt(e.target.value) })
          }
        />
        월&nbsp;
        <input
          type="number"
          value={date.day}
          onChange={(e) => setDate({ ...date, day: parseInt(e.target.value) })}
        />
        일을 기준으로
      </div>
    </DateInputWrap>
  );
};

export default DateInput;
