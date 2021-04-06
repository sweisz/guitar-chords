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
  label: "Beginner",
  href: "/beginner",
};
export const Advanced = Template.bind({});
Advanced.args = {
  label: "Advanced",
  href: "/advanced",
};
