import BaseTransformer from "./BaseTransformer";
import NoOps from "./NoOps";
import Unescape from "./Unescape";

type CreateTransformerFunction = () => BaseTransformer;

class Transformer {
  name: string
  make: CreateTransformerFunction

  constructor(name: string, make: CreateTransformerFunction) {
    this.name = name;
    this.make = make;
  }


  private static allTransformers: Map<string, Transformer> = new Map<string, Transformer>([
    ["noops", new Transformer("No ops", () => new NoOps())],
    ["unescape", new Transformer("Unescape", () => new Unescape())]
  ])


  static forName(name: string): (Transformer | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, Transformer> {
    return this.allTransformers
  }
}

export default Transformer
