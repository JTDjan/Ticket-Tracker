import "./App.scss";
import team from "./data/Data";
import Header from "./Components/Header/Header.jsx";
import CardContainer from "./Components/CardContainer/CardContainer.jsx";
import EmployeeContainer from "./Components/EmployeeContainer/EmployeeContainer"
console.log(team);

function App() {
  return (
    <div className="app">
    <Header/>
    <CardContainer>
      <EmployeeContainer />
      <p>test 123</p> 
    </CardContainer>

     </div>
    // <div>
    //   <Header />
    //   <CardContainer cardData={} />
    // </div>
  );
}

export default App;
