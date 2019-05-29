//konwertowanie string na int
db.cwiczenia2.find().forEach( function (x) {
    x.height = parseInt(x.height);
    db.cwiczenia2.save(x);
    });
    
    db.cwiczenia2.find().forEach( function (x) {
    x.weight = parseInt(x.weight);
    db.cwiczenia2.save(x);
    });

    db.cwiczenia2.find({}).forEach(record => {
        db.cwiczenia2.update(
            {"_id": record._id},
            {
                $set: {
                    credit: record.credit.map(function(credit) {
                        return {
                            type: credit.type,
                            number: credit.number,
                            currency: credit.currency,
                            balance: parseFloat(credit.balance)
                        };
                    })
                }
            }
        );
    });
        