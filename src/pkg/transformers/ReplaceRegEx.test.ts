// import ReplaceRegEx from "./ReplaceRegEx";
//
// interface TestCase {
//   replace: string
//   by: string
//   from: string
//   expected: string
// }
//
// const testCases = new Array<TestCase>(
//     {
//       replace: 'i',
//       by: "a",
//       from: "hi there i want to replace this string",
//       expected: "ha there a want to replace thas strang"
//     },
//     {
//       replace: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} - - \\[\\d+/Nov/2021:\\d+:\\d+:\\d+ \\+0000\\]',
//       by: "",
//       from: "112.72.95.132 - - [14/Nov/2021:15:03:51 +0000] GET",
//       expected: " GET"
//     }
// )
//
// test(`replace regex`, () => {
//   testCases.forEach((t, _i, _a) => {
//     let trans = new ReplaceRegEx()
//     trans.old = t.replace
//     trans.new = t.by
//     expect(trans.transformData(t.from)).toBe(t.expected)
//   })
// })