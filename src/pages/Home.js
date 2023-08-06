import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
       className=" h-screen bg-gradient-to-b
        from-blue-200 to-blue-500
    px-30  my-50"
    >
      <div
        className="p-6  border-dotted
        border-4 border-white-300"
      >
        <h1 class="text-4xl bold italic py-6">Create An Account</h1>
        <h2 class="text-sm bord">Already have an account? Sign up</h2>
        <Link to="/Login">
          <button class="border-2 my-5 mx-5 bg-slate-50 px-6 rounded">
            sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
