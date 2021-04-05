import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "Common/ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: Story = (args) => <ButtonGroup {...args} />;

export const SkillButtons = Template.bind({});
