import {Transformer} from "../base/Transformer";

export default class JsonBeautify implements Transformer {
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