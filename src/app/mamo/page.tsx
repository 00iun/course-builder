import { createClient } from "@/utils/supabase/server";

export default async function Mamo() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  if (!user) {
    return <div>로그인이 필요합니다</div>;
  }

  const memoList = await supabase.from("memo").select("*");

  if (memoList.error) {
    return <div>오류발생!</div>;
  }

  console.log(memoList);

  return (
    <>
      <div>성공?</div>
      <pre>
        <code>{JSON.stringify(memoList, null, 2)}</code>
      </pre>
      {memoList.data?.map((memo) => {
        <div key={memo.id}>
          <h2>{memo.title}</h2>
          <p>{memo.content}</p>
        </div>;
      })}
    </>
  );
}
