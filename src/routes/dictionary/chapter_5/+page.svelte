<script>
    import Dictionary from "$lib/ui/Dictionary.svelte";
    import { animals, animalCharacteristics } from "$lib/constants/nouns";

</script>

<section>
    <Dictionary words={animals} title="Animales - Animals"></Dictionary>
    <Dictionary words={animalCharacteristics} title="Caracteristicas - Characteristics"></Dictionary>
</section>

<style>
    section{
        display: grid;
        gap: 10px;
        margin-left: 10px;
        grid-template-columns: repeat(4,1fr);
    }
</style>