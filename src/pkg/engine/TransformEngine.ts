import {Transformer} from "../transformers/Transformer";
import {forEach} from "react-bootstrap/ElementChildren";

class TransformEngine implements Transformer {
  static clone(from: TransformEngine): TransformEngine {
    let result = new TransformEngine()
    result._transformers = from.transformers
    return result
  }

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
