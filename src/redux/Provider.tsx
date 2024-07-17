"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ReactNode } from "react";
interface PropsProvider {
  children: ReactNode;
}
function Providers({ children }: PropsProvider) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
