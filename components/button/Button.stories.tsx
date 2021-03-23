import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Common/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Beginner = Template.bind({});
Beginner.args = {
  label: "Beginner",
};

export const Advanced = Template.bind({});
Advanced.args = {
  label: "Advanced",
};
