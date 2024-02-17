
<script lang="ts">
    export let titleEnglish:string
    export let titleSpanish:string
</script>


<div>
    <h1 class="spanish">{titleSpanish}</h1> - <h1 class="english">{titleEnglish}</h1>
    <hr>
    <slot></slot>
</div>

<style>

    div{
        border: 3px solid gray ;
        background-color: bisque;
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
        color:red;
    }
    h1.english{
        color:blue;
    }

</style>