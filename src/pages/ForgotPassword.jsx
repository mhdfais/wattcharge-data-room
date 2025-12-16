import gif from "../assets/gif.mp4";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Header from "../components/Header";

const ForgotPassword = () => {
  return (
    <>
      <video className="absolute bottom-2 right-65" src={gif} autoPlay muted loop></video>
      <Header isLoggedIn={false} />

      <main className="flex justify-center pt-16">
        <ForgotPasswordForm />
      </main>
    </>
  )
}

export default ForgotPassword