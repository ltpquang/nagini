import {Transformer} from "../base/Transformer";

export default class Replace implements Transformer {
  public old: string = "";
  public new: string = "";
  public useRegEx: boolean = false;

  name(): string {
    return "Replace";
  }

  transformData(input: string): string {
    if (this.old.length === 0) {
      return input
    }

    if (this.useRegEx) {
      return input.replaceAll(new RegExp(this.old), this.new)
    } else {
      return input.replaceAll(this.old, this.new)
    }
  }

  static fromPartial(p: Partial<Replace>): Replace {
    let result = new Replace()
    result.old = p.old ?? ""
    result.new = p.new ?? ""
    result.useRegEx = p.useRegEx ?? false
    return result
  }
}