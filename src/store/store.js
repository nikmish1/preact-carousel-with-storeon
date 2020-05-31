import { createStoreon } from "storeon";

// Initial state, reducers and business logic are packed in independent modules
let increment = (store) => {
  // Initial state
  store.on("@init", () => ({ count: 0 }));
  // Reducers returns only changed part of the state
  store.on("inc", ({ count }) => ({ count: count + 1 }));
};

export const store = createStoreon([increment]);
