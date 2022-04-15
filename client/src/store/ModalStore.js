import {makeAutoObservable} from "mobx";

export default class ModalStore {
    constructor() {
        this._modal = false;
        makeAutoObservable(this)
    }

    setModal(bool) {
        this._modal = bool
    }

    get modal() {
        return this._modal
    }

}