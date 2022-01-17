import {
  architecture,
  backend,
  databases,
  education,
  frontend,
  Icon,
  infrastructure,
  languages,
  later,
  next,
  projects,
  services,
  socials,
  tools,
  apps,
} from "./icons.ts";

let readme = await Deno.readTextFile("./README.md");
const link = (name: string, url: string) =>
  `[<img width="64" alt="${name}" src="assets/icons/${name}.png">](${url})`;
const links: (icons: Icon[]) => string = (icons) =>
  icons.map(({ name, url }) => link(name, url)).join("\n");

readme = readme.replace(
  /Enthusiast[^#]*(?=#)/,
  `Enthusiast\n\n${links(socials)}\n${links(projects)}\n${links(education)}\n\n`
);
readme = readme.replace(
  /# Tech I Know[^#]*/,
  `# Tech I Know\n\n${links(languages)}\n\n${links(databases)}\n\n${links(
    backend
  )}\n\n${links(frontend)}\n\n${links(architecture)}\n\n${links(
    infrastructure
  )}\n\n${links(tools)}\n\n${links(services)}\n\n${links(apps)}\n\n`
);

readme = readme.replace(
  /# Tech I Want To Know[^#]*/,
  `# Tech I Want To Know\n\n${links(next)}\n\n${links(later)}`
);

Deno.writeTextFile("./README.md", readme);
