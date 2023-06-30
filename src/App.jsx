
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
    <div className="App">
      
    <div>
      <img className='bg' src='Images/unsplash2.png' alt=''></img>
     <nav className="navbar">
        <a className="navbar-brand ms-5" href="/">Taste</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart4 cart mx-5" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
      </nav>
  
<div >
     <img className='mainlogo' src='/Images/Plate2.png' alt='logo?'></img>
</div>
      </div>
      <div className='container sec1'>
        <h1>Delicious <br></br>
        Food is Waiting <br></br>
        For you</h1>
        <button className='btn10'>Read me</button>
       <div className='d-flex w-25 my-5'>
       <img className='col-4' src="Images/pizza.gif"></img>
       <img className='col-4' src="Images/pizza.gif"></img>
       <img className='col-4' src="Images/pizza.gif"></img>
       <img className='col-4' src="Images/pizza.gif"></img>
        </div> 
      </div>
      <div className='container mx-0 d-flex'>
        <div className='col-8 row sec2'>
          <div className='col-4'>
            <img className='rounded-circle w-100' src='Images/PizzaPlate.png'></img>
            <div className='rounded grey'>
            <h2 className='divend'>Test</h2>
            </div>
          </div>
          <div className='col-4'>
          <img className='rounded-circle w-100' src='Images/PastaPlate.png'></img>
          <div className='rounded grey'>
            <h2 className='divend'>Test2</h2>
            </div>
            
          </div>
        </div>
        <div className='col-4 mx-5 sec2'>
        <h1>We have Delicious food <br></br>
        Tasty Food in town</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti distinctio sint enim accusamus dolorem! Molestias illo assumenda nam eligendi voluptatibus omnis aut quam, modi quia, et blanditiis delectus nisi velit.</h6>
        </div>
      </div>
    </div>
  )
}

export default App
