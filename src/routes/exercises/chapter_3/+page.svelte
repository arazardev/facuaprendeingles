<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {seasons, clothes, weather} from "$lib/constants/nouns"
	import PhraseGuesser from "$lib/ui/PhraseGuesser.svelte";
    import { positiveWearPhrase, negativeWearPhrase, interrogativeWearPhrase } from "$lib/generators/phrases";
    import Qa from "$lib/ui/QA.svelte";
    import { qaWear } from "$lib/constants/phrases";

    const wordClothes = clothes

    const wordSeasons =seasons

    const wordsWeather = weather

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Ropa" titleEnglish="Clothes">
        <WordGuesser words={wordClothes}></WordGuesser>
    </Card>

    <Card titleSpanish="Estaciones del año" titleEnglish="Seasons">
        <WordGuesser words={wordSeasons}></WordGuesser></Card>
    
    <Card titleSpanish="Clima" titleEnglish="Weather">
        <WordGuesser words={wordsWeather}></WordGuesser>
    </Card>

    <Card titleSpanish="Vestir+" titleEnglish="Wear">
        <PhraseGuesser phraseGenerator={positiveWearPhrase} />
    </Card>
    <Card titleSpanish="Vestir-" titleEnglish="Don't Wear">
        <PhraseGuesser phraseGenerator={negativeWearPhrase} />
    </Card>
    <Card titleSpanish="Vestir?" titleEnglish="Wear?">
        <PhraseGuesser phraseGenerator={interrogativeWearPhrase} />
    </Card>
    <Card titleSpanish="Preguntas y respuestas" titleEnglish="QA">
        <Qa qas={qaWear} />
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