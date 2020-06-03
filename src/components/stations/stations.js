import { store } from "../../store/store";

const Station = () => {
  return <div>{`pnr in store:${store.get().pnrNumber}`}</div>;
};

export default Station;
