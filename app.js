
let n0 = document.querySelector('#inc17');
let n1 = document.querySelector('#inc13');
let n2 = document.querySelector('#inc15');
let n3 = document.querySelector('#inc18');
let n4 = document.querySelector('#inc9');
let n5 = document.querySelector('#inc10');
let n6 = document.querySelector('#inc11');
let n7 = document.querySelector('#inc5');
let n8 = document.querySelector('#inc6');
let n9 = document.querySelector('#inc7');

let del = document.querySelector('#inc4');
let c = document.querySelector('#inc3');

let add = document.querySelector('#inc8');
let eq = document.querySelector('#inc16');
let subb = document.querySelector('#inc12');
let change = document.querySelector('#inc14');
let point = document.querySelector('#inc19');
let div = document.querySelector('#inc1');
let multi = document.querySelector('#inc2');

let display1 = document.querySelector('#display1');
let display2 = document.querySelector('#display2');

//Initialization
display1.innerHTML = ' ';
display2.innerHTML = 0;
let nr1 = 0;
let nr2 = 0;
let nr3 = 0;
let apasat = 0;
let float = 0; //verifica daca a fost apasat .
let lastNumber = 0;
let lastButton = 0;
let rezultat1 = 0;
let rezultat2 = 0;

//Digit buttons 
n1.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n1.value);
});

n2.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n2.value);
});

n3.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n3.value);
});

n4.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n4.value);
});

n5.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n5.value);
});

n6.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n6.value);
});

n7.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n7.value);
});

n8.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n8.value);
});

n9.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n9.value);
});

n0.addEventListener("click", function(){
    testEq();
    test();
    addDigit(n0.value);
});


//Delete button
del.addEventListener("click", function(){
    let da = display2.innerHTML;
    display2.innerHTML = da.substring(0, da.length - 1);
    if(da.length == 1)
    display2.innerHTML = 0;
});

// Reset buttons
c.addEventListener("click", function(){
    display1.innerHTML = ' ';
    display2.innerHTML = 0;
    float = 0;
    nr1 = 0;
    nr2 = 0;
    nr3 = 0;
    apasat = 0;
    lastNumber = 0;
    lastButton = 2;
    rezultat1 = 0;
    rezultat2 = 0;
});

// Plus Button + 1

add.addEventListener("click", function(){
    resetFloatPoint();

    if(apasat == 2){ 
        //daca lucram cu rezultatul
        //de forma rezultat1 +
        nr1 = transform();
        display1.innerHTML = display2.innerHTML + " + " ;
        display2.innerHTML = 0;
        rezultat1 = nr1;
        lastButton = 2;
    }
    else if(apasat == 6) 
    {   // daca am avut o inmultire inainte
        // avem de forma rezultat1 ? rezultat2 * c +
        // nr 3 este c
        nr3 = transform(); 
        if(lastButton == 1) //rezultat1 + rezultat2 * c +
            rezultat1 = rezultat1 + rezultat2 * nr3
        else if(lastButton == 3) //rezultat1 - rezultat2 * c +
            rezultat1 = rezultat1 - rezultat2 * nr3
        else
            rezultat1 = rezultat1 * nr3 //rezultat1 * c +
            display1.innerHTML = display1.innerHTML + display2.innerHTML + " + " ;
            display2.innerHTML = 0;
            lastButton = 1; //am doar un rezultat acum
    }
    else if(apasat == 5) 
    {   // daca am avut o inmpartire inainte
        // avem de forma rezultat1 ? rezultat2 / c +
        // nr 3 este c
        nr3 = transform(); 
        if(lastButton == 1) //rezultat1 + rezultat2 / c +
            rezultat1 = rezultat1 + rezultat2 / nr3
        else if(lastButton == 3) //rezultat1 - rezultat2 / c +
            rezultat1 = rezultat1 - rezultat2 / nr3
        else
            rezultat1 = rezultat1 / nr3 //rezultat1 / c +
            display1.innerHTML = display1.innerHTML + display2.innerHTML + " + " ;
            display2.innerHTML = 0;
            lastButton = 1; //am doar un rezultat acum
    }
    else{ //daca este o adunare simpla, fara operatii ianinte
        if(display1.innerHTML == ' ')
                {
                    display1.innerHTML = display2.innerHTML + " + " ; //sunt la primul termen, de tipul a +
                    nr1 = transform();
                    rezultat1 = nr1;
                }
            else
                {
                    display1.innerHTML = display1.innerHTML + display2.innerHTML + " + " ; //sunt la al doilea termen, de tipul a +/- b +
                    nr2 = transform();
                    if(lastButton == 1)
                        nr1 = nr1 + nr2;
                    else if(lastButton == 3)
                        nr1 = nr1 - nr2;
                    rezultat1 = nr1;
                }
        display2.innerHTML = 0;
        lastButton = 1;  
    } 
    apasat = 1;
});

