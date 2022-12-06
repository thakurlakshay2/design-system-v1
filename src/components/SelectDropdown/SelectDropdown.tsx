/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { SelectDropdownProps } from "./typings";
import * as styles from "./styles";

const SelectDropdown: React.FC<SelectDropdownProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const selectComponent = useRef(null);

  useEffect(() => {
    console.log(selectComponent);
  }, [selectComponent]);
  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
        ref={selectComponent}
      >
        Select Dropdown
      </div>
      {open && <div css={styles.dropdown}>dawpdko</div>}
    </div>
  );
};

export default SelectDropdown;
