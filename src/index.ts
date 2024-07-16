import axiosStatic, { AxiosInstance } from "axios";
import {
  CashInCreateBody,
  CashInCreateResponseError,
  CashInCreateResponseSuccess,
  SuitPayClassProps,
} from "./types";
export * from "./types";

export class SuitPayApi {
  private axios: AxiosInstance;
  public pix: {
    create: (
      body: CashInCreateBody
    ) => Promise<CashInCreateResponseSuccess | CashInCreateResponseError>;
  };

  constructor({ callbackUrl, ci, cs, sandbox = false }: SuitPayClassProps) {
    const baseURL = sandbox
      ? "https://sandbox.ws.suitpay.app"
      : "https://ws.suitpay.app";

    this.axios = axiosStatic.create({
      baseURL,
      headers: {
        ci,
        cs,
      },
    });

    this.pix = {
      create: async (
        body: CashInCreateBody
      ): Promise<CashInCreateResponseSuccess | CashInCreateResponseError> => {
        try {
          const response = await this.axios.post(
            "/api/v1/gateway/request-qrcode",
            {
              ...body,
              callbackUrl,
            }
          );
          return response.data as CashInCreateResponseSuccess;
        } catch (e: any) {
          return e.response.data as CashInCreateResponseError;
        }
      },
    };
  }
}

export default SuitPayApi;
