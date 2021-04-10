import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TabsHead, { TabsHeadProps } from "./TabsHead";

export default {
  title: "Common/TabsHead",
  component: TabsHead,
} as Meta;

const Template: Story<TabsHeadProps> = (args) => <TabsHead {...args} />;

export const tabsHead = Template.bind({});
tabsHead.args = {
  label: "Beginner",
  link: "#",
};
