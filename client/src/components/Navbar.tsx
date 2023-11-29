import '../index.css'

const Navbar = () => {
  return (
    <div className="bg-slate-300 flex justify-around py-4 items-center">
        <h1 className='text-xl'>EpicDoHub</h1>
        <div className="login-container flex gap-3">
            <div className="button">sign in</div>
            <div className="button">sign up</div>
        </div>
    </div>
  )
}

export default Navbar