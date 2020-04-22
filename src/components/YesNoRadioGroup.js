import React from "react";
import { Radio } from "antd";

const YesNoRadioGroup = ({ value, onChange, id, label }) => {
  return (
    <Radio.Group value={value} onChange={onChange} name={id} aria-label={label}>
      <Radio value={false} name={id}>
        No
      </Radio>
      <Radio value={true} name={id}>
        Yes
      </Radio>
    </Radio.Group>
  );
};

export default YesNoRadioGroup;
