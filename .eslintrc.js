module.exports = {
    root: true,
    "extends": ["@alphatr/base/node", "@alphatr/typescript"],
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname
    }
};
