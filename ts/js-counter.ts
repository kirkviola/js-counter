let nbr : number = 0;
const loaded = () => {
    let box = <HTMLInputElement>document.getElementById("box");
    if(box !== null){
        box.value = nbr.toString();
        box.style.textAlign="center";
        box.style.width="100px";
    }
}

const change = (num: number) : void => {
    nbr += num;
    changeFormat();     
}

const changeFormat = () : void => {
    let box = <HTMLInputElement>document.getElementById("box");
    if(box !== null){
        box.value = nbr.toString();
        box.style.textAlign="center";
        box.style.width="100px";
        box.style.color = (nbr % 2 == 0) ? "red" : "black";
        box.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
        box.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
    }
}
