import Replace from "./Replace";

interface TestCase {
  replace: string
  by: string
  useRegex: boolean
  from: string
  expected: string
}

const testCases = new Array<TestCase>(
    {
      replace: "i",
      by: "a",
      useRegex: false,
      from: "hi there i want to replace this string",
      expected: "ha there a want to replace thas strang"
    },
    {
      replace: 'i',
      by: "a",
      useRegex: true,
      from: "hi there i want to replace this string",
      expected: "ha there a want to replace thas strang"
    },
    {
      replace: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3} - - \\[\\d+/Nov/2021:\\d+:\\d+:\\d+ \\+0000\\]',
      by: "",
      useRegex: true,
      from: "112.72.95.132 - - [14/Nov/2021:15:03:51 +0000] GET",
      expected: " GET"
    }
)

test(`replace string`, () => {
  testCases.forEach((t, _i, _a) => {
    let trans = new Replace()
    trans.useRegEx = t.useRegex
    trans.old = t.replace
    trans.new = t.by
    expect(trans.transformData(t.from)).toBe(t.expected)
  })
})