import ReactDOM from 'react-dom/client'

const Name = 'Mohammad Ibrahim';
const Village = 'Pahashiakhali';
const Union = 'Islamabad';
const PoliceStation = 'Eidgaon';
const date = new Date();
const CurrentDate = date.getDate();
const CurrentMonth = date.getMonth();
const CurrentYear = date.getFullYear();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>{Name}</h1>
    <h3>{Village}</h3>
    <h4>{Union}</h4>
    <h5>{PoliceStation}</h5>
    <p>{CurrentDate + '/' + CurrentMonth + '/' + CurrentYear}</p>
  </div>
)
