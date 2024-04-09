import axios from "axios";
import UserCard from "./components/UserCard";
import { useState } from "react";

const user = {
  name: { first: "John", last: "Doe" },
  picture: { medium: "https://randomuser.me/api/portraits/men/75.jpg" },
  email: "john.doe@random.com",
};

function App() {
  const [userCard, setUserCard] = useState(user);

  const newCard = () => {
    axios.get("https://randomuser.me/api?nat=en").then((response) => {
      setUserCard(response.data.results[0]);
    });
  };
  return (
    <div className="App">
      <UserCard
        firstname={userCard.name.first}
        lastname={userCard.name.last}
        image={userCard.picture.medium}
        email={userCard.email}
      />
      <button type="button" onClick={newCard}>
        Change Card
      </button>
    </div>
  );
}

export default App;
