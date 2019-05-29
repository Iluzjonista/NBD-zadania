//aggregate
//5.	Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty. 
db.getCollection("cwiczenia2").aggregate(
    { $match: { "sex": "Female", "nationality": "Poland" } },
    { $unwind: "$credit" },
    {
        $group: { 
            _id: "$credit.currency",
            Srednia: { $avg: "$credit.balance" },
            Suma: { $sum: "$credit.balance" },
        }
    }
);