// Minus Button - 3
subb.addEventListener("click", function(){
    resetFloatPoint();

    if(apasat == 2){ 
        // daca lucram cu rezultatul
         //de forma rezultat1 -
         nr1 = transform();
         display1.innerHTML = display2.innerHTML + " - " ;
         display2.innerHTML = 0;
         rezultat1 = nr1;
         lastButton = 2;
    }
    else if(apasat == 6) // daca am avut o inmultire inainte
    {   // avem de forma rezultat1 ? rezultat2 * c -
        // nr 3 este c
        nr3 = transform(); 
        if(lastButton == 1) //rezultat1 + rezultat2 * c -
            rezultat1 = rezultat1 + rezultat2 * nr3
        else if(lastButton == 3) //rezultat1 - rezultat2 * c -
            rezultat1 = rezultat1 - rezultat2 * nr3
        else
            rezultat1 = rezultat1 * nr3 //rezultat1 * c -
            display1.innerHTML = display1.innerHTML + display2.innerHTML + " - " ;
            display2.innerHTML = 0;
            lastButton = 3; //am doar un rezultat acum
    }
    else if(apasat == 5) // daca am avut o inmpartire inainte
    {   // avem de forma rezultat1 ? rezultat2 / c -
        // nr 3 este c
        nr3 = transform(); 
        if(lastButton == 1) //rezultat1 + rezultat2 / c -
            rezultat1 = rezultat1 + rezultat2 / nr3
        else if(lastButton == 3) //rezultat1 - rezultat2 / c -
            rezultat1 = rezultat1 - rezultat2 / nr3
        else
            rezultat1 = rezultat1 / nr3 //rezultat1 / c -
            display1.innerHTML = display1.innerHTML + display2.innerHTML + " - " ;
            display2.innerHTML = 0;
            lastButton = 3; //am doar un rezultat acum
    }
    else{ //daca este o adunare simpla, fara operatii ianinte
        if(display1.innerHTML == ' ')
                {
                    display1.innerHTML = display2.innerHTML + " - " ; //sunt la primul termen, de tipul a -
                    nr1 = transform();
                    rezultat1 = nr1;
                }
            else
                {
                    display1.innerHTML = display1.innerHTML + display2.innerHTML + " + " ; //sunt la al doilea termen, de tipul a +/- b -
                    nr2 = transform();
                    if(lastButton == 1)
                        nr1 = nr1 + nr2;
                    else if(lastButton == 3)
                        nr1 = nr1 - nr2;
                    rezultat1 = nr1;
                }
        display2.innerHTML = 0;
        lastButton = 3;  
    }
    apasat = 3;
});

// Divizion Button : 5
div.addEventListener("click", function(){
    resetFloatPoint();


    if(apasat == 2){ 
        //daca lucram cu rezultatul
        //de forma rezultat1 /
        nr1 = transform();
        display1.innerHTML = display2.innerHTML + " / " ;
        display2.innerHTML = 0;
        rezultat1 = nr1;
        lastButton = 2;
    }
    else if(apasat == 1)
    {
        //de forma a + b /
        //rezultat 1 este a
        nr2 = transform();
        rezultat2 = nr2;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " / " ;
        display2.innerHTML = 0;
        lastButton = 1;
    }
    else if(apasat == 3)
    {
        //de forma a - b /
        nr2 = transform();
        rezultat2 = nr2;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " / " ;
        display2.innerHTML = 0;
        lastButton = 3;
    }
    else if(apasat == 6)
    {
        nr3 = transform();
        //de forma a ? b * c / 
        rezultat2 = rezultat2 * nr3;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " / " ;
        display2.innerHTML = 0;
    }
    else if(apasat == 5)
    {
        nr3 = transform();
        //de forma a ? b / c / 
        rezultat2 = rezultat2 / nr3;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " / " ;
        display2.innerHTML = 0;
    }
    else{ //nu am mai avut nimic inainte
        nr2 = transform();
        if(display1.innerHTML == ' ')
                //de forma a /
                {   
                    nr1 = nr2;
                    rezultat1 = nr1;
                    display1.innerHTML = display2.innerHTML + " / " ;
                }
            else
                //de forma a / b /
                {   
                    nr1 = nr1 / nr2
                    rezultat1 = nr1;
                    display1.innerHTML = display1.innerHTML + display2.innerHTML + " / " ;
                }
        display2.innerHTML = 0;
    }
    apasat = 5;
});

