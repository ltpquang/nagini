export interface StringTransformer {
  transformData(input: string): string
  name(): string
}
