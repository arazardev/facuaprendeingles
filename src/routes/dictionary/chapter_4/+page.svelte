<script>
    import Dictionary from "$lib/ui/Dictionary.svelte";
    import { prepositions } from "$lib/constants/prepositions";
    import { furtnitures, houseParts } from "$lib/constants/nouns";

</script>

<section>
    <Dictionary words={prepositions} title="Preposiciones - Prepositions"></Dictionary>
    <Dictionary words={furtnitures} title="Muebles - Furtnitures"></Dictionary>
    <Dictionary words={houseParts} title="Casa - House"></Dictionary>
</section>

<style>
    section{
        display: grid;
        gap: 10px;
        margin-left: 10px;
        grid-template-columns: repeat(4,1fr);
    }
</style>