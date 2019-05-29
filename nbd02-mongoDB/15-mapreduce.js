//map-reduce
//5.	Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty. 
var fMapper = function () {
    if (!this.credit) return;  
    var credits = this.credit;
    for(i in credits){
        emit(credits[i].currency, credits[i].balance)
  }
}
  
  var fReducer = function (key, values) {
    /*var wartoscZredukowana = {
      count: 0,
      balance: 0,
    }
  
    values.forEach(function (value) {
      wartoscZredukowana.count += value.count;
      wartoscZredukowana.balance += value.balance;
    });
  
    return wartoscZredukowana;*/
    return{
        sum:Array.sum(values),
        avg:Array.sum(values)/values.length
    }
  }
  
  /*var fFinalize = function (key, wartoscZredukowana) {
    wartoscZredukowana.avg = (wartoscZredukowana.balance / wartoscZredukowana.count).toFixed(2);
    wartoscZredukowana.sum = wartoscZredukowana.balance;
    delete wartoscZredukowana.balance;
    return wartoscZredukowana;
  }*/
  
  db.getCollection("cwiczenia2").mapReduce(fMapper, fReducer, {
    out: "Zadanie_15_mapreduce",
    query: {
        "nationality": "Poland",
        "sex": "Female"
    },
    //finalize: fFinalize
  })