<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {months,colors,weekdays} from "$lib/constants/nouns"

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