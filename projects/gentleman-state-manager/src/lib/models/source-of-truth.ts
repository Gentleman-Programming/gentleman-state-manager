import { GentlemanStateObject } from "../models/public-api";
import { StateProperties } from "./state";

export type SourceOfTruth = Map<string, GentlemanStateObject>;

export interface SourceOfTruthInitiate {
  key: string;
  state: any;
  stateProperties: StateProperties;
}
