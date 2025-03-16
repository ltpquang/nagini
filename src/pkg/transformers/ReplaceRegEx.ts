// import {StringTransformer} from "../base/StringTransformer";
//
// export default class ReplaceRegEx implements StringTransformer {
//   public old: string = "";
//   public new: string = "";
//
//   name(): string {
//     return "Replace RegEx";
//   }
//
//   transformData(input: string): string {
//     if (this.old.length === 0) {
//       return input
//     }
//
//     try {
//       return input.replaceAll(new RegExp(this.old, 'g'), this.new)
//     } catch (e: unknown) {
//       if (e instanceof TypeError) {
//         return "Invalid RegEx"
//       }
//       return (e as Error).message
//     }
//   }
//
//   static fromPartial(p: Partial<ReplaceRegEx>): ReplaceRegEx {
//     let result = new ReplaceRegEx()
//     result.old = p.old ?? ""
//     result.new = p.new ?? ""
//     return result
//   }
// }