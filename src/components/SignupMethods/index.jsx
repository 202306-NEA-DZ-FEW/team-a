import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "@/context/AuthProvider";

function SignupMethods() {
  const { signInWithFacebook, signInWithGoogle, signInWithGithub } = useAuth();
  return (
    <>
      <div className='flex gap-2 justify-center items-center text-3xl'>
        <button
          className='btn btn-ghost rounded-xl hover:drop-shadow-xl transition-all duration-400 ease-in-out'
          onClick={signInWithFacebook}
        >
          <BsFacebook className='text-3xl text-blue-600' />
        </button>
        <button
          onClick={signInWithGoogle}
          className='btn btn-ghost rounded-xl hover:drop-shadow-xl transition-all duration-400 ease-in-out'
        >
          <FcGoogle className='text-3xl' />
        </button>
        <button
          onClick={signInWithGithub}
          className='btn btn-ghost rounded-xl hover:drop-shadow-xl transition-all duration-400 ease-in-out'
        >
          <BsGithub className='text-3xl' />
        </button>
      </div>
    </>
  );
}

export default SignupMethods;
