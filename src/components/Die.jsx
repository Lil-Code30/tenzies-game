export default function Die({ value, isHeld, handleHold, id }) {
  return (
    <button
      onClick={() => handleHold(id)}
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
      className="size-15 shadow-lg rounded text-[#0B2434] text-2xl font-Karla font-semibold text-center cursoir-pointer"
    >
      {value}
    </button>
  );
}
