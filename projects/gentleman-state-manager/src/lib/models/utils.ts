export type TypeWithKey<T> = { [key: string]: T };

export interface Condition {
    met: boolean;
    value: any;
}
