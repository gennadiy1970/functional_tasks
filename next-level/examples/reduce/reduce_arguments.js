{
  const sum = function () {
     return [...arguments].reduce((acc, elem) => acc + elem)
  } 
  
  sum(2, 5, 3)
}

