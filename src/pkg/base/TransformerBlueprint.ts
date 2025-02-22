import Unescape from "../transformers/Unescape";
import {StringTransformer} from "./StringTransformer";
import ReplaceText from "../transformers/ReplaceText";
import JsonPath from "../transformers/JsonPath";
import ReplaceRegEx from "../transformers/ReplaceRegEx";

type CreateTransformerFunction = () => StringTransformer;

export default class TransformerBlueprint {
  newInstance: CreateTransformerFunction

  constructor(make: CreateTransformerFunction) {
    this.newInstance = make;
  }

  private static allTransformers: Map<string, TransformerBlueprint> = new Map<string, TransformerBlueprint>([
    // ["jsonbeautify", new TransformerBlueprint(() => new JsonBeautify())],
    ["jsonpath", new TransformerBlueprint(() => new JsonPath())],
    ["replaceregex", new TransformerBlueprint(() => new ReplaceRegEx())],
    ["replacetext", new TransformerBlueprint(() => new ReplaceText())],
    ["unescape", new TransformerBlueprint(() => new Unescape())]
  ])

  static forName(name: string): (TransformerBlueprint | undefined) {
    return this.allTransformers.get(name)
  }

  static all(): Map<string, TransformerBlueprint> {
    return this.allTransformers
  }
}
