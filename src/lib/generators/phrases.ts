import { iYouWeThey } from "../constants/persons";
import { skills } from "../constants/verbs";
import { randomItem } from "$lib/utils/utils";
import { musicInstruments, clothes } from "../constants/nouns";
import { type Phrase } from "$lib/interfaces/phrase";
import { canToSpanish, englishArticle, haveToSpanish, wearToSpanish } from "./words";



export function positiveHavePhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const noun = randomItem(musicInstruments)
    const spanishNoun = randomItem(noun.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishHaveVerb = haveToSpanish(spanishPerson)
    let article = englishArticle(noun.english)
    let spanishPhrase: string = `${spanishPerson} ${spanishHaveVerb} un/una ${spanishNoun}`
    let englishPhrase: string = `${person.english} have ${article} ${noun.english}`
    return {english:englishPhrase,spanish:spanishPhrase}
}

export function negativeHavePhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const noun = randomItem(musicInstruments)
    const spanishNoun = randomItem(noun.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishHaveVerb = haveToSpanish(spanishPerson)
    let article = englishArticle(noun.english)
    let spanishPhrase: string = `${spanishPerson} no ${spanishHaveVerb} un/una ${spanishNoun}`
    let englishPhrase: string = `${person.english} have not ${article} ${noun.english}`
    const phrase = {english:englishPhrase,spanish:spanishPhrase}
    console.log(phrase)
    return phrase
}

export function interrogativeHavePhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const noun = randomItem(musicInstruments)
    const spanishNoun = randomItem(noun.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishHaveVerb = haveToSpanish(spanishPerson)
    let article = englishArticle(noun.english)
    let spanishPhrase: string = `¿${spanishHaveVerb} ${spanishPerson} un/una ${spanishNoun}?`
    let englishPhrase: string = `have ${person.english} got ${article} ${noun.english}?`
    const phrase = {english:englishPhrase,spanish:spanishPhrase}
    console.log(phrase)
    return phrase
}

export function positiveCanPhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const verb = randomItem(skills)
    const spanishVerb = randomItem(verb.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishCanVerb = canToSpanish(spanishPerson)
    let spanishPhrase: string = `${spanishPerson} ${spanishCanVerb} ${spanishVerb}`
    let englishPhrase: string = `${person.english} can ${verb.english}`
    return {english:englishPhrase,spanish:spanishPhrase}
}


export function negativeCanPhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const verb = randomItem(skills)
    const spanishVerb = randomItem(verb.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishCanVerb = canToSpanish(spanishPerson)
    let spanishPhrase: string = `${spanishPerson} no ${spanishCanVerb} ${spanishVerb}`
    let englishPhrase: string = `${person.english} can not ${verb.english}`
    return {english:englishPhrase,spanish:spanishPhrase}
}

export function interrogativeCanPhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const verb = randomItem(skills)
    const spanishVerb = randomItem(verb.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishCanVerb = canToSpanish(spanishPerson)
    let spanishPhrase: string = `¿${spanishPerson} ${spanishCanVerb} ${spanishVerb}?`
    let englishPhrase: string = `can ${person.english} ${verb.english}?`
    return {english:englishPhrase,spanish:spanishPhrase}
}

export function positiveWearPhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const noun = randomItem(clothes)
    const spanishNoun = randomItem(noun.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishWearVerb = wearToSpanish(spanishPerson)
    let spanishPhrase: string = `${spanishPerson} ${spanishWearVerb} ${spanishNoun}`
    let englishPhrase: string = `${person.english} wear ${noun.english}`
    return {english:englishPhrase,spanish:spanishPhrase}
}

export function negativeWearPhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const verb = randomItem(clothes)
    const spanishNoun = randomItem(verb.spanish)
    const spanishPerson = randomItem(person.spanish)
    let spanishWearVerb = wearToSpanish(spanishPerson)
    let spanishPhrase: string = `${spanishPerson} no ${spanishWearVerb} ${spanishNoun}`
    let englishPhrase: string = `${person.english} do not wear ${verb.english}`
    return {english:englishPhrase,spanish:spanishPhrase}
}

export function interrogativeWearPhrase():Phrase{
    const person = randomItem(iYouWeThey)
    const verb = randomItem(clothes)
    const spanishNoun = randomItem(verb.spanish)
    const spanishPerson = randomItem(person.spanish)
    const article = englishArticle(verb.english)
    let spanishWearVerb = wearToSpanish(spanishPerson)
    let spanishPhrase: string = `¿${spanishPerson} ${spanishWearVerb} ${spanishNoun}?`
    let englishPhrase: string = `do ${person.english} wear ${article} ${verb.english}?`
    return {english:englishPhrase,spanish:spanishPhrase}
}


