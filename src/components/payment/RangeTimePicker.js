import React, { useState } from "react";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

// function onChange(value, dateString) {
//   console.log("Selected Time: ", value);
//   console.log("Formatted Selected Time: ", dateString);
// }

function onOk(value) {
  console.log("onOk: ", value);
}

function disabledStartTime(current) {
  // Can not select days before today and today
  return current < moment().local();
}

function RangeTimePicker() {
  const [value, setValue] = useState();

  const disabledDate = (current) => {
    return (
      current > moment().endOf("month") || current < moment().startOf("day")
    );
  };

  return (
    <Space>
      <RangePicker 
        size={'large'}
        defaultValue={[moment().local(), ""]}
        value={value}
        showTime={{ format: "HH:mm:ss" }}
        format="MM-DD HH:mm:ss"
        disabled={[true, false]}
        onOk={onOk}
        disabledDate={disabledDate}
        disabledTime={disabledStartTime}
        onChange={(val) => setValue(val)}
      />
    </Space>
  );
}

export default RangeTimePicker
