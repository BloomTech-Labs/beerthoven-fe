import React from "react";
import { Radio } from "antd";

const YesNoRadioGroup = ({ value, onChange, id }) => {
  return (
    <Radio.Group value={value} onChange={onChange} name={id}>
      <Radio value={false} data-testid={id}>
        No
      </Radio>
      <Radio value={true}>Yes</Radio>
    </Radio.Group>
  );
};

export default YesNoRadioGroup;
