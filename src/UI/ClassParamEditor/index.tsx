import React from "react";
import { ParamEditorProps, ParamEditorState } from "./type";
import styled from "./styled/class.module.css";

class ClassParamEditor extends React.Component<
  ParamEditorProps,
  ParamEditorState
> {
  constructor(props: ParamEditorProps) {
    super(props);
    this.state = {
      model: {
        paramValues: props.model.paramValues.slice(),
      },
    };
  }

  shouldComponentUpdate(
    nextProps: ParamEditorProps,
    nextState: ParamEditorState
  ) {
    return (
      nextProps.params !== this.props.params ||
      nextState.model !== this.state.model
    );
  }

  handleInputChange = (paramId: number, value: string) => {
    this.setState((prevState) => {
      const newParamValues = prevState.model.paramValues.map((pv) => {
        if (pv.paramId === paramId) {
          return { ...pv, value };
        }
        return pv;
      });
      return { model: { paramValues: newParamValues } };
    });
  };

  getModel = () => {
    return this.state.model;
  };

  render() {
    const { params } = this.props;
    const { model } = this.state;
    return (
      <div className={styled.block}>
        {params.map((param) => (
          <label key={param.id}>
            {param.name}:
            <input
              type={param.type}
              value={
                model.paramValues.find((pv) => pv.paramId === param.id)
                  ?.value || ""
              }
              onChange={(e) => this.handleInputChange(param.id, e.target.value)}
            />
          </label>
        ))}
      </div>
    );
  }
}

export default React.memo(ClassParamEditor);
