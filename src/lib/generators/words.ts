

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
    if (person==="el" || person==="ella" || person==="aquel"){
        verb = "tiene"
    }
    return verb
}


export function canToSpanish(person:string):String{
    let verb = ""
    if (person==="yo"){
        verb = "puedo"
    }
    if (person==="nosotros" || person==="nosotras"){
        verb = "podemos"
    }
    if (person==="ellos" || person==="ellas" || person==="ustedes"){
        verb = "pueden"
    }
    if (person==="usted"){
        verb = "puede"
    }
    if (person==="tu"){
        verb = "puedes"
    }
    return verb
}

export function wearToSpanish(person:string):String{
    let verb = ""
    if (person==="yo"){
        verb = "llevo puesto"
    }
    if (person==="nosotros" || person==="nosotras"){
        verb = "llevamos puesto"
    }
    if (person==="ellos" || person==="ellas" || person==="ustedes"){
        verb = "llevan puesto"
    }
    if (person==="usted"){
        verb = "lleva puesto"
    }
    if (person==="tu"){
        verb = "llevas puesto"
    }
    return verb
}

export function spanishArticle(noun:String):String{
    let article = ""
    return article
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