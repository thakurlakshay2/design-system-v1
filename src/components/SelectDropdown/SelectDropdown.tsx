/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import { SelectDropdownProps, VariantProps } from "./typings";
import * as styles from "./styles";
import { css } from "@emotion/react";

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  placeHolder,
  selected,
  options,
  variant = VariantProps.outlined,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const selectComponent = useRef<HTMLButtonElement>(null);
  const dropdownComponent = useRef<HTMLDivElement>(null);
  const renderOptions = useCallback(() => {
    return options.map((selectOptions) => {
      return <div>{selectOptions.dropdownLabel}</div>;
    });
  }, [options]);

  const selectedData = useCallback(() => {
    return options.find((selectOptions) => selectOptions.value === selected)
      ?.selectLabel;
  }, [selected, options]);

  useEffect(() => {
    console.log(selectComponent.current?.getBoundingClientRect());
  }, [selectComponent]);

  const getBoundaries = () => {
    if (!selectComponent) return;

    const selectComponentData =
      selectComponent.current?.getBoundingClientRect();
    const dropdownComponentData =
      dropdownComponent.current?.getBoundingClientRect();

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isWidthOutSide =
      windowWidth -
      ((selectComponentData?.left || 0) + (dropdownComponentData?.width || 0));

    const isHeightOutSide =
      windowHeight -
      ((selectComponentData?.bottom || 0) +
        (dropdownComponentData?.height || 0));
    if (selectComponentData && dropdownComponentData) {
      return css({
        x:
          isWidthOutSide < 0
            ? `calc(100% -${dropdownComponentData.width})`
            : selectComponentData.x,
        y:
          isHeightOutSide < 0
            ? `calc(100% -${dropdownComponentData.height})`
            : selectComponentData.y,
        minWidth: selectComponentData.width,
      });
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        ref={selectComponent}
      >
        {selected ? selectedData() : placeHolder}
      </button>
      {open && (
        <div css={[styles.dropdown, getBoundaries()]} ref={dropdownComponent}>
          {renderOptions()}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
