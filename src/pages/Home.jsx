import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err) {
                setErr("Failed to load movies....")
                console.log(err);
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setErr(null)
        } catch (err) {
            console.log(err);
            setErr("No movies found");
        } finally {
            setLoading(false);
        }
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button"> Search </button>
        </form>

        {err && <div className="error-message">{err}</div>}

        {loading ? (
            <div className="loading">Loading.... </div>
        ) : (
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        )}

    </div>
}

export default Home;