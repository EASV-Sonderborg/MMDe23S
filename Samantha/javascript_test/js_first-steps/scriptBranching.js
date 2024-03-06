console.clear();
function whatCanIDo(age) {
    if(age >= 15) {
console.log("Du darfst den Fuehrerschein machen");
    }
}

//Im video === aber das gibt fehlermeldung
if (age >= 16) {
    console.log("Du darfst vielleicht schon waehlen");

    if (age >= 18) {
      console.log("Du bist volljaehrig");
    } else {
       console.log("Du bist noch nicht volljaehrig"); 
    }
}

whatCanIDo(15);

