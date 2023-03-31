import {makeAutoObservable} from "mobx";

export default class LoaderStore {
    constructor() {
        this._visible = false
        makeAutoObservable(this)
    }

    setVisible(visible) {
        this._visible = visible
    }

    get visible() {
        return this._visible
    }
}