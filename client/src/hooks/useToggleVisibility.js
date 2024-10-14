import { useState } from "react";

const useToggleVisibility = (initialState = true) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return { isVisible, toggleVisibility };
};

export default useToggleVisibility;
