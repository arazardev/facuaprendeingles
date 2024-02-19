<script>
    import Dictionary from "$lib/ui/Dictionary.svelte";
    import { foodAndDrinks, eatMoments } from "$lib/constants/nouns";

</script>

<section>
    <Dictionary words={foodAndDrinks} title="Animales - Animals"></Dictionary>
    <Dictionary words={eatMoments} title="Caracteristicas - Characteristics"></Dictionary>
</section>

<style>
    section{
        display: grid;
        gap: 10px;
        margin-left: 10px;
        grid-template-columns: repeat(4,1fr);
    }
</style>