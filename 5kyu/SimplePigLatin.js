function pigIt(str) {
    const split = str.split(" ");
    const makePigLatin = [];
    const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`

    for (let i = 0; i < split.length; i++ ) {
        let firstLetter = split[i].substr(0, 1);
        let trail = split[i].substr(1, split[i].length);

        let moveFirst = trail + firstLetter;
        
        const isSpecialCharsPresent = specialChars.split('').some(char => moveFirst.includes(char))

        if (!isSpecialCharsPresent) {
            makePigLatin.push(moveFirst + "ay");
        } else {
            makePigLatin.push(moveFirst)
        }
    }

    const pigLatinStr = makePigLatin.join(" ");
    return(pigLatinStr)
}