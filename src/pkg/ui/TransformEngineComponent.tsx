import TransformEngine from "../base/TransformEngine";
import {Accordion, Dropdown, DropdownButton} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import TransformerBlueprint from "../base/TransformerBlueprint";
import {TransformerNode} from "./TransformerNode";
import {StringTransformer} from "../base/StringTransformer";

interface Props {
  onChange?: (engine: TransformEngine) => void
}

const TransformEngineComponent = ({onChange}: Props) => {
  const [engine, setEngine] = useState(new TransformEngine())

  useEffect(() => {
    if (onChange) {
      onChange(engine)
    }
  }, [engine, onChange])

  const handleAddTransformer = (eventKey: string | null) => {
    if (!eventKey) {
      return
    }

    let transformerMeta = TransformerBlueprint.forName(eventKey)
    if (!transformerMeta) {
      return
    }

    engine.addTransformer(transformerMeta.newInstance())

    setEngine(prevState => TransformEngine.clone(prevState))
  }

  const renderSupportedNodes = () => {
    let result: JSX.Element[] = []
    TransformerBlueprint.all().forEach((value, key, _) => result.push(
        <Dropdown.Item
            as="button"
            key={key}
            eventKey={key}>{value.newInstance().name()}</Dropdown.Item>));
    return result
  }

  function handleOnChange(index: number, transformer: StringTransformer) {
    console.log(index, transformer)
  }

  return (
      <div>
        <Accordion>
          {
            engine.transformers.map(
                (transformer, index, _) =>
                    <TransformerNode index={index}
                                     key={index.toString()}
                                     transformer={transformer}
                                     onChange={(index, updated) => handleOnChange(index, updated)}
                    />
            )
          }
        </Accordion>

        <DropdownButton id="dropdown-item-button" title="Add node"
                        onSelect={(eventKey) => handleAddTransformer(eventKey)}>
          {renderSupportedNodes()}
        </DropdownButton>
      </div>
  )
}

export default TransformEngineComponent;
