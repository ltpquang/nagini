import {StringTransformer} from "../base/StringTransformer";

export default class JsonBeautify implements StringTransformer {
  public permissive: boolean = false

  name(): string {
    return "JSON Beautify";
  }

  transformData(input: string): string {
    if (input.length === 0) {
      return input
    }
    return this.permissive
        ? this.transformPermissively(input)
        : this.transformNormal(input);
  }

  private transformPermissively(input: string): string {
    try {
      let dJSON = require('dirty-json');
      let obj = dJSON.parse(input);
      return JSON.stringify(obj, null, 4);
    } catch (e) {
      return "Invalid JSON string";
    }
  }

  private transformNormal(input: string): string {
    try {
      let obj = JSON.parse(input);
      return JSON.stringify(obj, null, 4);
    } catch (e) {
      return "Invalid JSON string";
    }
  }

  static fromPartial(p: Partial<JsonBeautify>): JsonBeautify {
    let result = new JsonBeautify()
    result.permissive = p.permissive ?? false
    return result
  }
}