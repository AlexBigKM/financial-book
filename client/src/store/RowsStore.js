import {makeAutoObservable} from "mobx";

export default class RowsStore {
    constructor() {
        this._row = [
            // {id: 1, type: 'INCOMING', createdAt: "22/03/2022", name: "Donate", description: "For ukrainian army", number: 300},
            // {id: 2, type: 'INCOMING', createdAt: "22/03/2022", name: "Donate", description: "For ukrainian kids", number: 400},
            // {id: 3, type: 'EXCOMING', createdAt: "22/03/2022", name: "Donate", description: "For ukrainian army", number: 700},
            // {id: 4, type: 'INCOMING', createdAt: "23/03/2022", name: "Donate", description: "For ukrainian army", number: 600},
            // {id: 5, type: 'EXCOMING', createdAt: "23/03/2022", name: "Donate", description: "For ukrainian kids", number: 100},
            // {id: 6, type: 'INCOMING', createdAt: "24/03/2022", name: "Donate", description: "For ukrainian army", number: 700},
            // {id: 7, type: 'INCOMING', createdAt: "24/03/2022", name: "Donate", description: "For ukrainian army", number: 500},
            // {id: 8, type: 'EXCOMING', createdAt: "25/03/2022", name: "Donate", description: "For ukrainian kids", number: 800},
            // {id: 9, type: 'EXCOMING', createdAt: "26/03/2022", name: "Donate", description: "For ukrainian army", number: 900},
        ]
        makeAutoObservable(this)
    }

    setRow(row) {
        this._row = row
    }

    get row() {
        return this._row
    }

}