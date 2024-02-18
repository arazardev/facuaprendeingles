import { iYouWeThey } from "../constants/persons";
import { skills } from "../constants/verbs";
import { randomItem } from "$lib/utils/utils";
import { musicInstruments } from "../constants/nouns";
import { type Phrase } from "$lib/interfaces/phrase";
import { englishArticle, haveToSpanish } from "./words";


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