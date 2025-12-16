
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";
import gif from "../assets/gif.mp4";

const Signup = () => {
  return (
    <>
      <video className="absolute bottom-2 right-65" src={gif} autoPlay muted loop></video>
      <Header isLoggedIn={false} />

      <main className="flex justify-center pt-16">
        <SignupForm />
      </main>
    </>
  );
};

export default Signup;
