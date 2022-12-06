# Telegram bot for manage money in google tables with node js 

## Install/Launch product:
1. Install NodeJs/NPM 
>nice in NPM 8.15

2. Install additions npm in dir with project:

>npm install
3. Add google table:
Download xlsx on google tables, create service-account, create key and download json this key. 
Allow service account access to Google table. 
Take id google table and add id in services.ts instead of an example 4 times., for example:

>(1mw8o4e8J_z_dpU44D-qfz5ZVuZSMa3sff3CfPbvYqc).
4. Add environment variables:
```
MONEY_MGR_EMAIL - email service account

MONEY_MGR_KEY - key service account

TG_BOT_TOKEN - token telegram father
```
### Example add in Linux environment variables:
```
export MONEY_MGR_EMAIL="mng-bot@eminent-range-306307.iam.gserviceaccount.com"

export MONEY_MGR_KEY="-----BEGIN PRIVATE KEY-----\n334IEvAGFDDSBgkqhkiG9w0c5uI11\kopljk/xaziLOkdN3oLPojNA==\n-----END PRIVATE KEY-----\n"

export TG_BOT_TOKEN="1144424888:74225751fghd-394345565-dgh4686865"
```
### Example add in Windows environment variables:
System properties\advanced\environment variables\first windows(add)
```
Name: MONEY_MGR_EMAIL  Value: "mng-bot@eminent-range-306307.iam.gserviceaccount.com"

Name: MONEY_MGR_KEY  Value: "-----BEGIN PRIVATE KEY-----\n334IEvAGFDDSBgkqhkiG9w0c5uI11\kopljk/xaziLOkdN3oLPojNA==\n-----END PRIVATE KEY-----\n"

Name: TG_BOT_TOKEN  Value: "1144424888:74225751fghd-394345565-dgh4686865"
```
5. Start:
>npm start

