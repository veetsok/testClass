export interface Params {
  id: number;
  name: string;
  type: "string";
}

export interface ParamsValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamsValue[];
}

export interface ParamsModelsData {
  params: Params[];
  models: Model[];
}
