import './App.css'

import Footer from './components/Footer.jsx'
import UserList from './components/UserList.jsx'
import Navbar from './components/Navbar.jsx'



function App() {
  return (
    <>
      <body className="bg-[#F1F5F9]"></body>
      <Navbar />
      <div className="m-16 min-h-screen">
        <UserList />
        {/* <Counter /> */}
      </div>
      <Footer />
    </>
  )
}

export default App
