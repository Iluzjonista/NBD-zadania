//9.	Dodaj do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”; 
db.getCollection("cwiczenia2").updateMany({ "first_name": "Antonio" },{"$set": { "hobby": "pingpong"}}, {multi: true})