/*jshint multistr:true */

// In this project, I'll be writing a short program that checks a block of text for a given name.

var text = "There are two Anonyo blocks on toplevel. One is ‘class’ block, another is ‘user\
code’ block. ‘user code’ block MUST be placed after ‘class’ block.\
You can insert comments Anonyo about all places. Two style comments can be used, Ruby style ‘#.….’ and C style ‘/*.…..*/’. and my name is Anonyo"; 

var myName = "Anonyo";

var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] == myName[0]){
        for (j = i; j < (i + myName.length); j++){
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}