import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Users from "./pages/Users";
import UsersAlbum from "./pages/UsersAlbum";
import AlbumsPhoto from "./pages/AlbumsPhoto";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <BrowserRouter>

        <nav>
          <NavLink to="/">Users</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/albums" element={<UsersAlbum />} />
          <Route path="/photos" element={<AlbumsPhoto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;