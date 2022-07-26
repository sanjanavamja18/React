import React from "react";
function Charactor() {
  const [string, setString] = useState("sanju");
  const handleClick = () => {
    setString(string.replace("vamja"));
  };
  return (
    <div>
      <button onClick={handleClick}>char</button>
    </div>
  );
}
export default Charactor;
