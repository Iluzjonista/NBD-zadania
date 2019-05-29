//10.	Usuń u wszystkich osób o zawodzie „Editor” własność „email”. 
db.getCollection("cwiczenia2").updateMany({ "job": "Editor" },{"$unset": { "email": 1}},{multi: true})