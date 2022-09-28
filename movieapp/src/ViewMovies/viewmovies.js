import React, { useState } from 'react'
import './viewmovies.css'


const Image1 = "https://www.shockya.com/news/wp-content/uploads/maze-runner-poster.jpg"
const ViewMovies = () => {


    const MovieData = [
        {
            MovieImg : Image1,
            MovieName : "Interstellar",
            MovieYear : "1 May 2008",
            Director : "Jon Favreau",
            BasedOn : ["Stan Lee "," DonHeck"],
            Likes : 11,
            Dislikes : 2

        },
        {
            MovieImg : Image1,
            MovieName : "Avengers",
            MovieYear : "1 May 2008",
            Director : "Jon Favreau",
            BasedOn : ["Stan Lee "," DonHeck"],
            Likes : 10,
            Dislikes : 20
        }
        ,{
            MovieImg : Image1,
            MovieName : "Men In Black",
            MovieYear : "1 May 2008",
            Director : "Jon Favreau",
            BasedOn : ["Stan Lee "," DonHeck"],
            Likes : 1,
            Dislikes : 12
        },
        {
            MovieImg : Image1,
            MovieName : "Spider Man",
            MovieYear : "1 May 2008",
            Director : "Jon Favreau",
            BasedOn : ["Stan Lee "," DonHeck"],
            Likes : 110,
            Dislikes : 42
        }
        ,
        {
            MovieImg : Image1,
            MovieName : "Spider Man 2",
            MovieYear : "1 May 2008",
            Director : "Jon Favreau",
            BasedOn : ["Stan Lee "," DonHeck"]
            ,
            Likes : 10,
            Dislikes : 2
        },
        {
            MovieImg : Image1,
            MovieName : "Interstellar 2",
            MovieYear : "1 May 2008",
            Director : "Jon Favreau",
            BasedOn : ["Stan Lee "," DonHeck"],
            Likes : 100,
            Dislikes : 20
        }
    ]

    
    
    
    const [List,UpdateList] = new useState(MovieData);

    const Search = (event) => {
        
        const inp = event.target.value
        var NewList = MovieData;
        NewList = NewList.filter((item) => {
        return item.MovieName.toLowerCase().indexOf(inp.toLowerCase()) !== -1;});

        console.log(NewList);
        UpdateList(NewList);
        
    }


    return (

        <div>
            <p class="greet">Hello User ..!! </p>
            <div class="search-movies">
            <input type="text" placeholder="Search for Movies..." onChange={Search}></input>
            </div>
            <div class="movie-container">
            <div class="movies-listt">
                {
                    List.map(s => {
                        return (
                            <div class="movie-card">
                                <img src={s.MovieImg}></img>
                                <p class="name">{s.MovieName}</p>
                                <p class="year"> Release Data : {s.MovieYear}</p>
                                <p class="len">Director : {s.Director}</p>
                                <p class="tags">Based On : {s.BasedOn}</p>

                                <i class="fa-regular fa-thumbs-up"></i><span>{s.Likes}</span>
                                <i class="fa-regular fa-thumbs-down"></i><span>{s.Dislikes}</span>

                            </div>
                        )
                    })
                }
            </div>

            
            </div>
        </div>
        




    )
}

export default ViewMovies