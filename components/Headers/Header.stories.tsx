import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Common/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;
export const WelcomeHeader = Template.bind({});
WelcomeHeader.args = {
  label: "Guitar",
  size: "big",
};
