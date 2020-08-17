import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const eqs = [0, 86400000, 604800000, 2592000000];
const FormDate = (props) => {
  const { type, onChange, value, tools } = props;

  const handleChange = (val, fVal) => {
    onChange(fVal);
  };

  const changeTime = (type) => {
    const today = moment().valueOf();
    const begin = moment(today - eqs[type]).format("YYYY-MM-DD");
    onChange([begin, moment(today).format("YYYY-MM-DD")]);
  };

  if (type === "datePicker")
    return <DatePicker value={moment(value)} onChange={handleChange} />;

  if (type === "rangePicker")
    return (
      <span className="form-date">
        <span
          className="form-date__comp"
          style={{ width: tools ? "50%" : "100" }}
        >
          <RangePicker
            value={
              !value || value.every((item) => !item)
                ? []
                : [moment(value[0]), moment(value[1])]
            }
            onChange={handleChange}
          />
        </span>
        {tools ? (
          <span className="form-date__btn">
            <span className="form-date__btn-item" onClick={() => changeTime(0)}>
              今天
            </span>
            <span className="form-date__btn-item" onClick={() => changeTime(1)}>
              昨天
            </span>
            <span className="form-date__btn-item" onClick={() => changeTime(2)}>
              最近7天
            </span>
            <span className="form-date__btn-item" onClick={() => changeTime(3)}>
              最近30天
            </span>
          </span>
        ) : null}
      </span>
    );
};

export default React.forwardRef(FormDate);
