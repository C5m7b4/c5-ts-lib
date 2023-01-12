export type isValidType = number | string | Date | object | undefined;

export type PadInput = string | number;
export type PadDirection = 'left' | 'right';

export type FormatDateType = Date | string;

export type MoneyInput = string | number;

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
