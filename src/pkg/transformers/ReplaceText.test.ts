import ReplaceText from "./ReplaceText";

interface TestCase {
  replace: string
  by: string
  from: string
  expected: string
}

const testCases = new Array<TestCase>(
    {
      replace: "i",
      by: "a",
      from: "hi there i want to replace this string",
      expected: "ha there a want to replace thas strang"
    }
)

test(`replace text`, () => {
  testCases.forEach((t, _i, _a) => {
    let trans = new ReplaceText()
    trans.old = t.replace
    trans.new = t.by
    expect(trans.transformData(t.from)).toBe(t.expected)
  })
})