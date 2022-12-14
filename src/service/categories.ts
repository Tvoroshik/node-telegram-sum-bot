import { AbstractGoogleSpreadsheetService } from "."
<<<<<<< HEAD
import { Category, parseCategorySynonym } from "../model"
=======
import { Category } from "../model"
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721

export class CategoriesService extends AbstractGoogleSpreadsheetService {

    constructor(sheetId: string, authEmail: string, authKey: string) {
        super(sheetId, authEmail, authKey)
    }

    async getCategories(): Promise<Category[]> {
        const d = await this.doc
        const sheet = d.sheetsByTitle["categories"]
        const rows = await sheet.getRows()
<<<<<<< HEAD
        return rows.map(r =>
            new Category(
                r["transactionType"],
                r["name"],
                (<string>r["synonyms"])?.split("\n").map(parseCategorySynonym) || [],
                r["parent"]))
=======
        return rows.map(r => new Category(r["transactionType"], r["name"], (<string>r["synonyms"])?.split("\n") || [], r["parent"]))
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
    }

}