import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Main from "./pages/Main";
import Book from "./pages/Book";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path=':id' element={<Book/>}/>
      </Routes>
  );
}

export default App;
