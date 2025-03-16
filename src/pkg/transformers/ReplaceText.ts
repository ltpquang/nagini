// import {StringTransformer} from "../base/StringTransformer";
//
// export default class ReplaceText implements StringTransformer {
//   public old: string = "";
//   public new: string = "";
//
//   name(): string {
//     return "Replace Text";
//   }
//
//   transformData(input: string): string {
//     if (this.old.length === 0) {
//       return input
//     }
//     return input.replaceAll(this.old, this.new)
//   }
//
//   static fromPartial(p: Partial<ReplaceText>): ReplaceText {
//     let result = new ReplaceText()
//     result.old = p.old ?? ""
//     result.new = p.new ?? ""
//     return result
//   }
// }