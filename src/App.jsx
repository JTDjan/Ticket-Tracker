import "./App.scss";
import team from "./data/Data";
import Header from "./Components/Header/Header.jsx";
import CardContainer from "./Components/CardContainer/CardContainer.jsx";
console.log(team);

function App() {
  return (
    <div className="app">
    <Header/>
    <CardContainer>
      <p>Test 123</p>
    </CardContainer>

     </div>
    // <div>
    //   <Header />
    //   <CardContainer cardData={} />
    // </div>
  );
}

export default App;
