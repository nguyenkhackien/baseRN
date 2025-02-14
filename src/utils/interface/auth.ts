export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IResponseLogin {
  account: any;
  token: IToken;
  role: string;
}

interface IToken {
  access: string;
  refresh: string;
}

export interface AuthState {
  accessToken: string | null | undefined;
}
