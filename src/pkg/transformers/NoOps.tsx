import BaseTransformer from "./BaseTransformer";

class NoOps extends BaseTransformer {
  process(input: string): string {
    return input;
  }
}

export default NoOps
