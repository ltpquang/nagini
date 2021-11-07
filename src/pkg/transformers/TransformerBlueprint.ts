import NoOps from "./NoOps";
import Unescape from "./Unescape";
import {Transformer} from "./Transformer";

type CreateTransformerFunction = () => Transformer;

export default class TransformerBlueprint {
  newInstance: CreateTransformerFunction

  constructor(make: CreateTransformerFunction) {
    this.newInstance = make;
  }

  private static allTransformers: Map<string, TransformerBlueprint> = new Map<string, TransformerBlueprint>([
    ["noops", new TransformerBlueprint(() => new NoOps())],
    ["unescape", new TransformerBlueprint(() => new Unescape())]
  ])

  static forName(name: string): (TransformerBlueprint | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, TransformerBlueprint> {
    return this.allTransformers
  }
}
