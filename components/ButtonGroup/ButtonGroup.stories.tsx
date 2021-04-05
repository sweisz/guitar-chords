import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";

export default {
  title: "Common/ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const SkillButtons = Template.bind({});
SkillButtons.args = {};
