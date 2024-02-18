import type { QA } from "$lib/interfaces/qa";

export const qaWear:Array<QA> = [
    {question:"what are you wearing?",answer: "i am wearing a hat",condition:"SOMBRERO"},
    {question:"what are they wearing?",answer: "they are wearing gloves",condition:"GUANTES"},
    {question:"what are we wearing?",answer: "we are wearing pants",condition:"PANTALONES"},
    {question:"what am i wearing?",answer: "i am wearing a t-shirt",condition:"REMERA"}
]

export const qaPrepositions:Array<QA> = [
    {
        question: "Where is the sofa?",
        answer: "the sofa is in front of the TV in the living room",
        condition: "en frente a la tv"
    },
    {
        question: "Where is the table?",
        answer: "the table is below the mirror",
        condition: "debajo del espejo "
    },
    {
        question: "Where is the chair?",
        answer: "the chair is next to the table",
        condition: "al lado de la mesa en el comedor"
    },
    {
        question: "Where is the bed?",
        answer: "the bed is behind the door in the bedroom",
        condition: "detras de la puerta en el dormitorio"
    },
    {
        question: "Where is the desk?",
        answer: "the desk is behind the sofa in the study",
        condition: "detras del sillon en el estudio"
    },
    {
        question: "Where is the bookcase?",
        answer: "the bookcase is in front of the window in the living room",
        condition: "en frente a la ventana en la sala de estar"
    },
    {
        question: "Where is the dresser?",
        answer: "the dresser is below the mirror in the bedroom",
        condition: "debajo del espejo en el dormitorio"
    },
    {
        question: "Where is the couch?",
        answer: "the couch is next to the lamp in the living room",
        condition: "al lado de la lampara en la sala de estar"
    },
    {
        question: "Where is the mirror?",
        answer: "the mirror is above the table in the kitchen",
        condition: "arriba de la mesa en la cocina"
    }
]