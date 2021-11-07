import {Transformer} from "./Transformer";

class NoOps implements Transformer {
  transformData(input: string): string {
    return input + " noops";
  }

  name(): string {
    return "No ops";
  }
}

export default NoOps
