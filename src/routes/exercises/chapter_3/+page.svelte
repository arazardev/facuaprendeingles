<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {seasons, clothes, weather} from "$lib/constants/nouns"

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