<script lang="ts">
    import type { Word } from "$lib/interfaces/word";
    export let words: Array<Word>
    export let title: string
</script>


<table class="text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">  
    <caption class="caption-top">
        {title}
    </caption>

    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th class="border border-slate-600">English</th>
            <th class="border border-slate-600">Spanish</th>
        </tr>
    </thead>
    {#each words as {english, spanish}}
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="border border-slate-700" >{english}</td>
                <td class="border border-slate-700" >{spanish}</td>
            </tr>
        </tbody>
    {/each}
</table>



<style>

    table{
        text-align: center;
        font-size: large;
    }


    caption{
        margin: 10px;
    }

</style>