import {StringTransformer} from "../base/StringTransformer";

export default class JsonBeautify implements StringTransformer {
  name(): string {
    return "JSON Beautify";
  }

  transformData(input: string): string {
    let obj = {}
    try {
      obj = JSON.parse(input);
    } catch (e) {
      return "Invalid JSON string";
    }
    return JSON.stringify(obj, null, 4);
  }
}