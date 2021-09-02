import * as fs from "fs"
import {
  databases,
  education,
  Icon,
  infrastructure,
  languages,
  later,
  libraries,
  next,
  services,
  tools,
} from "./icons"

main()
async function main() {
  let readme = fs.readFileSync("./README.md", "utf8")
  const link = (name: string, url: string) =>
    `<a href="${url}"><img width="32" alt="${name}" src="assets/icons/${name}.png"></a>`
  const links: (icons: Icon[]) => string = (icons) =>
    icons.map(({ name, url }) => link(name, url)).join(" ")

  readme = readme.replace(
    /### Education[^#]*(?=#|$)/,
    `### Education ${links(education)}\n\n`,
  )
  readme = readme.replace(
    /### Languages[^#]*(?=#|$)/,
    `### Languages ${links(languages)}\n\n`,
  )
  readme = readme.replace(
    /### Databases[^#]*(?=#|$)/,
    `### Databases ${links(databases)}\n\n`,
  )
  readme = readme.replace(
    /### Libraries[^#]*(?=#|$)/,
    `### Libraries ${links(libraries)}\n\n`,
  )
  readme = readme.replace(
    /### Infrastructure[^#]*(?=#|$)/,
    `### Infrastructure ${links(infrastructure)}\n\n`,
  )
  readme = readme.replace(
    /### Services[^#]*(?=#|$)/,
    `### Services ${links(services)}\n\n`,
  )
  readme = readme.replace(
    /### Tools[^#]*(?=#|$)/,
    `### Tools ${links(tools)}\n\n`,
  )
  readme = readme.replace(
    /### Learning Next[^#]*(?=#|$)/,
    `### Learning Next ${links(next)}\n\n`,
  )
  readme = readme.replace(
    /### Learning Later[^#]*(?=#|$)/,
    `### Learning Later ${links(later)}\n\n`,
  )
  fs.writeFileSync("./README.md", readme)
}
