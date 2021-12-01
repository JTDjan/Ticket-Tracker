import "./App.scss";
import Header from "./Components/Header/Header.jsx";
import CardContainer from "./Components/CardContainer/CardContainer.jsx";
import EmployeeContainer from "./Components/EmployeeContainer/EmployeeContainer"


function App() {
  return (
    <div className="app">
    <Header/>
    <CardContainer/>

     </div>
    // <div>
    //   <Header />
    //   <CardContainer cardData={} />
    // </div>
  );
}

export default App;
