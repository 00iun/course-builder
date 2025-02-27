import { ProductProps, rating, discountPrice } from "@/components/DummyJSON/product";

// type ReviewProps = Pick<ProductProps, "reviews">;

// 급한 불 끄기 >;)
type ReviewProps = {
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Review(props: ReviewProps) {
  console.log(props);
  return (
  <div className="flex flex-col border rounded-xl w-[500px] p-5 m-5">
      <div id="userInfo">
        <span className="font-bold">{props.reviewerName}</span>
        <span className="text-slate-300 text-[12px]">
          {" "}
          ({props.reviewerEmail})
        </span>
      </div>
      <span>{rating(props.rating)} {props.rating}</span>
      <hr />
      <p className="mb-5">{props.comment}</p>
      <span className="float-right text-[10px]">{props.date}</span>
    </div>
  );
}

// 객체 안의 객체 타입을 어떻게 빼오지..?
// reviews 타입 내 놔~