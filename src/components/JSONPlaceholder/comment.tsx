type CommentProps = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function Comment(props: CommentProps) {
  return (
    <div>
      <p>postId: {props.postId}</p>
      <p>
        name: {props.name} #{props.id}
      </p>
      <p>email: {props.email}</p>
      <p>body: {props.body}</p>
    </div>
  );
}
