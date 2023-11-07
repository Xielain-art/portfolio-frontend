import { ISkill } from '../../models/skill.model';

export interface ISkillState {
  skills: ISkill[];
}

export const initialSkillState: ISkillState = {
  skills: [],
};
