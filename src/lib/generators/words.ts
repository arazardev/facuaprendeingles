

export function haveToSpanish(person:string):String{
    let verb = ""
    if (person==="yo"){
        verb = "tengo"
    }
    if (person==="nosotros" || person==="nosotras"){
        verb = "tenemos"
    }
    if (person==="ellos" || person==="ellas" || person==="ustedes"){
        verb = "tienen"
    }
    if (person==="usted"){
        verb = "tiene"
    }
    if (person==="tu"){
        verb = "tienes"
    }
    return verb
}


export function englishArticle(noun:string):String{
    let article = ""
    const vowels = "aeiou"
    let firstLetter = noun.charAt(0)
    if (vowels.includes(firstLetter)){
        article = "an"
    } else {
        article = "a"
    }
    return article
}