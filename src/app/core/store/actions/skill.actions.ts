import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SkillsActions = createActionGroup({
  source: 'Skill',
  events: {
    'Get Skills': emptyProps(),
    'Get Skills Success': emptyProps(),
    'Delete Skill': props<{ id: number }>(),
    'Update Skill': props<{ id: number }>(),
  },
});
