<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {musicInstruments} from "$lib/constants/nouns"
	import PhraseGuesser from "$lib/ui/PhraseGuesser.svelte";
    import { positiveCanPhrase, negativeCanPhrase, interrogativeCanPhrase } from "$lib/generators/phrases";

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Instrumentos Musicales" titleEnglish="Musical instruments">
        <WordGuesser words={musicInstruments}></WordGuesser>
    </Card>

    <Card titleSpanish="Poder+" titleEnglish="Can">
        <PhraseGuesser phraseGenerator={positiveCanPhrase} />
    </Card>
    <Card titleSpanish="Poder" titleEnglish="Can't">
        <PhraseGuesser phraseGenerator={negativeCanPhrase} />
    </Card>
    <Card titleSpanish="Poder?" titleEnglish="Can?">
        <PhraseGuesser phraseGenerator={interrogativeCanPhrase} />
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