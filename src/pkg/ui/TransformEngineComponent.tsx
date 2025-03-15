import TransformEngine from "../base/TransformEngine";
import {useEffect, useState} from "react";
import {TransformerNode} from "./TransformerNode";
import {StringTransformer} from "../base/StringTransformer";
import {Collapse, Dropdown, MenuProps, Space} from "antd";
import type {CollapseProps} from 'antd';
import TransformerBlueprint from "../base/TransformerBlueprint.ts";
import {DownOutlined} from "@ant-design/icons";

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

    const transformerMeta = TransformerBlueprint.forName(eventKey)
    if (!transformerMeta) {
      return
    }

    engine.addTransformer(transformerMeta.newInstance())
    setEngine(prevState => TransformEngine.clone(prevState))
  }

  const handleChangeTransformer = (index: number, transformer: StringTransformer) => {
    engine.replaceTransformer(index, transformer)
    setEngine(prevState => TransformEngine.clone(prevState))
  }

  const handleRemoveTransformer = (index: number) => {
    engine.removeTransformer(index)
    setEngine(prevState => TransformEngine.clone(prevState))
  }

  const onClick: MenuProps['onClick'] = ({key}) => {
    handleAddTransformer(key);
  };

  const dropdownItems: MenuProps['items'] =
    Array
      .from(TransformerBlueprint.all().entries())
      .map(([key, value]) => {
        return {
          label: value.newInstance().name(),
          key: key,
        }
      })


  const items: CollapseProps['items'] =
    engine.transformers.map((transformer, index) => {
      return {
        key: index.toString(),
        label: transformer.name(),
        children: <TransformerNode
          index={index}
          key={index.toString()}
          transformer={transformer}
          onChange={(index, updated) => handleChangeTransformer(index, updated)}
          onRemove={(index) => handleRemoveTransformer(index)}
        />,
      }
    });

  return (
    <div>
      <Collapse accordion items={items}/>

      <Dropdown
        menu={
          {
            dropdownItems,
            onClick
          }
        }
        trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Add transformer
            <DownOutlined/>
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default TransformEngineComponent;
