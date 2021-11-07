import {Transformer} from "../transformers/Transformer";

class TransformEngine implements Transformer {
  private _transformers: Transformer[] = [];
  get transformers(): Transformer[] {
    return this._transformers;
  }

  addTransformer(input: Transformer) {
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
