//aggregate+konwersja na float
//2.	Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty; 
db.getCollection("cwiczenia2").aggregate(
    { $unwind: "$credit" },
    {
        $group: { 
            _id: "$credit.currency",
            sumaBalans: { $sum : "$credit.balance" }
        }
    }
);