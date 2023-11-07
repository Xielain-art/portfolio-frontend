import { ILoginResponse } from '../../models/login-response.model';

export interface ITokenState {
  token: ILoginResponse | null;
}

export const initialTokenState: ITokenState = {
  token: null,
};
