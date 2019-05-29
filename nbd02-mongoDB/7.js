//7.	Usuń z bazy osoby o wzroście przekraczającym 190; 
db.getCollection("cwiczenia2").remove({ "height": { $gte: "190" } })