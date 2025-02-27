"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Context 생성
const naverMapContext = createContext<any>(null); // FIXME: any 타입을 사용하지 않도록 수정하세요.
const dummyJson = createContext<any>(null);

// Provider 설정
type myProps = {
  children: ReactNode;
};

export const MyProvider = ({ children }: myProps) => {
  const [naverMap, setNaverMap] = useState<naver.maps.Map>();
  const [dummyData, setDummyData] = useState();

  return (
    <naverMapContext.Provider value={{ naverMap, setNaverMap }}>
      <dummyJson.Provider value={{ dummyData, setDummyData }}>
        {children}
      </dummyJson.Provider>
    </naverMapContext.Provider>
  );
};

export const ContextNaverMap = () => useContext(naverMapContext);
export const ContextDummyJSON = () => useContext(dummyJson);
