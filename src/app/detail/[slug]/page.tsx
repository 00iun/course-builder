"use client";

import { useEffect, useState } from "react";
import {
  ProductProps,
  rating,
  discountPrice,
} from "@/components/DummyJSON/product";
import { ContextDummyJSON } from "@/components/context/myContext";
import Review from "@/components/DummyJSON/review";

type paramsProps = {
  params: Promise<{ slug: string }>;
};

export default function Detail({ params }: paramsProps) {
  const { dummyData } = ContextDummyJSON();
  const [data, setData] = useState<ProductProps>();

  useEffect(() => {
    const paramData = async () => {
      const slug = Number((await params).slug);
      console.log(dummyData[slug - 1]);
      setData(dummyData[slug - 1]);
    };
    paramData();
  }, []);

  return (
    <>
      {data !== undefined ? (
        <>
          <div
            id="product-info"
            className="flex flex-col border rounded-xl w-[500px] p-5 m-5"
          >
            <p>{data.category}</p>
            <img src={data.images[0]} />
            <header>
              <div className="flex">
                {data.tags.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className=" bg-slate-400 border rounded-md p-[0_5px] m-[0_2px]"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
              <h1 className="text-3xl">{data.title}</h1>
              <div>
                <span className="text-slate-400">brand&gt; {data.brand}</span>
                <span className="float-right text-1xl">
                  {rating(data.rating)} {data.rating}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold mt-3">
                  {discountPrice(data.price, data.discountPercentage)}$
                </p>
                <span className="bg-red-400 border rounded-r-xl p-[0_10px]">
                  ({data.discountPercentage}% discount)
                </span>
                <span className="text-slate-300 line-through ml-2">
                  {data.price}$
                </span>
              </div>
              <p className="my-5">{data.description}</p>
            </header>
            <hr className="mb-5" />
            <footer>
              <span className="bg-teal-400 border rounded-md px-3 font-bold">
                {data.availabilityStatus}
              </span>
              <p>{data.shippingInformation}</p>
              <p>{data.returnPolicy}</p>
            </footer>
          </div>
          <h1>Reviews</h1>
          {data.reviews.map((item, i) => {
            return (
              <div key={i}>
                <Review {...item} />
              </div>
            );
          })}
        </>
      ) : (
        <p>로딩 중</p>
      )}
    </>
  );
}

// id: number; // 아이디
// category: string; // 카테고리
// tage: string[]; // 태그
// images: string[]; // 이미지들
// thumbnail: string; // 썸네일
// title: string; // 이름
// description: string; // 제품설명
// brand: string; // 브랜드
// rating: number; // 총 평점
// price: number; // 가격
// discountPercentage: number; // 할인율
// review: {
//   // 리뷰
//   rating: number;
//   reviewerName: string;
//   reviewerEmail: string;
//   comment: string;
//   date: string;
// }[];
// availabilityStatus: string; // 재고상태
// minimumOrderQuantity: number; // 최소 주문 수량
// shippingInformation: string; // 운송 정보
// returnPolicy: string; // 반품정책
