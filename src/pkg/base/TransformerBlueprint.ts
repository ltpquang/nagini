import Unescape from "../transformers/Unescape";
import {StringTransformer} from "./StringTransformer";
import JsonBeautify from "../transformers/JsonBeautify";
import Replace from "../transformers/Replace";
import JsonPath from "../transformers/JsonPath";

type CreateTransformerFunction = () => StringTransformer;

export default class TransformerBlueprint {
  newInstance: CreateTransformerFunction

  constructor(make: CreateTransformerFunction) {
    this.newInstance = make;
  }

  private static allTransformers: Map<string, TransformerBlueprint> = new Map<string, TransformerBlueprint>([
    ["unescape", new TransformerBlueprint(() => new Unescape())],
    ["jsonbeautify", new TransformerBlueprint(() => new JsonBeautify())],
    ["jsonpath", new TransformerBlueprint(() => new JsonPath())],
    ["replace", new TransformerBlueprint(() => new Replace())]
  ])

  static forName(name: string): (TransformerBlueprint | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, TransformerBlueprint> {
    return this.allTransformers
  }
}
