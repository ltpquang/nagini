import Unescape from "./Unescape";
import {Transformer} from "./Transformer";
import JsonBeautify from "./JsonBeautify";
import Replace from "./Replace";

type CreateTransformerFunction = () => Transformer;

export default class TransformerBlueprint {
  newInstance: CreateTransformerFunction

  constructor(make: CreateTransformerFunction) {
    this.newInstance = make;
  }

  private static allTransformers: Map<string, TransformerBlueprint> = new Map<string, TransformerBlueprint>([
    ["unescape", new TransformerBlueprint(() => new Unescape())],
    ["jsonbeautify", new TransformerBlueprint(() => new JsonBeautify())],
    ["replace", new TransformerBlueprint(() => new Replace())]
  ])

  static forName(name: string): (TransformerBlueprint | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, TransformerBlueprint> {
    return this.allTransformers
  }
}
