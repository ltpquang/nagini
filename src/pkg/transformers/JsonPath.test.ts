import JsonPath from "./JsonPath";

interface TestCase {
  input: string
  jsonPath: string
  expected: string
}

const testCases = new Array<TestCase>(
    {
      input:
`[
  { "name": \t\t"London", "population": 8615246 },
  { "name": \t\t"Berlin", "population": 3517424 },
  { "name": \t\t"Madrid", "population": 3165235 },
  { "name": \t\t"Rome",   "population": 2870528 }
]`,
      jsonPath: "$..name",
      expected: 'London,Berlin,Madrid,Rome'
    },
)

test(`json path string`, () => {
  testCases.forEach((t, _i, _a) => {
    let trans = new JsonPath()
    trans.jsonPath = t.jsonPath
    expect(trans.transformData(t.input)).toBe(t.expected)
  })
})