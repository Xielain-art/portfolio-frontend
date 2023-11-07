import { IExperience } from '../../models/experience.model';

export interface IExperienceState {
  experience: IExperience[];
}

export const initialExperienceState: IExperienceState = {
  experience: [],
};
