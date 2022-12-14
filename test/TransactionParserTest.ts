import { transactionParser } from '../src/parser'
import { deepStrictEqual, strictEqual } from 'assert'
import { ParsedTransaction } from '../src/model/parsed'
<<<<<<< HEAD
import { Category, parseCategorySynonym } from '../src/model'

const cat = (transactionType: string, name: string, synonyms: string[]) => new Category(transactionType, name, synonyms.map(parseCategorySynonym))

const testCategories = [
    cat("расходы", "продукты", ["еда"]),
    cat("расходы", "автомобиль", ["/(бенз(ин)?|запчасти)/"]),
    cat("доходы", "зарплата", []),
    cat("доходы", "кэшбек", ["бонусы", "бонусы tinkoff банк", "бонусы tinkoff"])]
=======
import { Category } from '../src/model'

const testCategories = [
    new Category("расходы", "продукты", ["еда"]),
    new Category("расходы", "автомобиль", []),
    new Category("доходы", "зарплата", [])]
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721

const categoryByName = (name: string) => testCategories.find(c => c.name === name)!

describe("transaction parser", () => {
    it("can parse categories", () => {
        deepStrictEqual(transactionParser(testCategories).category.parse("Продукты"), { status: true, value: categoryByName('продукты') })
        deepStrictEqual(transactionParser(testCategories).category.parse("зарплата"), { status: true, value: categoryByName('зарплата') })
    })
    it("can parse categories by synonyms", () => {
        deepStrictEqual(transactionParser(testCategories).category.parse("еда"), { status: true, value: categoryByName('продукты') })
<<<<<<< HEAD
        deepStrictEqual(transactionParser(testCategories).category.parse("бензин"), { status: true, value: categoryByName('автомобиль') })
        deepStrictEqual(transactionParser(testCategories).category.parse("бенз"), { status: true, value: categoryByName('автомобиль') })
    })
    it("can parse categories by RegExp synonyms", () => {
        deepStrictEqual(transactionParser(testCategories).category.parse("бензин"), { status: true, value: categoryByName('автомобиль') })
        deepStrictEqual(transactionParser(testCategories).category.parse("бенз"), { status: true, value: categoryByName('автомобиль') })
=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
    })
    it("can parse amount of money", () => {
        deepStrictEqual(transactionParser([]).amountOfMoney.parse("1234"), { status: true, value: 1234 })
        deepStrictEqual(transactionParser([]).amountOfMoney.parse("1234.234"), { status: true, value: 1234.234 })
        deepStrictEqual(transactionParser([]).amountOfMoney.parse("1234,234"), { status: true, value: 1234.234 })
        deepStrictEqual(transactionParser([]).amountOfMoney.parse("1234,234 Рублей"), { status: true, value: 1234.234 })
    })
    it("can parse date", () => {
        const d1 = transactionParser([]).date.tryParse("Вчера")
        strictEqual(d1.getDate(), new Date().getDate() - 1)
        const d2 = transactionParser([]).date.tryParse("позавчера")
        strictEqual(d2.getDate(), new Date().getDate() - 2)
        const d3 = transactionParser([]).date.tryParse("2 Дня назад")
        strictEqual(d3.getDate(), new Date().getDate() - 2)
    })
    it("can parse transaction", () => {
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("продукты    123.234"),
            { status: true, value: new ParsedTransaction(categoryByName("продукты"), 123.234) }
        )
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("123.234 руБ. зарплата"),
            { status: true, value: new ParsedTransaction(categoryByName("зарплата"), 123.234) }
        )
    })
<<<<<<< HEAD
    it("can parse categories in transaction by longest string expression", () => {
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("бонусы 100 р"),
            { status: true, value: new ParsedTransaction(categoryByName('кэшбек'), 100) }
        )
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("бонусы tinkoff 500"),
            { status: true, value: new ParsedTransaction(categoryByName('кэшбек'), 500) }
        )
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("бонусы tinkoff банк 500"),
            { status: true, value: new ParsedTransaction(categoryByName('кэшбек'), 500) }
        )
    })
=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
    it("can parse transaction with comment", () => {
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("продукты    123.234    рублей   макароны, мясо"),
            { status: true, value: new ParsedTransaction(categoryByName("продукты"), 123.234, "макароны, мясо") }
        )
        deepStrictEqual(
            transactionParser(testCategories).transaction.parse("123.234руб зарплата на мою карту"),
            { status: true, value: new ParsedTransaction(categoryByName("зарплата"), 123.234, "на мою карту") }
        )
    })
    it("can parse transaction with comment and date", () => {
        const t1 = transactionParser(testCategories).transaction.tryParse("вчера продукты    123.234    рублей   Макароны, Мясо")
        strictEqual(t1.date?.getDate(), new Date().getDate() - 1)
        strictEqual(t1.category, categoryByName("продукты"))
        strictEqual(t1.amountOfMoney, 123.234)
        strictEqual(t1.comment, "Макароны, Мясо")
    })
    it("can parse transaction with arithmetic expression", () => {
        deepStrictEqual(
            transactionParser(testCategories).transaction.tryParse("продукты  123 р + 345 руб. + 3 -23    рублей   макароны, мясо"),
            new ParsedTransaction(categoryByName("продукты"), 123 + 345 + 3 - 23, "макароны, мясо")
        )
        deepStrictEqual(
            transactionParser(testCategories).transaction.tryParse("123+345+3-23 автомобиль запчасти"),
            new ParsedTransaction(categoryByName("автомобиль"), 123 + 345 + 3 - 23, "запчасти")
        )
    })
})