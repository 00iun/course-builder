export default function MapControl(
  event: React.MouseEvent<HTMLButtonElement>,
  options: string | object,
  value: boolean | number,
  map: any
) {
  event.preventDefault();
    if (typeof value === 'number') {
      return
    }
  map?.getOtions(options)
    ? map?.setOtions(options, value)
    : map?.setOtions(options, value);
}
