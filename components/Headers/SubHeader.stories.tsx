import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SubHeader, { SubHeaderProps } from "./SubHeader";

export default {
  title: "Common/Header",
  component: SubHeader,
} as Meta;

const Template: Story<SubHeaderProps> = (args) => <SubHeader {...args} />;
export const TheSubHeader = Template.bind({});
TheSubHeader.args = {
  label: "Chords",
  size: "big",
};
