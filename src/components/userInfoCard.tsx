import Post, { PostProps } from "./JSONPlaceholder/post";

type PostsProps = { data: { posts: PostProps[] } };

export default function UserInfoCard({ data }: PostsProps) {
  const dataPost = data.posts;
  <>
    {dataPost.map((item) => {
      return <Post {...item} key={item.id} />;
    })}
  </>;
}
