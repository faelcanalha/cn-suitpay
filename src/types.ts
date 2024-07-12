export declare type Address = {
  codIbge: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
};

export declare type Client = {
  name: string;
  document: string;
  phoneNumber?: string;
  email?: string;
  address?: Address;
};

export declare type Split = {
  username: string;
  percentageSplit: number;
};

export declare type Product = {
  description: string;
  quantity: number;
  value: number;
};

export declare type CashInCreateBody = {
  requestNumber: string;
  dueDate: string;
  amount: number;
  shippingAmount?: number;
  usernameCheckout?: string;
  client: Client;
  products?: Product[];
  split?: Split;
};

export declare type CashInCreateResponseSuccess = {
  idTransaction: string;
  paymentCodeBase64: string;
  paymentCode: string;
  response: string;
};

export declare type CashInCreateResponseError = {
  paymentCode: string;
  message: string;
  codeAntiFraud: any;
};

export declare type SuitPayClassProps = {
  callbackUrl?: string;
  sandbox?: boolean;
  ci: string;
  cs: string;
};
