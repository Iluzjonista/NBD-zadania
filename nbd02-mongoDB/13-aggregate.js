//aggregate
//3.	Listę unikalnych zawodów; 
db.getCollection("cwiczenia2").aggregate(
    {
        $group: { 
            _id: "$job",
        }
    }
);