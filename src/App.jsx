import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Book from './components/Book'
import { books } from '../data.json'

function App() {
  return <div>
    <Header />
    {/* Props - properties */}
    <div className='d-flex flex-wrap'>
      {books.map(b => <Book data={b} key={b.id} />)}
    </div>

    <Footer />
  </div>
}

export default App
