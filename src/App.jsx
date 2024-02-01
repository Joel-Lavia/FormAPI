import "./App.css";
import Data from "./Models/Data.json";
function App() {
  const data = Data.map((datas) => {
    return (
      <div key={datas.id}>
        <p>{datas.tweetSetence}</p>
        <img src={datas.avatar} alt="" />
        <img src={datas.tweetimg} alt="" />

      </div>
    );
  });

  return (
   <div
  >{data}
  </div>
  )
  
}

export default App;
