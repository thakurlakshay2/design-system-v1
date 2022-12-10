import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectDropdown from "../components/SelectDropdown/SelectDropdown";

export default {
  title: "Select Dropdown",
  component: SelectDropdown,
  args: {
    layout: "fullscreen",
    variant: "filled",
    placeholder: "Select",
    selected: "0",
    options: [
      {
        selectLabel: "select 0",
        dropdownLabel: "select 0",
        value: "0",
      },
    ],
  },
} as ComponentMeta<typeof SelectDropdown>;

const Template: ComponentStory<typeof SelectDropdown> = (args) => (
  <SelectDropdown {...args} />
);

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
