import React, { useState, useEffect } from "react";

function MyComponent() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 3000 + 5000);

    // Clear the timeout if the component unmounts before it expires
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showComponent && <DelayedComponent />}
    </>
  );
}

function DelayedComponent() {
  return <div>This component was loaded after 3 seconds!</div>;
}

export default MyComponent;