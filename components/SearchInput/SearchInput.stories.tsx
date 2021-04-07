import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SearchInput, { SearchInputProps } from "./SearchInput";

export default {
  title: "Common/SearchInput",
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;
export const tabSearchInput = Template.bind({});
