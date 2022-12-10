export interface OptionProps {
  selectLabel: JSX.Element | string;
  dropdownLabel: JSX.Element | string;
  value: string;
}
export enum VariantProps {
  filled = "filled",
  outlined = "outlined",
}
export interface SelectDropdownProps {
  placeHolder: string;
  selected: string;
  options: Array<OptionProps>;
  variant: VariantProps;
}
