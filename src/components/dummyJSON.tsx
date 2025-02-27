import axios from "axios";
import { useEffect, useState } from "react";

import { Product, ProductProps } from "@/components/DummyJSON/product";
import { ContextDummyJSON } from "@/components/context/myContext";

export default function DummyJSON() {
  type dataType = { data: ProductProps };
  const { dummyData, setDummyData } = ContextDummyJSON();

  useEffect(() => {
    const api = async () => {
      const response = (await axios.get("https://dummyjson.com/products")).data
        .products;
      console.log(response);
      setDummyData(response);
    };
    api();
  }, []);

  return (
    <>
      <h1>dummyJSON</h1>
      <div className="flex flex-wrap">
        {dummyData === undefined ? (
          <p>로딩 중</p>
        ) : (
          dummyData.map((item: dataType, index: number) => {
            return <Product {...item} key={index} />;
          })
        )}
      </div>
    </>
  );
}
