export default function Die(props) {
  return (
    <button
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
      className="size-15 shadow-lg rounded text-[#0B2434] text-2xl font-Inter font-semibold text-center cursoir-pointer"
    >
      {props.value}
    </button>
  );
}
