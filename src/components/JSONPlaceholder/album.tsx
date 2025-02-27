type AlbumProps = {
  userId: number;
  id: number;
  title: string;
};

export function Album(props: AlbumProps) {
  return (
    <div>
      <p>userId: {props.userId}</p>
      <p>
        title: {props.title} #{props.id}
      </p>
    </div>
  );
}
