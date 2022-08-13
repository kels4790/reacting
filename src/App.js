import './App.css';
import MainContent from './components/MainContent';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
        <MainContent txt='Hey my name is Jaeshun, I been into cameras since I was a kid. Growing up I recorded and shot pretty much ANYTHING. I built Trill Visualz to get your biggest moments on film and make memories you can keep "fa-eva, eva."'   />

        <Content copy="Slide over each photo to see past shoots. Got a vision of your own? Let's bring it to life!" title='TRILL VISUALZ' subTitle='TRILL IDEAS' />
    </div>
  );
}

export default App;
