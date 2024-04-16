import React, { useCallback, useState } from "react";
import InputAtom from "./components/Input.Atom";
import TextAtom from "./components/Text.Atom";
import TextAtomEnum from "./components/Text.Atom/enum";
import { InputAtomEnum } from "./components/Input.Atom/enum";
import { FunctionalParamEditorProps } from "./type";

const FunctionalParamEditor: React.FC<FunctionalParamEditorProps> = ({
  paramsModels,
}) => {
  const { params, models } = paramsModels || {};
  const [paramValues, setParamValues] = useState(
    models?.[0]?.paramValues || []
  );

  const handleChange = useCallback((paramId: number, value: string) => {
    setParamValues((prevParamValues) =>
      prevParamValues.map((e) => (e.paramId === paramId ? { ...e, value } : e))
    );
  }, []);

  return (
    <>
      {params?.map((param) => (
        <div key={param.id}>
          <TextAtom type={TextAtomEnum.enum_h4}>{param.name}</TextAtom>
          <InputAtom
            type={InputAtomEnum.TEXT}
            value={paramValues.find((e) => e.paramId === param.id)?.value || ""}
            onChange={(value: string) => handleChange(param.id, value)}
          />
        </div>
      ))}
    </>
  );
};

export default React.memo(FunctionalParamEditor);
