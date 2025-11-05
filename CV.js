let Uname=document.getElementById('Uname');
let OnName=document.getElementById('name');

function Name(){
    OnName.innerText=Uname.value;
    Uname.value='';
}
// AGE
let Uage=document.getElementById('Uage');
let OnAge=document.getElementById('Age')


function Age(){
    OnAge.innerText=Uage.value;
    Uage.value='';
}
// GENDER
let UGen=document.getElementById('UGen');
let OnGen=document.getElementById('Gen')

function Gender(){
    OnGen.innerText=UGen.value;
    UGen.value='';
}

// ADDRESS
let Uadr=document.getElementById('Uadr');
let OnAdr=document.getElementsByTagName("Address")[0];

function Address(){
    OnAdr.innerText=Uadr.value;
    Uadr.value='';
}
// NUMBER
let Unum=document.getElementById('Unum');
let OnNum=document.getElementById("Number");

function Numbe(){
    OnNum.innerText=Unum.value;
    Unum.value='';
}

// EMAIL
let Uemail=document.getElementById('Uemail');
let OnEmail=document.getElementById('Email')

function Email(){
    OnEmail.innerText=Uemail.value;
    Uemail.value='';
}
// SKILL
let Uskill=document.getElementById('Uskill');
let ONskill=document.getElementById('Skill-list')

function Skills(){
    let li = document.createElement('li');
    li.innerText=Uskill.value;
    ONskill.append(li);
    Uskill.value="";
}
// EDUCATION
let Uedc=document.getElementById('Uedc');
let OnEdc=document.getElementById('Edc-list')

function Education(){
    let li = document.createElement('li');
    li.innerText=Uedc.value;
    OnEdc.append(li);
    Uedc.value='';
}
// LANGUAGES
let Ulang=document.getElementById('Ulang');
let OnLang=document.getElementById('Lang-list')

function Language(){
    let li = document.createElement('li');
    li.innerText=Ulang.value;
    OnLang.append(li);
    Ulang.value='';
}
// PERSONALITY
let Uper=document.getElementById('Uper');
let ONper=document.getElementById("Per-list");

function Personality(){
    let li = document.createElement('li');
    li.innerText=Uper.value;
    ONper.append(li);
    Uper.value='';
}




