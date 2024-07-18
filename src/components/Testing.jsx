import { useState, useRef } from 'react';

function Testing() {
  const [showComponent, setShowComponent] = useState(false);
  const componentRef = useRef(null);

  const handleClick = () => {
    setShowComponent(true);
    setTimeout(() => {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);import React, { useState, useRef } from 'react';

function App() {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const componentRefs = {
    component1: useRef(null),
    component2: useRef(null),
    component3: useRef(null),
    component4: useRef(null),
  };

  const handleClick = (componentName) => {
    setVisibleComponent(componentName);
    setTimeout(() => {
      componentRefs[componentName].current.scrollIntoView({ behavior: 'smooth' });
    }, 5000);
  };

  return (
    <div>
      <button onClick={() => handleClick('component1')}>Show Component 1</button>
      <button onClick={() => handleClick('component2')}>Show Component 2</button>
      <button onClick={() => handleClick('component3')}>Show Component 3</button>
      <button onClick={() => handleClick('component4')}>Show Component 4</button>

      {visibleComponent === 'component1' && (
        <div ref={componentRefs.component1} style={{ marginTop: '50px' }}>
          <Component1 />
        </div>
      )}
      {visibleComponent === 'component2' && (
        <div ref={componentRefs.component2} style={{ marginTop: '50px' }}>
          <Component2 />
        </div>
      )}
      {visibleComponent === 'component3' && (
        <div ref={componentRefs.component3} style={{ marginTop: '50px' }}>
          <Component3 />
        </div>
      )}
      {visibleComponent === 'component4' && (
        <div ref={componentRefs.component4} style={{ marginTop: '50px' }}>
          <Component4 />
        </div>
      )}
    </div>
  );
}

function Component1() {
  return <div>Component 1 content here</div>;
}

function Component2() {
  return <div>Component 2 content here</div>;
}

function Component3() {
  return <div>Component 3 content here</div>;
}

function Component4() {
  return <div>Component 4 content here</div>;
}

export default App;

  };

  return (
    <div>
      <button onClick={handleClick}>Show Component</button>
      {showComponent && (
        <div ref={componentRef} style={{ marginTop: '50px' }}>
          <YourComponent />
        </div>
      )}
    </div>
  );
}

function YourComponent() {
  return <div>Your component content here</div>;
}

export default Testing;
