import { Category } from "."

<<<<<<< HEAD
export class ParsedCategory extends Category {
    userText?: string
}

export class ParsedTransaction {
    category: ParsedCategory
=======
export class ParsedTransaction {
    category: Category
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
    amountOfMoney: number
    comment?: string
    date?: Date

<<<<<<< HEAD
    constructor(category: ParsedCategory, amountOfMoney: number, comment?: string, date?: Date) {
=======
    constructor(category: Category, amountOfMoney: number, comment?: string, date?: Date) {
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
        this.category = category
        this.amountOfMoney = amountOfMoney
        this.comment = comment
        this.date = date
    }
}