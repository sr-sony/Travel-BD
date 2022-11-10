import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import img from '../../assets/image/signup.webp'
import useTitle from '../../Title/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    useTitle('Registration')
    const {createUser} = useContext(AuthContext)
    const notify = () => toast("Register successfully");
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 flex-col gap-10 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt=''></img>
                </div>
                <div className="card flex-shrink-0 w-full  max-w-md shadow-2xl bg-base-100 justify-center mx-auto rounded-xl">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Your Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input  onClick={notify} className="btn btn-primary rounded-lg" type="submit" value="Sign Up" />
                            <ToastContainer></ToastContainer>
                        </div>
                    </form>
                    <p className='text-center mr-2 mb-10'>Already have an account? <Link className='text-orange-600 ml-3 text-xl font-extrabold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;