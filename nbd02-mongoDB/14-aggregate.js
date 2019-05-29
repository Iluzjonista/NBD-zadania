//aggregate
//4.	Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości; 
db.getCollection("cwiczenia2").aggregate(
    { 
        $project : {
            nationality: 1,
            weight: 1,
            height: 1,
        }
    },
    {
        $group: { 
            _id: "$nationality",
            Maksymalne_BMI: { $max:
                { $divide: [
                    "$weight", 
                    { $pow: [ 
                        { $divide: ["$height", 100] }, 2
                    ]}
                ]}
            },
            Minimalne_BMI: { $min:
                { $divide: [
                    "$weight", 
                    { $pow: [ 
                        { $divide: ["$height", 100] }, 2
                    ]}
                ]}
            },
            Srednie_BMI: { $avg:
                { $divide: [
                    "$weight", 
                    { $pow: [ 
                        { $divide: ["$height", 100] }, 2
                    ]}
                ]}
            }
        }
    }
);