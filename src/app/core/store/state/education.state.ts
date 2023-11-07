import { IEducation } from '../../models/education.model';

export interface IEducationState {
  education: IEducation[];
}

export const initialEducationState: IEducationState = {
  education: [],
};
