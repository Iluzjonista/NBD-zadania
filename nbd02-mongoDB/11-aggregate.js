//aggregate
//1.	Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet); 
db.getCollection("cwiczenia2").aggregate(
    [
      {
        $group:
          {
            _id: "$sex",
            avgWeight: { $avg: "$weight" },
            avgHeight: { $avg: "$height" }
          }
      }
    ]
 )