export default function Testimonials() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center mx-8">
      <h1 className="text-3xl">What our users say about us?</h1>
      <div className="max-w-lg px-5 py-4 bg-slate-200 shadow-menu border-b-4 border-wedges-pink-500 rounded-md">
        <div className="min-h-32">
          <span className="text-6xl font-bold">“</span>
          <p className="font-2xl break-all">
            Eu
            adoreiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <span className="flex justify-end text-6xl font-bold">”</span>
        </div>
        <div className="flex items-center mt-3">
          <img
            className="block w-16 h-16 rounded-full"
            src="https://img.freepik.com/free-vector/happy-user-giving-positive-review-online-service_74855-20137.jpg"
            alt
          />
          <div className="ml-2">
            <h4 className="text-16 font-bold ">André Batista</h4>
            <span className="text-wedges-gray-500 text-sm">Usuário</span>
          </div>
        </div>
      </div>
    </div>
  );
}
