import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from './../models/tutorial.model'
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action'

// Section 2
export class TutorialStateModel {
    public tutorials: Tutorial[] = [];
}

// Section 3
@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})


export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials;
    }

    @Action(AddTutorial)
    add({ getState, patchState }: StateContext<TutorialStateModel>, { tutorial }: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, tutorial]
        })
    }

    @Action(RemoveTutorial)
    remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload)
        });
    }
}