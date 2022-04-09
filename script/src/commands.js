import { render, conErr, conSuc } from "./render.js";

export const comm = {
  quit: "quit",
  run: "run",
  stop: "stop",
  build: "build",
};

export const runModule = async (module, arg) => {
  if (!module)
    return render(...conErr(`module of name "${arg}" doesn't exist`));

  if (module.type === "jslib") {
  }

  render(...conSuc(`module "${arg}" is now up and running`));
};
