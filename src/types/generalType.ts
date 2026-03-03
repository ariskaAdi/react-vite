// For AxiosResponse generic type
// Used for our api response structure
export interface IApiResponse<T> {
  data: T;
  message?: string;
  meta?: {
    currentPage: number;
    totalPage: number;
  };
  status: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ILabelValue<ExtraProps extends object = Record<string, any>> =
  ExtraProps & {
    label: string;
    value: string;
  };

export type TPallette =
  | "purple"
  | "orange"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "neutral";

export type TPalletteDepth =
  | 5
  | 10
  | 25
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
