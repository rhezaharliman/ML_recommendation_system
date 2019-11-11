import React from 'react'


const SearchResultContainer = ({ results }) => {
    <div>
        <center><h1>Search Result</h1></center>
        {results.map((result) => (
        <div class="card">
            <div class="card-body">
            <h5 class="card-title" id="title">{result.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted" id="url">{result.url}</h6>
            <p class="card-text" id="description">{result.description}</p>
            </div>
        </div>
        ))}
    </div>
};

export default SearchResultContainer;
