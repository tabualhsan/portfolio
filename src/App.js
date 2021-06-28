import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/tabualhsan')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;

//   return (

   
//     <div className="App">
//       <Navbar bg="myRed" variant="dark"
//       sticky="top" expand="lg" className="justify-content-center">
//         <Navbar.Brand> 
          
//            {/* add logo here  
           
//           //  <img src={} width="40px" height="40px"/>*/}
          
//         </Navbar.Brand>

//         <Nav >

//           <Nav.Link href="home">Home</Nav.Link>
//           <NavDropdown title="Portfolio" >

//             <NavDropdown.Item href="websites/Dowjane">Dow Jane</NavDropdown.Item>
//             <NavDropdown.Item href="websites/Nationalpark">National Park Search</NavDropdown.Item>
//             <NavDropdown.Divider/>
//             <NavDropdown.Item href="websites/All_projects">All</NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="resume">Resume</Nav.Link>
//           <Nav.Link href="contact">Contact</Nav.Link>
//         </Nav>
//       </Navbar>



//       <div className="content">

//       <Container>





//       </Container>
//       </div>
//       </div>
 

// 


