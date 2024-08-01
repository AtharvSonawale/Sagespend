// Parent Component
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [data, setData] = useState('');

  const handleData = (data) => {
    setData(data);
  };

  return (
    <div>
      Data from child: {data}
      <ChildComponent onData={handleData} />
    </div>
  );
}

// Child Component
function ChildComponent({ onData }) {
  const [inputData, setInputData] = useState('');

  const handleSubmit = () => {
    onData(inputData);
  };

  return (
    <div>
      <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
