import {Transformer} from "./Transformer";

export default class Unescape implements Transformer {
  transformData(input: string): string {
    return unescape(input);
  }

  name(): string {
    return "Unescape";
  }
}
