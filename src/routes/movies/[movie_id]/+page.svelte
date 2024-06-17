<script>
    export let data; 
    
</script>
<a href="/movies">Back</a>
<h1>{data.movie.title}</h1>

<div class="row mt-3">
    <div class="col-3">
    
        <img src={data.movie.poster} alt={data.movie.title} />
    </div>
        <div class="col">
        <p>Jahr: {data.movie.year}</p>
        <p>Dauer: {data.movie.length}</p>
        <ul>
            {#each data.movie.actors as actors}
                <li>{actors}</li>
            {/each}
        </ul>
       
    </div>
</div>