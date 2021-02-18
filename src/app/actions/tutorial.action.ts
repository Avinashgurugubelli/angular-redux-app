import { Tutorial } from './../models/tutorial.model';


export class AddTutorial {
    static readonly type: string = 'Tutorial/add';

    constructor(public tutorial: Tutorial) { }
}

export class RemoveTutorial {
    static readonly type: string = 'Tutorial/remove';

    constructor(public payload: string) { }
}