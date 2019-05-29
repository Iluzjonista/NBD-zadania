//map-reduce
//3.	Listę unikalnych zawodów; 
var fMapper = function () {
    emit(this.job, 1);
  }

var fReducer = function (key, values) {
    var wartoscZredukowana = values.length;
    return wartoscZredukowana;
}


db.getCollection("cwiczenia2").mapReduce(fMapper, fReducer,
    {
        out: "Zadanie_13_mapreducer"
    }
);
    