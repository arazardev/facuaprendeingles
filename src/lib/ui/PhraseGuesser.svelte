<script lang="ts">
    import  { type Phrase } from "$lib/interfaces/phrase";
    export let phraseGenerator: (()=> Phrase)
    

    function validateWord (){
        if (wordTried === phrase.english){
            success = 1
            count += 1
            wordTried = ""
            newPhrase()
        } else {
            success = 2
        }
        setTimeout(()=>{
            success = 0
        },3000)
    }

    function newPhrase(){
        phrase = phraseGenerator()
    }

    let count = 0

    let success = 0
    let wordTried: string
    let phrase: Phrase = phraseGenerator()

</script>

<form on:submit|preventDefault={validateWord}>
    <span> Puntaje: {count}</span>
    <div>
        {#if success === 1}
        <h2 class="success">Very good!</h2>
        {:else if success==2}
        <h2 class="miss">Try again :D</h2>
        {/if}
    </div>
    <h1 class="text-3xl uppercase font-mono font-bold">{phrase.spanish}</h1>
    <input class="font-mono text-3xl rounded-xl text-center"  type="text" bind:value={wordTried}/>
    <button class="rounded-xl mt-3 mb-3 bg-black text-white p-3" type="submit">Validate</button>
</form>

<style>
    div{
        display: grid;
        place-content: center;
    }

    span{
        justify-self: flex-start;
        font-family: monospace;
        font-size: x-large;
        margin-left: 10px;
    }

    h2{
        font-size: x-large;
    }

    h2.success{
        color:darkgreen;
    }

    h2.miss{
        color:brown;
    }

    form{
        background-color: #9CCEF4;
        display: grid;
        grid-template-rows: repeat(4,1fr);
        grid-template-columns: 1fr;
        justify-items: center;
    }
</style>