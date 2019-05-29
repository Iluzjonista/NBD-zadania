//map-reduce
//2.	Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty; 

var fMapper = function () {
    if (!this.credit) return;
var credits = this.credit
    for (i in credits){
        emit(credits[i].currency, credits[i].balance)
    }
  }
var fReducer = function (key, values){
    return Array.sum(values)
}

db.getCollection("cwiczenia2").mapReduce(fMapper, fReducer,
    {
        out: "zadanie_12_mapreducer"
    }
);