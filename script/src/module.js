import jetpack from "fs-jetpack";
import { CONFIG_FILE_PATH } from "./const.js";

export const loadModules = async () => {
  const config = await jetpack.readAsync(CONFIG_FILE_PATH, "json");
  const res = {};

  config.modules.forEach(
    (m) =>
      (res[m[0]] = {
        name: m[0].trim(),
        path: m[1],
        type: m[2],
        status: "open",
      })
  );

  return res;
};
