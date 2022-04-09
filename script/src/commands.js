import { render, conErr, conSuc } from "./render.js";
import { exec } from "child_process";

export const comm = {
  quit: "quit",
  run: "run",
  stop: "stop",
  build: "build",
};

export const runModule = async (module, arg) => {
  if (!module)
    return render(...conErr(`module of name "${arg}" doesn't exist`));

  if (module.type === "jslib" || "svelib") {
    exec("yarn start", { cwd: module.path }, (err, out, outErr) => {
      if (err) return render(...conErr(toString(err)));
      if (outErr) return render(...conErr(outErr));
      module.status = "running";
      render(...conSuc(`module "${arg}" is now up and running`));
      return render(...conSuc(out));
    });
  }
};

export const stopModule = async (module, arg) => {
  if (!module)
    return render(...conErr(`module of name "${arg}" doesn't exist`));

  module.status = "down";

  render(...conSuc(`module "${arg}" is now down`));
};
