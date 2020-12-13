process.env.NODE_ENV = "production";

const fs = require("fs");
const Confrim = require("../dist/vue-common-confirm.umd");
const Vue = require("vue");

const hyphenateRE = /\B([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
}

function parseFunctionParams(func) {
  const groups = /function\s_.*\((.*)\)\s\{.*/i.exec(func);
  if (groups && groups.length > 1) return `(${groups[1]}) => {}`;
  else return "null";
}

function getPropType(type) {
  if (Array.isArray(type)) {
    return type.map((t) => getPropType(t));
  }

  if (!type) return "any";

  return type.name.toLowerCase();
}

function getPropDefault(def, type) {
  if (
    def === "" ||
    (def == null && type !== "boolean" && type !== "function")
  ) {
    return "undefined";
  } else if (typeof def === "function" && type !== "function") {
    def = def.call({});
  }

  if (type === "boolean") {
    return def ? "true" : "false";
  }

  if (type === "string") {
    return def ? `'${def}'` : def;
  }

  if (type === "function") {
    return parseFunctionParams(def);
  }

  return def;
}

function genProp(name, prop) {
  const type = getPropType(prop.type);

  return {
    name,
    type,
    description: prop.description || "",
    default: getPropDefault(prop.default, type),
  };
}

function parseComponent(component) {
  return {
    props: parseProps(component),
    description: parseDescription(component)
  };
}

function parseProps(component, array = []) {
  const options = component.default;
  const props = options.props || {};

  Object.keys(props).forEach((key) => {
    const generated = genProp(key, props[key], component.name);
    array.push(generated);
  });

  return array.sort((a, b) => a.name > b.name);
}

function parseDescription(component) {
  const options = component.default;
  const description = options.description || {};

  return description;
}

function writeJsonFile(obj, file) {
  const stream = fs.createWriteStream(file);

  stream.once("open", () => {
    stream.write(JSON.stringify(obj, null, 2));
    stream.end();
  });
}

Vue.component("v-confirm", Confrim);

const components = {};

const installedComponents = Vue.options._base.options.components;

const componentNameRegex = /^v-confirm/;

for (const name in installedComponents) {
  if (!componentNameRegex.test(name)) continue;

  let component = installedComponents[name];

  const kebabName = hyphenate(name);
  let options = parseComponent(component);

  components[kebabName] = options;
}

const tags = Object.keys(components).reduce((t, k) => {
  t[k] = {
    attributes: components[k].props
      .map((p) => p.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`))
      .sort(),
    description: components[k].description,
  };

  return t;
}, {});

const attributes = Object.keys(components).reduce((attrs, k) => {
  const tmp = components[k].props.reduce((a, prop) => {
    let type = prop.type;

    if (!type) type = "";
    else if (Array.isArray(type))
      type = type.map((t) => t.toLowerCase()).join("|");
    else type = type.toLowerCase();

    const name = prop.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);

    a[`${k}/${name}`] = {
      type,
      description: prop.description,
    };

    return a;
  }, {});

  return Object.assign(attrs, tmp);
}, {});

if (!fs.existsSync("dist/vetur")) {
  fs.mkdirSync("dist/vetur", 0o755);
}

writeJsonFile(tags, 'dist/vetur/tags.json')
writeJsonFile(attributes, 'dist/vetur/attributes.json')

console.log("tags.jsonとattributes.jsonを作成しました")