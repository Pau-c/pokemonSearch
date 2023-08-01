
import React from "react";
import { Route, Routes, BrowserRouter  } from "react-router-dom";
import { Login } from "./Components/Firebase/Users/Login";
import { Register } from "./Components/Firebase/Users/Register";

import { ProtectedRoute } from "./Components/ProtectedRoute";

import { AuthProvider } from "./Components/context/AuthContext";
import GetPokemon from "./Page/GetPokemon";
import Home from "./Page/Home";
import FavoritesList from "./Page/favorites";



function App() {
  return (

      <AuthProvider>
     <BrowserRouter> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/pokemones/:id" element={<GetPokemon />} /> 
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <FavoritesList />
              </ProtectedRoute>
            } 
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter> 
      </AuthProvider>

   
     
  
  );
}

export default App;