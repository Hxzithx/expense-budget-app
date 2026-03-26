import Image from "next/image";

export default function Home() {
  return (
     <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white rounded-x1 p-8">
        <h1 className="text-3xl font-bold text-blue-600">
          My Budget App
        </h1>
        <p className="text-gray-500 mt-2">
          Welcome! Lets track your money.
        </p>
      </div>
    </div>
  );
}
