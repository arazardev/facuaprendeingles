<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {animals, animalCharacteristics} from "$lib/constants/nouns"
	import PhraseGuesser from "$lib/ui/PhraseGuesser.svelte";
    import { positiveHsiHavePhrase, negativeHsiHavePhrase, interrogativeHsiHavePhrase } from "$lib/generators/phrases";

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Animales" titleEnglish="Animales">
        <WordGuesser words={animals}></WordGuesser>
    </Card>

    <Card titleSpanish="Caracteristicas" titleEnglish="Characteristics">
        <WordGuesser words={animalCharacteristics}></WordGuesser>
    </Card>
    
    <Card titleSpanish="Tener+" titleEnglish="Has">
        <PhraseGuesser phraseGenerator={positiveHsiHavePhrase} />
    </Card>
    <Card titleSpanish="Tener-" titleEnglish="Doesn't have">
        <PhraseGuesser phraseGenerator={negativeHsiHavePhrase} />
    </Card>
    <Card titleSpanish="Tener?" titleEnglish="Does...Have?">
        <PhraseGuesser phraseGenerator={interrogativeHsiHavePhrase} />
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