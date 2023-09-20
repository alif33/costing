import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="grid grid-cols-2">
            <div className="w-8/12 mx-auto mt-28">
                <div>
                    <h1 className="text-center text-2xl font-bold">Sign In</h1>
                    <h3 className="text-center text-lg mt-2">Your Social Campaigns</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-9">
                    <span className="flex justify-center border rounded py-2 px-4 gap-3">
                        <img
                            height={14}
                            width={14}
                            src="/images/google-icon.svg"
                            alt="apple icon"
                        />
                        <h5 className="text-base my-auto">Continue with</h5>
                    </span>
                    <span className="flex justify-center border rounded py-2 px-4 gap-3">
                        <img
                            height={14}
                            width={14}
                            src="/images/apple-black.svg"
                            alt="apple icon"
                        />
                        <h5 className="text-base my-auto">Continue with</h5>
                    </span>
                </div>
                <form action="" className="grid grid-cols-2 gap-3 mt-7">
                    <input
                        type="email"
                        className="input col-span-2"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="input col-span-2"
                        placeholder="Password"
                    />
                    <span className="flex justify-end col-span-2"><Link className="text-[#3E97FF] block" to="/">Forgot Password ?</Link></span>
                    <div className="col-span-2">
                     <button className="w-full bg-[#3E97FF] py-2 rounded text-white">Submit</button>   
                    </div>
                </form>
                <div className="mt-9">
                    <h2 className="text-center">Not a Member yet? <Link className="text-[#3E97FF]" to="/signup">Sign up</Link></h2>
                </div>
            </div>
            <div className="bg-slate-100 min-h-screen"></div>
    </div>
  );
}
