import "./App.css";

function App() {
  return (
    <div className="py-8">
      <div className="py-8 px-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-8">
        <img
          className="px-6 block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1bm55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Dog's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Comming Soon....</p>
            <p className="text-gray-500 font-medium">
              potential-mentor by hyturing
            </p>
          </div>
          <form action="http://hyturing.github.io" value="contact">
            <button type="submit" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
