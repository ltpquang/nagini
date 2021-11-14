import {StringTransformer} from "./StringTransformer";

class TransformEngine implements StringTransformer {
  static clone(from: TransformEngine): TransformEngine {
    let result = new TransformEngine()
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

  transformData(input: string): string {
    let result = input
    this.transformers.forEach((trans, index, _a) => {
      result = trans.transformData(result)
    })
    return result
  }


  name(): string {
    return "Transform Engine";
  }
}

export default TransformEngine
