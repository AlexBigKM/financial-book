import {makeAutoObservable} from "mobx";

export default class RowsStore {
    constructor() {
        this._row = []
        makeAutoObservable(this)
    }

    setRow(row) {
        this._row = row
    }

    get row() {
        return this._row
    }

}