import { App } from "./App";
import { renderWithProvider } from "./utils/renderWithProvider";

test("renders learn react link", () => {
  const { baseElement } = renderWithProvider(<App />);

  expect(baseElement).toBeTruthy();
});
