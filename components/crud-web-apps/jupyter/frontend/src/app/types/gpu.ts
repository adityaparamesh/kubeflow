export interface GPUVendor {
  limitsKey: string;
  uiName: string;
}

export interface GPU {
  vendor?: string;
  num?: string;
  gpusCount: string[];
  vendors?: GPUVendor[];
}
