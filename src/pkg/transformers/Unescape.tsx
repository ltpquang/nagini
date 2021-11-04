import BaseTransformer from "./BaseTransformer";

class Unescape extends BaseTransformer {
  process(input: string): string {
    return unescape(input);
  }
}

export default Unescape
