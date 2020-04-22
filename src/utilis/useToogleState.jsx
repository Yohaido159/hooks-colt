import { useState } from "react";

const useToogle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
};

export default useToogle;
