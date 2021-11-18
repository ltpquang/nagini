import {StringTransformer} from "../base/StringTransformer";
import jp from 'jsonpath'

export default class JsonPath implements StringTransformer {
  public jsonPath: string = ""

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
      let resultObj = jp.query(obj, this.jsonPath)
      return resultObj.toString()
    } catch (e) {
      return "Invalid JSON string";
    }
  }

  static fromPartial(p: Partial<JsonPath>): JsonPath {
    let result = new JsonPath()
    result.jsonPath = p.jsonPath ?? ""
    return result
  }
}