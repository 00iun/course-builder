type PhotoProps = {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

export function Photo(props: PhotoProps) {
  return (
    <div>
      <p>userId: {props.albumId}</p>
      <p>
        name: {props.title} #{props.id}
      </p>
      <img src={props.thumbnailUrl} />
    </div>
  );
}
