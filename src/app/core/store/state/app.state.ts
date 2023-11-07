import { IEducationState, initialEducationState } from './education.state';
import { IExperienceState, initialExperienceState } from './experience.state';
import { initialPortfolioState, IPortfolioState } from './portfolio.state';
import { initialSkillState, ISkillState } from './skill.state';
import { initialTokenState, ITokenState } from './token.state';

export interface IAppState {
  portfolio: IPortfolioState;
  skills: ISkillState;
  education: IEducationState;
  experience: IExperienceState;
  token: ITokenState;
}

export const initialAppState: IAppState = {
  portfolio: initialPortfolioState,
  skills: initialSkillState,
  experience: initialExperienceState,
  education: initialEducationState,
  token: initialTokenState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
