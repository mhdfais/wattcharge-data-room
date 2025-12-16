
import SigninForm from '../components/SigninForm'
import gif from "../assets/gif.mp4";
import Header from '../components/Header';

const Signin = () => {
  return (
    <>
      <video className="absolute bottom-2 right-65" src={gif} autoPlay muted loop></video>
      <Header isLoggedIn={false} />

      <main className="flex justify-center pt-16">
        <SigninForm />
      </main>
    </>
  )
}

export default Signin