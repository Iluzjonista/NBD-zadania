//4.	Lista wszystkich osób znajdujących się w bazie o wadze z przedziału <68, 71.5);
db.getCollection("cwiczenia2").find({ "weight": { $gte: "68", $lt: "71,5" } })