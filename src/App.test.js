import { App } from "./App";
import { withRenderWrapper } from "./utils/withRenderWrapper";

test("renders learn react link", () => {
  const { baseElement } = withRenderWrapper(<App />);

  expect(baseElement).toBeTruthy();
});
