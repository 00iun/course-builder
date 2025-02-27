type UserProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    geo: { lat: string; lng: string };
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
};

export function User(props: UserProps) {
  return (
    <div>
      <p>
        userName: {props.username} #{props.id}
      </p>
      <p>name: {props.name}</p>
      <br />
      <div>
        address:
        <span>City: {props.address.city}</span>
        <span>
          Geo: ({props.address.geo.lat}, {props.address.geo.lng})
        </span>
        <span>Street: {props.address.street}</span>
        <span>Suite: {props.address.suite}</span>
        <span>Zipcode: {props.address.zipcode}</span>
      </div>
      <div>
        company:
        <span>bs: {props.company.bs}</span>
        <span>catchPhrase: {props.company.catchPhrase}</span>
        <span>name: {props.company.name}</span>
      </div>
      <br />
      <p>email: {props.email}</p>
      <p>phone: {props.phone}</p>
      <br />
      <p>website: {props.website}</p>
    </div>
  );
}
