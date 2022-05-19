function Calculate(){
    var myage = document.getElementById("myage").value;
    var yourage= document.getElementById("yourage").value;
    if (myage>yourage){
        alert("I am older!");
    }
    if(yourage>myage){
        alert("you are older!");
    }
    if(yourage === myage || myage === yourage){
        alert("We are age mates!")
    }
}