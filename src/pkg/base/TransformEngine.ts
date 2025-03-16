import {StringTransformer} from "./StringTransformer";

class TransformEngine implements StringTransformer {
  static clone(from: TransformEngine): TransformEngine {
    const result = new TransformEngine()
    result._transformers = from.transformers
    return result
  }

  private _transformers: StringTransformer[] = [];
  get transformers(): StringTransformer[] {
    return this._transformers;
  }

  addTransformer(input: StringTransformer) {
    this._transformers.push(input)
  }

  replaceTransformer(index: number, input: StringTransformer) {
    if (this._transformers[index]) {
      this._transformers[index] = input
    }
  }

  removeTransformer(index: number) {
    if (this._transformers[index]) {
      this._transformers.splice(index, 1);
    }
  }

  transformData(input: string): string {
    let result = input
    this.transformers.forEach((trans) => {
      result = trans.transformData(result)
    })
    return result
  }


  name(): string {
    return "Transform Engine";
  }
}

export default TransformEngine
