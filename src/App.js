import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import CreateRecipe from './Admin/CreateRecipe';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import ListAllRecipes from './Admin/ListAllRecipes';
import EditRecipe from './Admin/EditRecipe';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
      <Header />

        <div className="flex-grow ml-20"> {/* Adjust margin when sidebar is closed */}
          <Sidebar />
          <div className="pt-16"> {/* Add padding-top to avoid content being hidden behind the header */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/recipes' element={<ListAllRecipes />} />
              <Route path="/edit-recipe/:id" element={<EditRecipe />} /> {/* Define the edit route */}
              <Route path="/create" element={<CreateRecipe />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
