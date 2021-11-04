import {Badge, Row} from "react-bootstrap";
import React from "react";

class BaseTransformer {
  process(input: string): string {
    throw new Error("Not implemented");
  }

  name(): string {
    throw new Error("Not implemented");
  }

  render() {
    return <Row>
      <Badge bg="primary">Processor {this.name()}</Badge>
    </Row>
  }
}

export default BaseTransformer