// Multiplication Button x 6
multi.addEventListener("click", function(){
    resetFloatPoint();

    if(apasat == 2){ 
        //daca lucram cu rezultatul
        //de forma rezultat1 +
        nr1 = transform();
        display1.innerHTML = display2.innerHTML + " * " ;
        display2.innerHTML = 0;
        rezultat1 = nr1;
        lastButton = 2;
    }
    else if(apasat == 1)
    {
        //de forma a + b *
        //rezultat 1 este a
        nr2 = transform();
        rezultat2 = nr2;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " * " ;
        display2.innerHTML = 0;
        lastButton = 1;
    }
    else if(apasat == 3)
    {
        //de forma a - b *
        nr2 = transform();
        rezultat2 = nr2;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " * " ;
        display2.innerHTML = 0;
        lastButton = 3;
    }
    else if(apasat == 6)
    {
        nr3 = transform();
        //de forma a ? b * c * 
        rezultat2 = rezultat2 * nr3;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " * " ;
        display2.innerHTML = 0;
    }
    else if(apasat == 5)
    {
        nr3 = transform();
        //de forma a ? b / c * 
        rezultat2 = rezultat2 / nr3;
        display1.innerHTML = display1.innerHTML + display2.innerHTML + " * " ;
        display2.innerHTML = 0;
    }
    else{ //nu am mai avut nimic inainte
        nr2 = transform();
        if(display1.innerHTML == ' ')
                //de forma a *
                {   
                    nr1 = nr2;
                    rezultat1 = nr1;
                    display1.innerHTML = display2.innerHTML + " * " ;
                }
            else
                //de forma a * b *
                {   
                    nr1 = nr1 * nr2
                    rezultat1 = nr1;
                    display1.innerHTML = display1.innerHTML + display2.innerHTML + " * " ;
                }
        display2.innerHTML = 0;
    }
    apasat = 6;
});

// Egal Button = 2

eq.addEventListener("click", function(){ 
    console.log(apasat);
    switch(apasat){
        case 1: //Adunare
            nr2 = transform();
            display1.innerHTML = display1.innerHTML + display2.innerHTML;
            display2.innerHTML = rezultat1 + nr2;
            break;
        case 3: //Scadere
            nr2 = transform();
            display1.innerHTML = display1.innerHTML + display2.innerHTML;
            display2.innerHTML = rezultat1 - nr2;
            break;
        case 6: //Inmultire
            nr3 = transform();
            display1.innerHTML = display1.innerHTML + display2.innerHTML;
            if(lastButton == 1)
                display2.innerHTML = rezultat1 + rezultat2 * nr3;   //Daca am avut o adunare inainte
            else if(lastButton == 3)
                display2.innerHTML = rezultat1 - rezultat2 * nr3;   //Daca am avut o scadere inainte
            else
                display2.innerHTML = rezultat1 * nr3;    //daca avem doar o inmultire 
            nr3 = 0;
            break;
        case 5: //Impartire
            nr3 = transform();
            console.log(lastButton);
            display1.innerHTML = display1.innerHTML + display2.innerHTML;
            if(lastButton == 1)
                display2.innerHTML = rezultat1 + rezultat2 / nr3;   //Daca am avut o adunare inainte
            else if(lastButton == 3)
                display2.innerHTML = rezultat1 - rezultat2 / nr3;   //Daca am avut o scadere inainte
            else
                display2.innerHTML = rezultat1 / nr3;    //Daca avem doar o inmultire
            nr3 = 0;
            break;
    };

    //Verific daca rezultatul este float
    resultFloatPoint();

    rezultat1 = 0;
    rezultat2 = 0;
    nr1 = 0;
    nr2 = 0;
    nr3 = 0;
    lastButton = 2;
    apasat = 2;
});

// +/- Button

change.addEventListener("click", function(){
    display2.innerHTML = -transform();
});

// Point Button . 4

point.addEventListener("click", function(){
    if(float != 1)
    display2.innerHTML = display2.innerHTML + '.';
    float = 1;
});
//FUNCTIONS-----------------------------------------------------------------------------------


function test(){
    if(display2.innerHTML == 0 && float!=1) //Verific sa nu am 0.
    display2.innerHTML = '';
}

function addDigit(a){
    display2.innerHTML = display2.innerHTML + a;
}

function testEq(){
    if(apasat == 2){
        display1.innerHTML = ' ';
        display2.innerHTML = 0;
        nr1 = 0;
        nr2 = 0;
        apasat = 0;
    }
}

function isFloat(n){
    return n % 1 !== 0;
}

function transform(){
    if(isFloat(display2.innerHTML))
        return parseFloat(display2.innerHTML);
    else
        return parseInt(display2.innerHTML);
}

function resetFloatPoint(){
    float = 0;
}

function resultFloatPoint(){
    nr1 = transform();  
    if(isFloat(nr1) == 1)
        float = 1;    
    else
        resetFloatPoint();
}