import { assert } from 'console'
import { TransactionTypesService } from './service/transactionTypes'
import { CategoriesService } from './service/categories'
import { TransactionsService } from './service/transactions'
<<<<<<< HEAD
import { StatisticService } from './service/statisic'
=======
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721

const moneyMgrEmail = process.env["MONEY_MGR_EMAIL"]
const moneyMgrKey = process.env["MONEY_MGR_KEY"]
assert(moneyMgrEmail != null, "No MONEY_MGR_EMAIL environment variable found")
assert(moneyMgrKey != null, "No MONEY_MGR_KEY environment variable found")

export const categoriesSvc =
<<<<<<< HEAD
    new CategoriesService("1mw8o4e8J_z_dpU44D-qfz5ZVuZSMa3sff3CfPbvYqc", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const transactionTypesSvc =
    new TransactionTypesService("1mw8o4e8J_z_dpU44D-qfz5ZVuZSMa3sff3CfPbvYqc", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const transactionsSvc =
    new TransactionsService("1mw8o4e8J_z_dpU44D-qfz5ZVuZSMa3sff3CfPbvYqc", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const statisticSvc =
    new StatisticService("1mw8o4e8J_z_dpU44D-qfz5ZVuZSMa3sff3CfPbvYqc", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
=======
    new CategoriesService("1vFPVVr7tcQFaJHQB4HbTegDHalB0DkUzp2EoYe-WHIU", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const transactionTypesSvc =
    new TransactionTypesService("1vFPVVr7tcQFaJHQB4HbTegDHalB0DkUzp2EoYe-WHIU", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const transactionsSvc =
    new TransactionsService("1vFPVVr7tcQFaJHQB4HbTegDHalB0DkUzp2EoYe-WHIU", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
>>>>>>> 59b45f267b8669b37dbb5d7b912d998a93367721
