export default function Main() {
  return (
    <main className="flex flex-col items-center py-10 gap-y-3 mx-3 sm:mx-auto mt-20 size-full md:mt-50 md:size-[600px] rounded-[10px] bg-[#F5F5F5]  font-Inter">
      <h1 className="text-5xl font-bold text-[#2B283A]">Tenzies</h1>
      <p className="text-center text-2xl text-[#4A4E74] font-normal w-[70%] line-clamp-3">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-5 gap-"></div>
    </main>
  );
}
