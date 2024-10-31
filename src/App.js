import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import CreateRecipe from './Admin/CreateRecipe';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import ListAllRecipes from './Admin/ListAllRecipes';
import EditRecipe from './Admin/EditRecipe';
import CreateTag from './Admin/CreateTag';
import Login from './Admin/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Header />
        <div className="flex-grow ml-20">
          <Sidebar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/recipes" element={<ListAllRecipes />} />
              <Route path="/edit-recipe/:id" element={<EditRecipe />} />
              <Route path="/create" element={<CreateRecipe />} />
              <Route path="/create/tag" element={<CreateTag />} />
              <Route path="/login" element={<Login />} /> {/* Login route */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
