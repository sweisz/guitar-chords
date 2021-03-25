import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ListItem, { ListItemProps } from "./ListItem";

export default {
  title: "Common/ListItem",
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;
export const theListItem = Template.bind({});
theListItem.args = {
  title: "D-Dur",
  description: "D-Dur",
  checkBox: true,
};
