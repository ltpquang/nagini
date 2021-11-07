import NoOps from "./NoOps";
import Unescape from "./Unescape";
import {Transformer} from "./Transformer";

type CreateTransformerFunction = () => Transformer;

export default class TransformerMeta {
  newInstance: CreateTransformerFunction

  constructor(make: CreateTransformerFunction) {
    this.newInstance = make;
  }

  private static allTransformers: Map<string, TransformerMeta> = new Map<string, TransformerMeta>([
    ["noops", new TransformerMeta(() => new NoOps())],
    ["unescape", new TransformerMeta(() => new Unescape())]
  ])

  static forName(name: string): (TransformerMeta | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, TransformerMeta> {
    return this.allTransformers
  }
}
