import React from "react";

const useToggle = (initialState) => {
  const [isToggled, setIsToggled] = React.useState(initialState);
  const toggle = React.useCallback(
    () => setIsToggled((isToggled) => !isToggled),
    [setIsToggled]
  );

  return { isToggled, toggle };
};

export default useToggle;
