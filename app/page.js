import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[45vh] text-white">
        <div className="text-3xl flex justify-center items-center mt-6 font-bold">Buy me a Coffee <span><img className="invert-100" src="/coffee.gif" width={50} alt="" /></span></div>
        <p className="text-lg mt-3">
          A crowdfunding platform for creator. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex mt-5">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Here
          </button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-15"></div>

      <section className="text-white py-16 container mx-auto">
        <h1 className="text-lg text-center mb-5 font-bold">
          Your fans can buy you a coffee to support your projects!
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="space-y-3 flex flex-col justify-between items-center">
            <img className="p-2 bg-gray-500 rounded-full" src="/developer.png" width={88} alt="" />
            <p>Fans want to help you</p>
            <p className="text-center">Your fans are available for you to buy a coffee</p>
          </div>

          <div className="space-y-3 flex flex-col justify-between items-center">
            <img className="p-2 bg-gray-500 rounded-full" src="/coin.gif" width={88} alt="" />
            <p>Fans want to help you</p>
            <p className="text-center">Your fans are available for you to buy a coffee</p>
          </div>

          <div className="space-y-3 flex flex-col justify-between items-center">
            <img className="p-2 bg-gray-500 rounded-full" src="/developer.png" width={88} alt="" />
            <p>Fans want to help you</p>
            <p className="text-center">Your fans are available for you to buy a coffee</p>
          </div>
        </div>
      </section>

      <div className="bg-white h-1 opacity-15 mt-5"></div>

      <section className="text-white container py-16 mx-auto">
        <h1 className="text-lg text-center mb-5 font-bold">
          Learn more about us
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="space-y-3 flex flex-col justify-between items-center">
            <img className="p-2 bg-gray-500 rounded-full" src="/developer.png" width={88} alt="" />
            <p>Fans want to help you</p>
            <p className="text-center">Your fans are available for you to buy a coffee</p>
          </div>

          <div className="space-y-3 flex flex-col justify-between items-center">
            <img className="p-2 bg-gray-500 rounded-full" src="/coin.gif" width={88} alt="" />
            <p>Fans want to help you</p>
            <p className="text-center">Your fans are available for you to buy a coffee</p>
          </div>

          <div className="space-y-3 flex flex-col justify-between items-center">
            <img className="p-2 bg-gray-500 rounded-full" src="/developer.png" width={88} alt="" />
            <p>Fans want to help you</p>
            <p className="text-center">Your fans are available for you to buy a coffee</p>
          </div>
        </div>
      </section>
    </>
  );
}
