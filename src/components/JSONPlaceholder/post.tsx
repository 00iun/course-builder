export type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
  re: string;
};

export default function Post(props: PostProps) {
  return (
    <div key={props.id}>
      <p>
        title: {props.title} #{props.id}
      </p>
      <p>body: {props.body}</p>
      <p>userId: {props.userId}</p>
      <br />
    </div>
  );
}
