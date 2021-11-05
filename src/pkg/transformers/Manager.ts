import BaseTransformer from "./BaseTransformer";
import NoOps from "./NoOps";
import Unescape from "./Unescape";

type CreateTransformerFunction = () => BaseTransformer;

class Transformer {
  make: CreateTransformerFunction

  constructor(make: CreateTransformerFunction) {
    this.make = make;
  }


  private static allTransformers: Map<string, Transformer> = new Map<string, Transformer>([
    ["noops", new Transformer(() => new NoOps())],
    ["unescape", new Transformer(() => new Unescape())]
  ])


  static forName(name: string): (Transformer | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, Transformer> {
    return this.allTransformers
  }
}

export default Transformer
