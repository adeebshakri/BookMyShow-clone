import "./App.scss";
import Movies from "./components/Movies/Movies";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Logo from '../src/assets/images/logo.png';
import './App.css';
import Seats from "./components/Seats/Seats";
import BookSeats from "./components/Seats/BookSeats";
import ConfirmBooking from "./components/ConfirmBooking/ConfirmBooking";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Putting movie data here. We could have imported it from src\data as well, but I was not sure if I should change that folder.
const moviesJson = [
    {
        "ageCertificate": "U/A",
        "description": "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
        "durationMins": "134",
        "genres": [
            "Spy Movies",
            "Sci-Fi Movies",
            "US Movies"
        ],
        "img": {
            "thumbnail": "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_disneyplus_21043-1_63f71aa0.jpeg",
            "large": "https://images.hdqwalls.com/wallpapers/black-widow-2020-movie-4k-poster-3m.jpg"
        },
        "title": "Black Widow"
    },
    {
        "ageCertificate": "U",
        "description": "A legendary rivalry reemerges when Jerry moves into New York City's finest hotel on the eve of the wedding of the century, forcing the desperate event planner to hire Tom to get rid of him. As mayhem ensues, the escalating cat-and-mouse battle soon threatens to destroy her career, the wedding, and possibly the hotel itself.",
        "durationMins": "101",
        "genres": [
            "Spy Movies",
            "Sci-Fi Movies",
            "US Movies"
        ],
        "img": {
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg",
            "large": "https://www.pinkvilla.com/files/styles/fbimagesection/public/tom_jerry_poster_sm.jpg"
        },
        "title": "Tom & Jerry (2021)"
    },
    {
        "ageCertificate": "U/A",
        "description": "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.",
        "durationMins": "148",
        "genres": [
            "Spy Movies",
            "Sci-Fi Movies",
            "US Movies"
        ],
        "img": {
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
            "large": "https://images.squarespace-cdn.com/content/v1/5b4cd70a1137a6abf12c5c2a/1624576679401-MHSNQYS517705NJ80M1Z/STN_Marketing_CaseStudy_Thumbnails_TheTomorrowWar+%281%29.png?format=1500w"
        },
        "title": "The Tomorrow War"
    },
    {
        "ageCertificate": "U/A",
        "description": "Wonder Woman finds herself battling two opponents, Maxwell Lord, a shrewd entrepreneur, and Barbara Minerva, a friend-turned-foe. Meanwhile, she also ends up crossing paths with her love interest.",
        "durationMins": "161",
        "genres": [
            "Spy Movies",
            "Sci-Fi Movies",
            "US Movies"
        ],
        "img": {
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
            "large": "https://i1.wp.com/udou.ph/wp-content/uploads/2019/12/wonder-woman-1984-official-trailer-udou-header.jpg"
        },
        "title": "WW 84"
    },
    {
        "ageCertificate": "U/A",
        "description": "JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
        "durationMins": "179",
        "genres": [
            "Indian Movies"
        ],
        "img": {
            "thumbnail": "https://m.media-amazon.com/images/I/71yR1ufXalL._AC_SS450_.jpg",
            "large": "https://deadline.com/wp-content/uploads/2021/01/master-poster.jpg"
        },
        "title": "Master"
    },
    {
        "ageCertificate": "U/A",
        "description": "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.",
        "durationMins": "145",
        "genres": [
            "US Movies"
        ],
        "img": {
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
            "large": "https://cinedope.com/wp-content/uploads/2021/04/Fast-and-Furious-9.jpg"
        },
        "title": "F9"
    }
]

//Added routers for all routes, if nothing mathches, it should redirect to Movies page.
function App() {
    return (
        <div className="app">
            <div className="header">
                <img src={Logo} className="logo" />
                Broadway Cinemas
            </div>
            <Router> 
                <Routes>
                    <Route path="/" exact element={<Movies moviesJson={moviesJson} />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/movies/bookseats/:movieId" element={<BookSeats />} />
                    <Route path="/confirmbooking" element={<ConfirmBooking />} />
                    <Route path="*" element={<Movies moviesJson={moviesJson} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

/*
Betterments:
If it were a bigger project, we would have used redux.
Not to use constants(strings) directly in files but move all constants to anew folder named constants and import all strings from there.
*/

