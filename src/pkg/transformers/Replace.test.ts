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