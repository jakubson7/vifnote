import promptSync from "prompt-sync";
import { comm, runModule } from "./commands.js";
import { renderModuleTable } from "./ui.js";
import { loadModules } from "./module.js";

const query = promptSync();

const main = async () => {
  const modules = await loadModules();

  while (true) {
    console.clear();
    await renderModuleTable(modules);

    const c = query(":")
      .split(" ")
      .filter((v) => v !== "");
    if (c[0] === comm.quit) break;

    switch (c[0]) {
      case comm.run:
        c.slice(1).forEach(
          async (arg, i) => await runModule(modules[arg], c[i + 1])
        );
        break;
    }

    query();
  }
};

main();
