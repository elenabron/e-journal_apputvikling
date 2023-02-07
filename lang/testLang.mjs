import Dictionary from "./dictionary.mjs";

function testSuportingLanguageFiles(){
    const languages = ["./lan/no.json", "./lan/en.json"];
    const dictionary = new Dictionary(...languages);
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}
