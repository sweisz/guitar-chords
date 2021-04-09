import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Lessons from "./Lessons";

export default {
  title: "Pages/Lessons",
  component: Lessons,
} as Meta;

const Template: Story = () => <Lessons />;

export const lessons = Template.bind({});
lessons.args = {};
