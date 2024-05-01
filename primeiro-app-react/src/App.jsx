import Card from "./components/Card/Card";
import "./App.css";
import { useState } from "react";

export default function App() {
  const[countFollowers, setCountFollowers] = useState(0)


  const users = [
    {
      id: 1,
      name: "Edmilton",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
    {
      id: 2,
      name: "Vinicius",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
    {
      id: 3,
      name: "Pansanato",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
  ];

  function handleChangeFollowers(value) {
    setCountFollowers(value ? countFollowers + 1 : countFollowers -1)
  }

  // const user = {
  //   id: 1,
  //   name: "Alan Faraj",
  //   imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
  // }

  return (
    <>
      <div>
        <h1 className="count-followers">
          seguidores:{countFollowers}
        </h1>

        <div className="list-users">

          {
            users.map((user) => {
              return <Card key={user.id} userData={user} changeCount={handleChangeFollowers} />
              
            })
          }


          {/* <Card name={users[2].name} imageUrl={users[1].imageUrl}/> */}

        </div>
      </div>



    </>


  )
}