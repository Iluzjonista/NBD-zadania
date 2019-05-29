//6.	Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób (dane dotyczące karty kredytowej, adresu zamieszkania i wagi mogą być fikcyjne); 
db.cwiczenia2.insert({"sex" : "Male", 
    "first_name" : "Adam", 
    "last_name" : "Uklanski", 
    "job" : "IT specialist", 
    "email" : "itadam@netscape.com", 
    "location" : {
        "city" : "Warsaw", 
        "address" : {
            "streetname" : "Dzwina", 
            "streetnumber" : "420"
        }
    }, 
    "description" : "tutaj jest opis", 
    "height" : "168.61", 
    "weight" : "66.3", 
    "birth_date" : "1994-09-27T05:44:11Z", 
    "nationality" : "Poland", 
    "credit" : [
        {
            "type" : "laser", 
            "number" : "5586087199891962", 
            "currency" : "IDR", 
            "balance" : "542512.36"
        }, 
        {
            "type" : "bankcard", 
            "number" : "5010199787942724", 
            "currency" : "PLN", 
            "balance" : "5213190.65"
        }, 
        {
            "type" : "mastercard", 
            "number" : "201768429931919", 
            "currency" : "CNY", 
            "balance" : "623414.82"
        }, 
        {
            "type" : "americanexpress", 
            "number" : "3582797029906663", 
            "currency" : "CDF", 
            "balance" : "636345.42"
        }, 
        {
            "type" : "jcb", 
            "number" : "9976881458117617", 
            "currency" : "PLN", 
            "balance" : "5402138.84"
        }
    ]
})

db.getCollection("cwiczenia2").find({ "last_name": "Uklanski" })