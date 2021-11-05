import BaseTransformer from "./BaseTransformer";

class NoOps extends BaseTransformer {
  process(input: string): string {
    return input;
  }

  name(): string {
    return "No ops";
  }
}

export default NoOps
