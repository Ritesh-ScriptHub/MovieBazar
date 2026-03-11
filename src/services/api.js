const BASE_URL = "https://moviebazar-ouvm.onrender.com/api"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/popular`)
    const data = await response.json()
    return data
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data;
}