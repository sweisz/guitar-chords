import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LessonsHead, { LessonsHeadProps } from "./LessonsHead";

export default {
  title: "Common/LessonsHead",
  component: LessonsHead,
} as Meta;

const Template: Story<LessonsHeadProps> = (args) => <LessonsHead {...args} />;

export const LessonsHeadBeginner = Template.bind({});
LessonsHeadBeginner.args = {
  label: "Beginner",
  link: "#",
};

export const LessonsHeadAdvanced = Template.bind({});
LessonsHeadAdvanced.args = {
  label: "Advanced",
  link: "#",
};
