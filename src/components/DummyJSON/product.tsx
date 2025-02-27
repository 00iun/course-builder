"use client";

import Link from "next/link";

export type ProductProps = {
  id: number; // 아이디
  category: string; // 카테고리
  tags: string[]; // 태그
  images: string[]; // 이미지들
  thumbnail: string; // 썸네일
  title: string; // 이름
  description: string; // 제품설명
  brand: string; // 브랜드
  rating: number; // 총 평점
  price: number; // 가격
  discountPercentage: number; // 할인율
  reviews: {
    // 리뷰
    rating: number;
    reviewerName: string;
    reviewerEmail: string;
    comment: string;
    date: string;
  }[];
  availabilityStatus: string; // 재고상태
  minimumOrderQuantity: number; // 최소 주문 수량
  shippingInformation: string; // 운송 정보
  returnPolicy: string; // 반품정책
};

export function Product(props: ProductProps) {
  return (
    <Link
      href={`/detail/${props.id}`}
      className="border rounded-xl p-2 m-3 w-[200px]"
    >
      <img src={props.thumbnail} />
      <p className=" font-bold">{props.title}</p>
      <p className=" text-gray-400 text-[15px]">{props.brand}</p>
      <p>{discountPrice(props.price, props.discountPercentage)}$</p>
      <p>
        {rating(props.rating)} {props.rating}
      </p>
    </Link>
  );
}

// 평점 별모양들
export function rating(rating: number): string {
  let star = "";
  for (let i = 0; i < Math.floor(rating); i++) star += "★";
  return star.padEnd(5, "☆");
}

// 할인 계산
export function discountPrice(price: number, discount: number): number {
  const discountCalc = (price * discount) / 100;
  return Number((price - discountCalc).toFixed(2));
}
