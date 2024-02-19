<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {foodAndDrinks, eatMoments} from "$lib/constants/nouns"

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Comidas y bebidas" titleEnglish="Food and Drinks">
        <WordGuesser words={foodAndDrinks}></WordGuesser>
    </Card>

    <Card titleSpanish="Comidas del dia" titleEnglish="Meals of the day">
        <WordGuesser words={eatMoments}></WordGuesser>
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