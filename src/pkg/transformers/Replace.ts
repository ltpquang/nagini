import {StringTransformer} from "../base/StringTransformer";

export default class Replace implements StringTransformer {
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
      try {
        return input.replaceAll(new RegExp(this.old, 'g'), this.new)
      } catch (e: unknown) {
        if (e instanceof TypeError) {
          return "Invalid RegEx"
        }
        return (e as Error).message
      }
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