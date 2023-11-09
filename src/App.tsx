import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Start from "./routes/Home/Start"
import Home from "./routes/Home"
import Search from "./routes/Home/Search"
import NotFound from "./routes/Home/Search/NotFound"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Start />} />
          <Route path="search" element={<Search />}>
            <Route path="not-found" element={<NotFound />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
