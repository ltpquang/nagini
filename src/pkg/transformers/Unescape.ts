import {Transformer} from "./Transformer";

export default class Unescape implements Transformer {
  transformData(input: string): string {
    // TODO: https://onlinestringtools.com/unescape-string
    return input.replace(
        /\\(.?)/g,
        function (i, n) {
          return n === "\\" ? "\\" : n === "n" ? "\n" : n === "t" ? "	" : n === "" ? "" : n
        })
  }

  name(): string {
    return "Unescape";
  }
}
