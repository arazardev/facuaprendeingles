<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";
    import {musicInstruments} from "$lib/constants/nouns"

</script>

<!-- HTML -->
<section>
    <Card titleSpanish="Instrumentos Musicales" titleEnglish="Musical instruments">
        <WordGuesser words={musicInstruments}></WordGuesser>
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