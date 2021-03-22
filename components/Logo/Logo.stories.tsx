import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;
export const BigLogo = Template.bind({});
BigLogo.args = {
  size: "big",
};
export const SmallLogo = Template.bind({});
SmallLogo.args = {
  size: "small",
};
