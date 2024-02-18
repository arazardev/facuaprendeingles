
<script lang="ts">
    export let titleEnglish:string
    export let titleSpanish:string
</script>


<div>
    <h1 class="spanish">{titleSpanish}</h1> <h1 class="english">{titleEnglish}</h1>
    <hr>
    <slot></slot>
</div>

<style>

    div{
        border: 3px solid rgb(14, 24, 59) ;
        background-color: #156BAD;
        margin: 10px;
        text-align: center;
        border-radius: 10px;
        
    }

    h1{
        display: inline;
        font-family: fantasy;
        font-size: xx-large;
        align-self: center;
    }

    h1.spanish{
        color:rgb(255, 81, 0);
    }
    h1.english{
        color:rgb(0, 174, 255);
    }

</style>