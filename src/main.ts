import {
  // AST,
  // RegExpParser,
  // RegExpValidator,
  parseRegExpLiteral,
  // validateRegExpLiteral,
  // visitRegExpAST,
} from "@eslint-community/regexpp";

// @ts-ignore
import data from "../in.toml";

// const parser = new RegExpParser();
// const validator = new RegExpValidator();
const asts = Object.entries(data).reduce(
  (acc, [name, pattern]) => ({
    ...acc,
    [name]: parseRegExpLiteral(pattern as string),
  }),
  {}
);

Bun.write(
  "out.json",
  JSON.stringify(
    asts,
    (key, _) => (key === "parent" ? undefined : _),
    2
  )
);
