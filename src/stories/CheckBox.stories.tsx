import React from "react";
import { CheckBox } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "takumi_s_application1/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox: Story<any> = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", inputClassName: "mr-1" };
