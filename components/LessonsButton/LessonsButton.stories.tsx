import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LessonsButton, { LessonsButtonProps } from "./LessonsButton";

export default {
  title: "Common/LessonsButton",
  component: LessonsButton,
} as Meta;

const Template: Story<LessonsButtonProps> = (args) => (
  <LessonsButton {...args} />
);

export const Beginner = Template.bind({});
Beginner.args = {
  labelLeft: "Beginner",
};

export const Advanced = Template.bind({});
Advanced.args = {
  labelRight: "Advanced",
};
