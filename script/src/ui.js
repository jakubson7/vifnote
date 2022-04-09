import { cyan, green, red, render, space, yellow, br } from "./render.js";

export const renderModuleTable = async (modules) => {
  render(
    br(2),
    space(8),
    "Module",
    space(8),
    red("Status"),
    space(8),
    "Tech",
    br()
  );
  Object.values(modules).forEach(({ name, status, type }) => {
    const statusElement =
      status === "down"
        ? red(status)
        : status === "open"
        ? yellow(status)
        : green(status);

    render(
      space(8),
      name,
      space(12 - name.length),
      statusElement,
      space(12 - status.length),
      type
    );
  });
};
