// Entrega atividade - KATAS

function oneThroughFive(){
    let meuRetorno = [];
      for (let counter = 1; counter <= 20; counter++) {
          meuRetorno.push(counter)
      }
      return meuRetorno;
}

console.log(oneThroughFive());

function evensToTwenty(){
    let meuRetorno = [];
    for(let counter = 1; counter <=20; counter++){
        if(counter <=20 && counter % 2 == 0){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno;
}

console.log(evensToTwenty());

function oddsToTwrnty(){
    let meuRetorno = [];
    for(let counter = 1; counter <=20; counter++){
        if(counter <=20 && counter % 2 != 0){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno;
}

console.log(oddsToTwrnty());

function multiplesOfFive(){
    let meuRetorno = [];
      for (let counter = 5; counter <= 100; counter++) {
        if(counter <=100 && counter % 5 == 0){
            meuRetorno.push(counter)
        }
      }
      return meuRetorno;
}

console.log(multiplesOfFive());

function squareNumbers(){
    let meuRetorno = [];
    for(let i = 1; i<=100; i++){
        if(i*i <=100){
            let meuRetorno2 = i*i
            meuRetorno.push(meuRetorno2)
    }
}
    return meuRetorno;
    
}
console.log(squareNumbers());

function countingBackwards(){
    let meuRetorno = [];
    for(let i = 20; i>=1; i--){
        meuRetorno.push(i)
    }
    return meuRetorno;
}
console.log(countingBackwards());
    
function evenNumbersBackwards(){
    let meuRetorno = [];
    for(let i = 20; i>=1; i--){
        if(i>=1 && i % 2 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno;
}

console.log(evenNumbersBackwards());

function oddNumbersBackwards(){
    let meuRetorno = [];
    for(let i = 20; i>=1; i--){
        if(i>=1 && i % 2 != 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno;
}

console.log(oddNumbersBackwards());

function multplesOfFiveBackwards(){
    let meuRetorno = [];
      for (let counter = 100; counter >= 5; counter--) {
        if(counter >=5 && counter % 5 == 0){
            meuRetorno.push(counter)
        }
      }
      return meuRetorno;
}

console.log(multplesOfFiveBackwards());

function squareNumbersBackwards(){
    let meuRetorno = [];
    for(let i = 10; i>=1; i--){
        if(i >= 1 && i*i >=1){
            let meuRetorno2 = i*i
            meuRetorno.push(meuRetorno2)
        }
    }
    return meuRetorno;  
}

console.log(squareNumbersBackwards());
