import { IPortfolio } from '../../models/portfolio.model';

export interface IPortfolioState {
  portfolio: IPortfolio[];
}

export const initialPortfolioState: IPortfolioState = {
  portfolio: [],
};
