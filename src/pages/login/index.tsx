const Login = () => {
    return (
        <>
            <div className="border-2  drop-shadow-xl rounded-lg p-8">
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div className="flex justify-center mt-4">
                    Sign in with Your ID
                </div>
                <div className="mt-8">
                    <input type="email" placeholder="Email" className="w-80 p-2"></input>
                </div>
                <div>
                    <input type="password" placeholder="Password" className="w-80 p-2 mt-2"></input>
                </div>
                <div className="mt-8 flex justify-center cursor-pointer">
                    <button className="border-2 w-24 h-8" >Login</button>
                </div>
                <div className="mt-4 flex justify-center">
                    Create new account
                </div>
            </div>
        </>
    )
}

export default Login