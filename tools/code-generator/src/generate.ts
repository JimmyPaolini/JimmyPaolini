import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import Mustache from "mustache";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface Item {
  alt: string;
  src: string;
  href: string;
  width?: number;
  height?: number;
}

interface Section {
  title: string;
  items: Item[];
  trailingContent?: string;
}

interface Group {
  items: Item[];
  trailingContent?: string;
}

interface Data {
  name: string;
  projects: Item[];
  knowledgeSections: Section[];
  learnGroups: Group[];
}

function buildImgAttrs(item: Item): string {
  const parts: string[] = [];
  if (item.width !== undefined) parts.push(`width="${item.width}"`);
  if (item.height !== undefined) parts.push(`height="${item.height}"`);
  return parts.join(" ");
}

function processItem(item: Item): Item & { imgAttrs: string } {
  return { ...item, imgAttrs: buildImgAttrs(item) };
}

function main(): void {
  const data: Data = JSON.parse(
    readFileSync(resolve(__dirname, "data.json"), "utf-8"),
  );
  const template = readFileSync(
    resolve(__dirname, "..", "templates", "README.mustache"),
    "utf-8",
  );

  const view = {
    name: data.name,
    projects: data.projects.map(processItem),
    knowledgeSections: data.knowledgeSections.map((section) => ({
      ...section,
      items: section.items.map(processItem),
    })),
    learnGroups: data.learnGroups.map((group) => ({
      ...group,
      items: group.items.map(processItem),
    })),
  };

  const output = Mustache.render(template, view).trimEnd() + "\n";
  const outputPath = resolve(__dirname, "../../..", "README.md");
  writeFileSync(outputPath, output);
  console.log("README.md generated successfully");
}

main();
