//3.	Lista mężczyzn narodowości niemieckiej;
db.getCollection("cwiczenia2").find({ "nationality": "Germany", "sex": "Male" })