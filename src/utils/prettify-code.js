import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";

export const formatCode = (code, config) => prettier.format(code, {parser: "babel", plugins: [babylon], ...config });