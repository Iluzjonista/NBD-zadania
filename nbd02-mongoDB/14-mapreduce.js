//map-reduce
//4.	Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości; 
var fMapper = function () {
    if(!this.height) return;
    if(!this.weight) return;

    emit(this.nationality, {
      count: 1,
      weight: parseFloat(this.weight),
      height: parseFloat(this.height)
    
    })
  }
  
  var fReducer = function (key, values) {
    var wartoscZredukowana = {
      count: 0,
      weight: 0,
      height: 0,
      max: 0,
      min: 9999999
    }
  
    for (i in values) {
        wartoscZredukowana.weight += values[i].weight;
        wartoscZredukowana.height += values[i].height;
      var bmi = wartoscZredukowana.weight/ Math.pow(wartoscZredukowana.height / 100, 2);
      if(wartoscZredukowana.min > bmi){
          wartoscZredukowana.min = bmi;
      }
      if(wartoscZredukowana.max < bmi){
        wartoscZredukowana.max = bmi;
    }
    wartoscZredukowana.count += values[i].count;
    };
  
    return wartoscZredukowana;
  }
  
  var fFinalize = function (key, wartoscZredukowana) {
    return {
    bmi: wartoscZredukowana.weight/ Math.pow(wartoscZredukowana.height / 100, 2),
    min: wartoscZredukowana.min,
    max: wartoscZredukowana.max
    }
  }
  
  db.getCollection("cwiczenia2").mapReduce(fMapper, fReducer, {
    out: "zadanie_14_mapreduce",
    finalize: fFinalize,
  });
