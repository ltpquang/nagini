import {StringTransformer} from "../base/StringTransformer";

export default class Unescape implements StringTransformer {
  transformData(input: string): string {
    // TODO: credit https://onlinestringtools.com/unescape-string
    return input.replace(
        /\\(.?)/g,
        function (i, n) {
          return n === "\\" ? "\\" : n === "n" ? "\n" : n === "t" ? "	" : n === "" ? "" : n
        })
  }

  name(): string {
    return "Unescape Splashed";
  }
}
