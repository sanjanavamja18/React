import Counter from "./Component/Counter";
import "./App.css";

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://reqres.in/api/users?page=2")
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App;
