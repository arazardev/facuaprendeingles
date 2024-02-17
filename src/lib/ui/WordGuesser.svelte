<script lang="ts">
    export let words: Array<Word>

    interface Word{
        spanish:string,
        english:string
    }

    function validateWord (){
        if (wordTried === word.english){
            success = 1
            count += 1
            newWord()
        } else {
            success = 2
        }
        wordTried = ""
        setTimeout(()=>{
            success = 0
        },3000)
    }

    function newWord(){
        word = words[Math.floor(Math.random() * words.length)]
    }

    let count = 0

    let success = 0
    let wordTried: string
    let word: Word = words[Math.floor(Math.random() * words.length)]

</script>

<section>
    <span> Puntaje: {count}</span>
    <div>
        {#if success === 1}
        <h2 class="text-green-500">¡Muy Bien!</h2>
        {:else if success==2}
        <h2 class="text-red-500">Intentá de nuevo :D</h2>
        {/if}
    </div>
    <h1 class="text-3xl w-1/2 uppercase font-mono font-bold">{word.spanish}</h1>
    <input class="font-mono text-3xl w-1/2 rounded-xl text-center" type="text" bind:value={wordTried}/>
    <button class="rounded-xl mt-3 mb-3 bg-black text-white p-3" on:click={validateWord}>Validar</button>

</section>

<style>

    div{
        display: grid;
        place-content: center;
    }

    span{
        justify-self: start;
        font-family: monospace;
        font-size: x-large;
        margin-left: 10px;
    }

    h2{
        font-size: xx-large;
    }

    section{
        background-color: antiquewhite;
        display: grid;
        grid-template-rows: repeat(4,1fr);
        grid-template-columns: 1fr;
        justify-items: center;
    }
</style>