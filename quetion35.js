function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  var a = ['a', 1, 'a', 2, '1','sky',3,5,'cloud',12,-2,'sky',12];
  var unique = a.filter(onlyUnique);
  
  console.log(unique); 