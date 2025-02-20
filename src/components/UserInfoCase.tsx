import { Button } from "./ui/button";

type dataType = {
  data: any;
  userId: number;
  seeUserInfo: string;
  setSeeUserInfo: any;
};

export default function UserInfoCase({
  data,
  userId,
  seeUserInfo,
  setSeeUserInfo,
}: dataType) {
  switch (seeUserInfo) {
    case "post":
      return (
        <>
          {data.posts.map((item) => {
            if (item.userId === userId)
              return (
                <div key={item.id}>
                  <h2 className=" text-2xl">{item.title}</h2>
                  <p>{item.body}</p>
                  <Button
                    onClick={() => {
                      setSeeUserInfo("comment");
                    }}
                    className="bg-slate-100 rounded"
                  >
                    comment
                  </Button>
                  <hr />
                </div>
              );
          })}
        </>
      );
    case "todo":
      return (
        <>
          {data.todos.map((item) => {
            if (item.userId === userId) {
              return (
                <div key={item.id}>
                  <input id={item.id} type="checkbox" />
                  <label htmlFor={item.id}>{item.title}</label>
                </div>
              );
            }
          })}
        </>
      );
    case "album":
      return <></>;
    case "info":
      const userData = data.users.find((item) => item.id === userId);
      return (
        <>
          <p>name: {userData.name}</p>
          <div className="flex">
            address:
            <span>
              {userData.address.city}
              <br />
              (lat: {userData.address.geo.lat}, lng: {userData.address.geo.lng})
              <br />
              {userData.address.street}
              <br />
              {userData.address.suite}
              <br />
              {userData.address.zipcode}
            </span>
          </div>
          <br />
          <p>phone: {userData.phone}</p>
          <p>email: {userData.email}</p>
          <br />
          <p>website: {userData.website}</p>
        </>
      );
    default:
      return <>오류 멈춰! {seeUserInfo}</>;
  }
}
