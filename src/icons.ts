export interface Icon {
  name: string;
  url: string;
}

export const socials = [
  { name: "linkedin", url: "https://www.linkedin.com/in/jimmypaolini" },
  // { name: "instagram", url: "https://www.instagram.com/iamespao" },
  // {
  //   name: "spotify",
  //   url: "https://open.spotify.com/user/1294993453?si=b72b13c316ac42ed",
  // },
] as Icon[];

export const work = [
  { name: "shiftsmart", url: "https://shiftsmart.com/" },
  { name: "joor", url: "https://www.joor.com/" },
  { name: "comcast", url: "https://corporate.comcast.com/" },
] as Icon[];

export const education = [
  { name: "upenn", url: "https://www.upenn.edu" },
  { name: "pc", url: "https://www.penncharter.com" },
] as Icon[];

export const projects = [
  { name: "lexico", url: "https://www.lexicolatin.com" },
] as Icon[];

export const languages = [
  { name: "typescript", url: "https://www.typescriptlang.org" },
  { name: "python", url: "https://www.python.org" },
  { name: "java", url: "https://www.typescriptlang.org" },
  { name: "c", url: "https://www.typescriptlang.org" },
  { name: 'protobuf', url: 'https://developers.google.com/protocol-buffers' },
  { name: "javascript", url: "https://www.javascript.com" },
  { name: "css", url: "https://www.w3schools.com/css/default.asp" },
  { name: "html", url: "https://www.w3schools.com/html/default.asp" },
  { name: "ocaml", url: "https://ocaml.org" },
] as Icon[];

export const frontend = [
  { name: "react", url: "https://reactjs.org" },
  { name: "nextjs", url: "https://nextjs.org" },
  { name: "materialui", url: "https://material-ui.com" },
  { name: "react-query", url: "https://react-query.tanstack.com" },
  { name: "formik", url: "https://formik.org" },
  { name: "storybook", url: "https://storybook.js.org" },
  { name: 'ag-grid', url: 'https://www.ag-grid.com/' },
  { name: "styled-components", url: "https://styled-components.com" },
  { name: 'emotion', url: 'https://emotion.sh/' },
  { name: "tailwind", url: "https://tailwindcss.com" },
  { name: "sass", url: "https://sass-lang.com/" },
  { name: "jwt", url: "https://jwt.io" },
  { name: "react-router", url: "https://reactrouter.com" },
  { name: 'mobx', url: 'https://mobx.js.org/' },
  { name: "webpack", url: "https://webpack.js.org" },
  { name: "babel", url: "https://babeljs.io" },
] as Icon[];

export const backend = [
  { name: "nodejs", url: "https://nodejs.org" },
  { name: "deno", url: "https://deno.land" },
  { name: "graphql", url: "https://graphql.org" },
  { name: "apollo", url: "https://www.apollographql.com" },
  { name: "type-graphql", url: "https://typegraphql.com" },
  { name: "expressjs", url: "https://expressjs.com" },
  { name: "typeorm", url: "https://typeorm.io" },
  { name: "django", url: "https://www.djangoproject.com" },
  { name: "grpc", url: "https://grpc.io" },
  { name: "oauth", url: "https://oauth.net" },
] as Icon[];

export const databases = [
  { name: "postgres", url: "https://www.postgresql.org" },
  { name: "mysql", url: "https://www.mysql.com" },
  { name: "mongodb", url: "https://www.mongodb.com" },
  { name: "dynamodb", url: "https://aws.amazon.com/dynamodb" },
  { name: "s3", url: "https://aws.amazon.com/s3" },
] as Icon[];

export const architecture = [
  { name: "aws", url: "https://aws.amazon.com" },
  { name: "kubernetes", url: "https://kubernetes.io" },
  { name: "docker", url: "https://www.docker.com" },
  { name: "helm", url: "https://helm.sh" },
  { name: "linode", url: "https://www.linode.com" },
  { name: "github-actions", url: "https://github.com/features/actions" },
  { name: "bitnami", url: "https://bitnami.com/stacks/helm" },
  { name: "serverless", url: "https://www.serverless.com" },
] as Icon[];

export const infrastructure = [
  { name: "bash", url: "https://www.zsh.org/" },
  { name: "fish", url: "https://fishshell.com" },
  { name: "nginx", url: "https://www.nginx.com" },
  { name: "elk", url: "https://www.elastic.co" },
  { name: "fluentbit", url: "https://fluentbit.io" },
  { name: "prometheus", url: "https://prometheus.io" },
  { name: "grafana", url: "https://grafana.com" },
] as Icon[];

export const services = [
  { name: "github", url: "https://github.com/JimmyPaolini/Lexico" },
  { name: "cloudflare", url: "https://www.cloudflare.com" },
  { name: "sendgrid", url: "https://sendgrid.com" },
  { name: "slack", url: "https://lexico-group.slack.com/archives/C01SN2QN2BF" },
  {
    name: "stackoverflow",
    url: "https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression",
  },
  // { name: 'datadog', url: 'https://www.datadoghq.com/' },
];

export const apps = [
  { name: "vscode", url: "https://code.visualstudio.com" },
  { name: 'openai', url: 'https://openai.com/' },
  { name: 'dbeaver', url: 'https://dbeaver.io/' },
  { name: "figma", url: "https://www.figma.com" },
  { name: 'notion', url: 'https://www.notion.so/' },
  { name: 'confluence', url: 'https://www.atlassian.com/software/confluence' },
  { name: "postman", url: "https://www.postman.com" },
  { name: "lens", url: "https://k8slens.dev" },
  { name: "mysql-workbench", url: "https://www.mysql.com/products/workbench" },
  { name: "intellij", url: "https://www.jetbrains.com/idea" },
  { name: "musescore", url: "https://musescore.org" },
  { name: "finale", url: "https://www.finalemusic.com" },
  // { name: 'datadog', url: 'https://www.datadoghq.com/' },
] as Icon[];

export const tools = [
  { name: "git", url: "https://git-scm.com" },
  {
    name: "react-testing-library",
    url: "https://testing-library.com/docs/react-testing-library/intro/",
  },
  { name: "jest", url: "https://jestjs.io" },
  { name: "cypress", url: "https://www.cypress.io/how-it-works" },
  { name: "regex", url: "https://regexr.com/" },
  { name: "eslint", url: "https://eslint.org" },
  { name: "prettier", url: "https://prettier.io" },
  { name: "jamstack", url: "https://jamstack.org" },
] as Icon[];

export const next = [
  { name: "linux", url: "https://www.linux.org" },
  { name: "raspberrypi", url: "https://www.raspberrypi.org" },
  { name: "electron", url: "https://www.electronjs.org" },
  { name: "fastify", url: "https://www.fastify.io/" },
  // { name: "golang", url: "https://golang.org" },
] as Icon[];

export const later = [
  { name: "openapi", url: "https://www.openapis.org/" },
  // { name: "sqlalchemy", url: "https://www.sqlalchemy.org" },
  { name: "stripe", url: "https://stripe.com" },
  { name: "shopify", url: "https://www.shopify.com" },
  { name: "gcp", url: "https://cloud.google.com" },
  { name: "azure", url: "https://azure.microsoft.com/en-us" },
] as Icon[];
