import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Tabs, { TabsProps } from "./Tabs";

export default {
  title: "Common/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;
export const tabs = Template.bind({});
tabs.args = {
  tex:
    '\\title "Hello alphaTab"\n.\n:4 0.6 1.6 3.6 0.5 2.5 3.5 0.4 2.4 |\n   3.4 0.3 2.3 0.2 1.2 3.2 0.1 1.1 |\n   3.1.1',
};
