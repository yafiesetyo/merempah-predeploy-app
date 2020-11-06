export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

export const setState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.warn(error);
  }
};
