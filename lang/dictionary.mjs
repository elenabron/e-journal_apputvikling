import en from "./en.json" assert {type:"json"};

import no from "./no.json" assert {type:"json"};

console.log(en);
console.log(no);

/*class DICTIONARY{

    constructor(en,no){
        this.en = english
        this.no = norsk
        this.dictionary = null;
        this.currentLanguage = null
    }

    setLanguage = async function(lang){
        // Velger språket som skal brukes.

        let languageFile = this.english.find( file => {
             return file.indexOf(lang) != -1
            });
        
        this.currentLanguage = lang;

        
      return Object.keys( this.dictionary);
    }
}

export default Dictionary;
//make a class and a function so that you can change languages*/