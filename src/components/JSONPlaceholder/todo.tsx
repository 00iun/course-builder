type TodoProps = {
  completed: boolean;
  userId: number;
  id: number;
  body: string;
};

export function Todo(props: TodoProps) {
  return (
    <div>
      <p>userId: {props.userId}</p>
      <p>body: {props.body}</p>
      <p>
        completed: {props.completed} #{props.id}
      </p>
      <input type="checkbox" defaultChecked={props.completed} />
    </div>
  );
}
