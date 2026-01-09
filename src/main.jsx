import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router'
import Home from './views/Home'
import About from './views/About'
import Booking from './views/Booking'
import Login from './views/Login'
import Register from './views/Register'
import Seatselection from './views/Seatselection'
import Payment from './views/Payment'
import Movie from './views/Movie'
import FavoriteMovies from './views/FavoriteMovies'



 const root = createRoot(document.getElementById('root'))
 root.render(
  <BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/booking/:id" element={<Booking/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/seatselection" element={<Seatselection/>}/>
    <Route path='/Favoritemovies' element={<FavoriteMovies/>}/>

</Routes>
</BrowserRouter>
 )
