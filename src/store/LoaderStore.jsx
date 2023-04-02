import {makeAutoObservable} from "mobx";
import Loader from "../components/UI/Loader/Loader.jsx";

export default class LoaderStore {
    constructor() {
        this._visible = false
        this._children = Loader
        makeAutoObservable(this)
    }

    setVisible(visible) {
        this._visible = visible
    }

    get visible() {
        return this._visible
    }

    setChildren(children) {
        this._children = children
    }

    get children() {
        return this._children
    }
}