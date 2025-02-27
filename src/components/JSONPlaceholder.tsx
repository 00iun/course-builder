import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import UserInfoCard from "./userInfoCard";

export default function JSONPlaceholder() {
  const [data, setData] = useState({});
  const [userId, setUserId] = useState(1);
  const [seeUserInfo, setSeeUserInfo] = useState("info");
  const lists = ["posts", "comments", "albums", "photos", "todos", "users"];

  useEffect(() => {
    lists.map((item) => {
      async function feree() {
        const response = (
          await axios.get(`https://jsonplaceholder.typicode.com/${item}`)
        ).data;
        setData((data) => ({ ...data, [item]: response }));
      }
      feree();
    });
  }, []);

  useEffect(() => {
    if (Object.keys(data).length === 6) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <div>JSONPlaceholder</div>
      <div className="flex">
        {lists.map((item, index) => (
          <Button
            onClick={() => {
              console.log(data[item]);
            }}
            className="mr-2"
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => {
          const number = Math.floor(Math.random() * 10);
          if (number != 0) setUserId(number);
        }}
        className="bg-slate-400 p-2 mt-1"
      >
        random userId
      </Button>
      <div className="flex flex-col rounded-[20px] border w-[600px] p-4 mt-4">
        {Object.keys(data).length === 6 ? (
          <>
          {/* <h1>{data}</h1> */}
            <UserInfoCard data={data} />
            <nav>
              <Button onClick={() => setSeeUserInfo("post")}>Post</Button>
              <Button onClick={() => setSeeUserInfo("todo")}>Todo</Button>
              <Button onClick={() => setSeeUserInfo("album")}>Album</Button>
              <Button onClick={() => setSeeUserInfo("info")}>Info</Button>
            </nav>
          </>
        ) : (
          <p>로딩</p>
        )}
      </div>
    </>
  );
}
