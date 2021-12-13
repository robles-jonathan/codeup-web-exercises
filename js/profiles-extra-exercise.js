"use strict";
(()=>{
    const moviesList = document.querySelector('.movies-list');
    const addMovieForm = document.querySelector('.add-movie-form');
    const titleValue = document.querySelector('#title-value');
    const plotValue = document.querySelector('#plot-value');
    const btnSubmit = document.querySelector('#update-movie');
    let output = '';
    const renderMovies = (movies) => {
        movies.forEach(movie => {
            let id = movie.id;
            output += `
<!------------------------EXAMPLE------------------------------------------------
                <div class="card mt-4 col-md-6 bg-light">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">${movie.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card Subtitle</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aperiam assumenda cum debitis delectus eius est ex expedita fugit id iusto numquam optio placeat praesentium, repellendus, sed vero vitae voluptatem!</p>
                        <a href="#" class="card-link">Edit</a>
                        <a href="#" class="card-link">Delete</a>
                    </div>
                </div>
------------------------------------------------------------------------------------>
                <div>
                    <div class="card" style="width: 18rem;">
                        <!-- <img src="${movie.poster}" height="250" class="card-img-top" alt="...">   -->
                        <div class="card-body" data-id=${movie.id}>
                            <h5 class="card-title text-capitalize">${movie.title}</h5>
                            <p class="card-text">${movie.plot}</p>
                        </div>
                        <div>
                            <span class="float-left">
                                <button class="ml-2 mt-2 mb-2 justify-self-right bg-primary edit-btn" id="edit-movie" value="${id}">Edit</button>
                            </span>
                            <span class="float-right">
                                <button class="mr-2 mt-2 mb-2 justify-self-right bg-danger delete-btn" id="delete-movie" value="${id}">Delete</button>
                            </span>    
                        </div>
                    </div>
                </div>
                `;
        });
        moviesList.innerHTML = output;
    }
    const url = 'https://glen-hexagonal-microraptor.glitch.me/movies';

    // GET - Read the movies
    // METHOD: GET

    fetch(url)
        .then(res => res.json())
        .then(data => renderMovies(data)
        );


    //EDIT AND DELETE
    moviesList.addEventListener('click', (e) => {
        e.preventDefault();
        let deleteBtnIsPressed = e.target.id == 'delete-movie';
        let editBtnIsPressed = e.target.id == 'edit-movie';

        let id = e.target.value;

        // Delete - Remove the existing movie
        // Method: DELETE
        if(deleteBtnIsPressed){
            fetch(`${url}/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(() => location.reload())
        }
        if(editBtnIsPressed){
            const parent = (e.target.parentElement.parentElement.parentElement);
            console.log(parent)
            let titleContent = parent.querySelector('.card-title').textContent;
            console.log(titleContent);
            let plotContent = parent.querySelector('.card-text').textContent
            console.log(plotContent)
            btnSubmit.innerHTML = "Update Movie";
            titleValue.value = titleContent;
            plotValue.value = plotContent;
        }

        //UPDATE - update the existing post
        //METHOD: PATCH
        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: titleValue.value,
                    plot: plotValue.value,
                })
            })
                .then(res => res.json())
                .then(() => location.reload())
        })

    })

    //CREATE - Insert new movie
    // METHOD: POST
    addMovieForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleValue.value,
                plot: plotValue.value
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const dataArray = [];
                dataArray.push(data);
                renderMovies(dataArray);
            })

        //reset input field to empty
        titleValue.value = '';
        plotValue.value = '';
    })


})();