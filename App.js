import Header from './Components/Header';
import Category_Banner from './Components/CategoryBanner/Category_Banner';
import Popular_Sale from './Components/Popular_Sale_Card/Popular_Sale';
 import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Category_Banner/>
      <Popular_Sale/>
       <Footer/> 
    </div>
  );
}

export default App;
