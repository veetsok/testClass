import { Model, Params } from "@/business.InterfaceLayer/type";

export interface ParamEditorProps {
  params: Params[];
  model: Model;
}

export interface ParamEditorState {
  model: Model;
}
