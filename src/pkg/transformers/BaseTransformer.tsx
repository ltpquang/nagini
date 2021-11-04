class BaseTransformer {
  process(input: string): string {
    throw new Error("Not implemented");
  }
}

export default BaseTransformer
