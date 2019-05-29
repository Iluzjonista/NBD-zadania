//8.	 Zastąp nazwę miasta „Moscow” przez „Moskwa” u wszystkich osób w bazie; 
db.getCollection("cwiczenia2").update({ "location.city": "Moscow"},{"$set": {"location.city":"Moskwa" }}, {multi: true})