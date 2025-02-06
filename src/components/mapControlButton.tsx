"use client";

import MapOption from "./mapOption";
import { Button } from "./ui/button";

function MapControl(
  { map }: any
) {
  const Clickhandler = (event:React.MouseEvent<HTMLButtonElement>, options:string | any[]) => MapOption({event, options, map});
  return (
    <>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => { Clickhandler(e, ['draggable','pinchZoom','scrollWheel','keyboardShortcuts','dragdisableDoubleTapZoomgable','disableDoubleClickZoom','disableTwoFingerTapZoom'])
          }}
        >
          고정
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => { Clickhandler(e, 'disableKineticPan')
          }}
        >
          관성
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => { Clickhandler(e, 'tileTransition')
          }}
        >
          타일
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => {
            e.preventDefault();
            if (map?.getOptions("minZoom") === 10) {
              map.setOptions({
                minZoom: 7,
                maxZoom: 21,
              });
            } else {
              map?.setOptions({
                minZoom: 10,
                maxZoom: 21,
              });
            }
          }}
        >
          줌인
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => { Clickhandler(e, ['scaleControl','logoControl','mapDataControl','zoomControl','mapTypeControl'])
          }}
        >
          숨기기
        </Button>
      </li>
    </>
  );
}

export default MapControl;
