const button = document.getElementById('btn')
button.addEventListener('click', () => {
    const keyword = document.getElementById("keyword").value;
    const url = `https://www.omdbapi.com/?t=${keyword}&apikey=a18bcafd`;
    axios.get(url).then((response) => {
        console.log(response.data)
        document.getElementById('content').innerHTML = `
        <h1>Results:</h1>
        <h3>Title:</h3>
        <p>${response.data.Title}</p>
        <h3>Director:</h3>
        <p>${response.data.Director}</p>
        <h3>Actors:</h3>
        <p>${response.data.Actors}</p>
        <h3>Plot</h3>
        <p>${response.data.Plot}</p>
        `
    }).catch((error) => {
        console.log(error)
    })
})