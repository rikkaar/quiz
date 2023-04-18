import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._user = {}
        makeAutoObservable(this)
    }
    setUser(user) {
        this._user = user
    }

    deleteAnswer(answerField) {
        this._user = Object.fromEntries(
            Object.entries(this._user).filter(answer => answer[0] !== answerField)
        )
    }

    get user() {
        return this._user
    }

    async login() {
        try {
        } catch (e) {
        }
    }
}