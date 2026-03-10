import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "The NUN", release_date: "2020"},
        {id: 2, title: "Evil NUN", release_date: "2024"},
        {id: 3, title: "NUN returns", release_date: "2022"},
        {id: 4, title: "The NUN chapter 2", release_date: "2026"},
        {id: 5, title: "Conjuring", release_date: "2021"}
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button"> Search </button>
        </form>

        <div className="movies_grid">
            {movies.map((movie) => (<MovieCard movie={(movie)} key={movie.id}/>))} 
        </div>
    </div>
}

export default Home;