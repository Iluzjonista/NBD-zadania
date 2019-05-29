//map-reduce
//1.	Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet); 

var fMapper = function () {
    emit(this.sex, {
      count: 1,
      height: parseFloat(this.height),
      weight: parseFloat(this.weight),
    });
  };
  
  var fReducer = function (key, values) {
    var wartoscZredukowana = {
      count: 0,
      height: 0,
      weight: 0,
    };
  
    for (i in values){
      wartoscZredukowana.count += values[i].count;
      wartoscZredukowana.height += values[i].height;
      wartoscZredukowana.weight += values[i].weight;
    }
  
    return wartoscZredukowana;
  };
  
  var fFinalize = function (key, wartoscZredukowana) {
    wartoscZredukowana.height = wartoscZredukowana.height / wartoscZredukowana.count;
    wartoscZredukowana.weight = wartoscZredukowana.weight / wartoscZredukowana.count;
  
    return wartoscZredukowana;
  };
  
db.getCollection("cwiczenia2").mapReduce(fMapper, fReducer, {
    out: 'zadanie_11_mapreducer',
    finalize: fFinalize,
  });