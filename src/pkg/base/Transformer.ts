export interface Transformer {
  transformData(input: string): string
  name(): string
}
