import {StringTransformer} from "../base/StringTransformer";

export default class JsonPath implements StringTransformer {
  public jsonPath: string = ""
  private jp = require('jsonpath')

  name(): string {
    return "JSON Path Query";
  }

  transformData(input: string): string {
    if (this.jsonPath.length === 0) {
      return input;
    }
    try {
      input = input.replaceAll('\n', '')
      let obj = JSON.parse(input);
      let resultObj = this.jp.query(obj, this.jsonPath)
      return resultObj.toString()
    } catch (e) {
      return "Invalid JSON string";
    }
  }
}