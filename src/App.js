import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div class="container mx-auto py-20" >
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-2 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src="https://images.unsplash.com/photo-1575535468632-345892291673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt="Doge"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Comming Soon....</p>
            <p class="text-gray-500 font-medium">potential-mentor by hyturing</p>
          </div>
          <form action="http://hyturing.github.io">
            <button type="submit" value="Contact" class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
