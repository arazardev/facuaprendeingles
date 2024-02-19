<script lang="ts">
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {houseParts, furtnitures} from "$lib/constants/nouns"
    import { prepositions } from "$lib/constants/prepositions";
	// import PhraseGuesser from "$lib/ui/PhraseGuesser.svelte";
    // import { positiveWearPhrase, negativeWearPhrase, interrogativeWearPhrase } from "$lib/generators/phrases";
    import Qa from "$lib/ui/QA.svelte";
    import { qaPrepositions } from "$lib/constants/qa"

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Casa" titleEnglish="House">
        <WordGuesser words={houseParts}></WordGuesser>
    </Card>

    <Card titleSpanish="Muebles" titleEnglish="Furtnitures">
        <WordGuesser words={furtnitures}></WordGuesser></Card>
    
    <Card titleSpanish="Preposiciones" titleEnglish="Prepositions">
        <WordGuesser words={prepositions}></WordGuesser>
    </Card>

    <!-- <Card titleSpanish="Vestir+" titleEnglish="Wear">
        <PhraseGuesser phraseGenerator={positiveWearPhrase} />
    </Card>
    <Card titleSpanish="Vestir-" titleEnglish="Don't Wear">
        <PhraseGuesser phraseGenerator={negativeWearPhrase} />
    </Card>
    <Card titleSpanish="Vestir?" titleEnglish="Wear?">
        <PhraseGuesser phraseGenerator={interrogativeWearPhrase} />
    </Card>-->
    <Card titleSpanish="Preguntas y respuestas" titleEnglish="QA">
        <Qa qas={qaPrepositions} />
    </Card> 
</section>

<style>

    section{
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        background: #283E4F;
    }

    
</style>