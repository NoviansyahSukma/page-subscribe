export default function PackageContent({
  children,
  textHead,
  icon1,
  icon2,
  bundling,
  style,
}) {
  return (
    <>
      <div>
        <div className="flex items-center mt-3 px-3">
          <div
            className={`flex items-center text-2xl tracking-wide font-semibold ${style}`}
          >
            <p className="tracking-wide font-semibold">{textHead}</p>
            <p className="ml-2 text-center text-orange-400">{icon1}</p>
          </div>
          <p className="ml-1 text-center text-3xl text-orange-400">{icon2}</p>
        </div>

        <div
          className={`w-full m-auto mt-2 py-6 md:px-7 lg:px-2 2xl:px-15 rounded-sm border-1 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-0 md:gap-y-6 lg:grid-cols-3 2xl:gap-y-10 ${
            bundling ? "border-purple-900" : "border-blue-900"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
