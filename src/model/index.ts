export class Transaction {
<<<<<<< HEAD
    id: number
=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
    date: Date
    user: string
    type: TransactionType
    category: Category
    amountOfMoney: number
    comment?: string

<<<<<<< HEAD
    constructor(id: number, date: Date, user: string, type: TransactionType, category: Category, amountOfMoney: number, comment?: string) {
        this.id = id
=======
    constructor(date: Date, user: string, type: TransactionType, category: Category, amountOfMoney: number, comment?: string) {
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
        this.date = date
        this.user = user
        this.type = type
        this.category = category
        this.amountOfMoney = amountOfMoney
        this.comment = comment
    }
}

<<<<<<< HEAD
export interface EditedTransaction {
    id: number
    date?: Date
    user?: string
    type?: TransactionType
    category?: Category
    amountOfMoney?: number
    comment?: string
}

=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
export class TransactionType {
    name: string
    comment?: string

    constructor(name: string, comment?: string) {
        this.name = name
        this.comment = comment
    }
}

<<<<<<< HEAD
export interface CategorySynonym<V> {
    value: V

    matches(s: string): boolean
}

class CategorySynonymString implements CategorySynonym<string> {
    value: string
    constructor(value: string) {
        this.value = value
    }
    matches(s: string): boolean {
        return this.value.toLowerCase() === s.toLowerCase()
    }
}

class CategorySynonymRegExp implements CategorySynonym<RegExp> {
    value: RegExp
    constructor(value: RegExp) {
        this.value = value
    }
    matches(s: string): boolean {
        return this.value.test(s)
    }
}


export function parseCategorySynonym(s: string): CategorySynonymString | CategorySynonymRegExp {
    const r = /\/(.+)\//.exec(s)?.[1]
    if (r != null) return new CategorySynonymRegExp(RegExp(r, "i"))
    else return new CategorySynonymString(s)
}


=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
export class Category {
    transactionTypeName: string
    name: string
    parentCategoryName?: string
<<<<<<< HEAD
    synonyms: CategorySynonym<string | RegExp>[]
    comment?: string

    constructor(transactionTypeName: string, name: string, synonyms: CategorySynonym<string | RegExp>[], parentCategoryName?: string, comment?: string) {
=======
    synonyms: string[]
    comment?: string

    constructor(transactionTypeName: string, name: string, synonyms: string[], parentCategoryName?: string, comment?: string) {
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
        this.transactionTypeName = transactionTypeName
        this.name = name
        this.parentCategoryName = parentCategoryName
        this.synonyms = synonyms
        this.comment = comment
    }

<<<<<<< HEAD
    matches(s: string): boolean {
        return this.name.toLowerCase() === s.toLocaleLowerCase() || (this.synonyms.find(synonym => synonym.matches(s)) != null)
    }

=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
}