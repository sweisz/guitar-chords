import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SearchInput from "./SearchInput";

export default {
  title: "Common/SearchInput",
  component: SearchInput,
} as Meta;

const Template: Story = (args) => <SearchInput {...args} />;
export const tabSearchInput = Template.bind({});
