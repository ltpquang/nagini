import BaseTransformer from "./BaseTransformer";

class Unescape extends BaseTransformer {
  process(input: string): string {
    return input + "unescape";
  }

  name(): string {
    return "Unescape";
  }
}

export default Unescape
