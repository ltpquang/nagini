import {Transformer} from "./Transformer";

class Unescape implements Transformer {
  transformData(input: string): string {
    return input + " unescape";
  }

  name(): string {
    return "Unescape";
  }
}

export default Unescape
