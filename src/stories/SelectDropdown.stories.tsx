import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectDropdown from "../components/SelectDropdown/SelectDropdown";

export default {
  title: "Select Dropdown",
  component: SelectDropdown,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SelectDropdown>;

const Template: ComponentStory<typeof SelectDropdown> = (args) => (
  <SelectDropdown {...args} />
);

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
