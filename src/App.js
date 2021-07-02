import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Randommer from './Randommer';
import NetworksArea from './NetworksArea';
import primeLogo from './prime_video_logo.png';
import disneyLogo from './disney_hotstar_logo.png';
import netflixLogo from './netflix_logo.png';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <NetworksArea name="netflix" networkId="213" logo={netflixLogo} />
      <NetworksArea name="prime" networkId="1024" logo={primeLogo} />
      <NetworksArea name="disney" networkId="3919"logo={disneyLogo} />
      <Randommer />
    </div>
  );
}

export default App;
