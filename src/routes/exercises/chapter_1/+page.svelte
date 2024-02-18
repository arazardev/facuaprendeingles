<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {months,colors,weekdays} from "$lib/constants/nouns"
    import { positiveHavePhrase, negativeHavePhrase, interrogativeHavePhrase } from "$lib/generators/phrases";
	import PhraseGuesser from "$lib/ui/PhraseGuesser.svelte";

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Meses" titleEnglish="Months">
        <WordGuesser words={months}></WordGuesser>
    </Card>
    
    <Card titleSpanish="Colores" titleEnglish="Colors">
        <WordGuesser words={colors}></WordGuesser></Card>
    
    <Card titleSpanish="Dias de la semana" titleEnglish="Weekdays">
        <WordGuesser words={weekdays}></WordGuesser>
    </Card>

    <Card titleSpanish="Tener+" titleEnglish="Have">
        <PhraseGuesser phraseGenerator={positiveHavePhrase} />
    </Card>
    <Card titleSpanish="Tener-" titleEnglish="Haven't">
        <PhraseGuesser phraseGenerator={negativeHavePhrase} />
    </Card>
    <Card titleSpanish="Tener?" titleEnglish="Have?">
        <PhraseGuesser phraseGenerator={interrogativeHavePhrase} />
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