import * as fs from "fs"
import {
  architecture,
  backend,
  databases,
  education,
  frontend,
  Icon,
  infrastructure,
  languages,
  projects,
  services,
  socials,
  tools,
} from "./icons"

main()
async function main() {
  let readme = fs.readFileSync("./README.md", "utf8")
  const link = (name: string, url: string) =>
    `<a href="${url}"><img width="64" alt="${name}" src="assets/icons/${name}.png"></a>`
  const links: (icons: Icon[]) => string = (icons) =>
    icons.map(({ name, url }) => link(name, url)).join(" ")

  readme = readme.replace(
    /Enthusiast[^#]*(?=#)/,
    `Enthusiast\n\n${links(socials)} ${links(projects)} ${links(
      education,
    )}\n\n`,
  )
  readme = readme.replace(
    /# Tech[^#]*/,
    `# Tech\n\n${links(languages)}\n\n${links(databases)}${links(
      backend,
    )}\n\n${links(frontend)}\n\n${links(architecture)}\n\n${links(
      infrastructure,
    )}\n\n${links(services)}\n\n${links(tools)}`,
  )

  fs.writeFileSync("./README.md", readme)
}
