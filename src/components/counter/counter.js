import { useStoreon } from "storeon/preact";

export const Counter = () => {
  // Counter will be re-render only on `state.count` changes
  const { dispatch, count } = useStoreon("count");
  return <button onClick={() => dispatch("inc")}>{count}</button>;
};
