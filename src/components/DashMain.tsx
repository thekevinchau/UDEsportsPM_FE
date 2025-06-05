export default function DashMain() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 text-xl font-bold w-full">Home</div>
      {/* This is the Div for Today's date and welcoming */}
      <div className="w-full border h-1/4 flex justify-center items-center">
        <div className="flex flex-col">
          <p>Friday, May 30</p>
          <h1>Good Morning, Kevin</h1>
          <div>Hey</div>
        </div>
      </div>
    </div>
  );
}
