"use client";

export default function Home() {
  window.onload = function () {
    let map: naver.maps.Map;
    const center: naver.maps.LatLng = new naver.maps.LatLng(
      37.3595704,
      127.105399
    );

    map = new naver.maps.Map("map", {
      center: center,
      zoom: 16,
    });
  };

  return (
    <>
      <h1>page 메인 페이지</h1>
      <div id="map" className="w-[500px] h-[500px]"></div>
    </>
  );
}
