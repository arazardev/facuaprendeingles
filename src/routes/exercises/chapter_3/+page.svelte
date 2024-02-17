<script>
	import Card from "$lib/ui/Card.svelte";
	import WordGuesser from "$lib/ui/WordGuesser.svelte";

    const wordClothes = [
        {"english": "jacket", "spanish": "chaqueta"},
        {"english": "shirt", "spanish": "camisa"},
        {"english": "t-shirt", "spanish": "remera"},
        {"english": "pants", "spanish": "pantalones"},
        {"english": "dress", "spanish": "vestido"},
        {"english": "skirt", "spanish": "falda"},
        {"english": "shoes", "spanish": "zapatos"},
        {"english": "socks", "spanish": "calcetines"},
        {"english": "hat", "spanish": "sombrero"},
        {"english": "gloves", "spanish": "guantes"},
        {"english": "scarf", "spanish": "bufanda"},
        {"english": "coat", "spanish": "abrigo"},
        {"english": "tie", "spanish": "corbata"},
        {"english": "boots", "spanish": "botas"},
        {"english": "sweater", "spanish": "suéter"},
        {"english": "jeans", "spanish": "vaqueros"}
    ]

    const wordSeasons = [{english:"summer",spanish:"verano"},{english:"winter",spanish:"invierno"},{english:"autumn",spanish:"otoño"},{english:"spring",spanish:"primavera"}]

    const wordsWeather = [
    {"english": "sunny", "spanish": "soleado"},
    {"english": "cloudy", "spanish": "nublado"},
    {"english": "rainy", "spanish": "lluvioso"},
    {"english": "windy", "spanish": "ventoso"},
    {"english": "stormy", "spanish": "tormentoso"},
    {"english": "snowy", "spanish": "nevado"},
    {"english": "foggy", "spanish": "neblinoso"},
    {"english": "clear", "spanish": "despejado"},
    {"english": "overcast", "spanish": "cubierto"},
    {"english": "freezing", "spanish": "helado"}
]

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

<!--  -->

<style>

    section{
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        background: #f8b47d;
    }

    
</style>