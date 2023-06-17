import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../state/user/register/registerActions';
import Loader from '../../components/Loader/Loader';
import withRedirectIfLoggedIn from '../../hoc/withRedirectIfLoggedIn';
import { useNavigate } from 'react-router-dom';


const RegistrationPageComponent = () => {
	const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
	const loading = useSelector(state => state.registration.loading);
	const error = useSelector(state => state.registration.error);
	const user = useSelector(state => state.registration.user);

	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();

		const userData = {
			name,
            email,
            password,
			password_confirmation: confirmPassword,
        };

		dispatch(register(userData));
	};

	useEffect(() => {
		if(user?.access_token){
            window.location.href = '/';
        }
	}, [user, navigate]);

	return (
		<section className={`flex items-center justify-center min-h-screen px-6 md:px-0`}>
			<div className="w-full md:w-2/5 border shadow-xl py-6 px-10">
				<h1 className='text-center text-4xl pb-6'>News</h1>
				<h1 className='text-center text-2xl pb-6'>Create your account</h1>
				<form onSubmit={handleRegister}>
					<div className='py-3'>
						<label htmlFor="name">Name</label>
						<input
							id='name'
							className='border outline-0 block px-3 py-2 w-full rounded'
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<p className='text-sm text-red-500'>{error?.['name']?.join(' ')}</p>
					</div>
					<div className='py-3'>
						<label htmlFor="email">Email</label>
						<input
							id='email'
							className='border outline-0 block px-3 py-2 w-full rounded'
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<p className='text-sm text-red-500'>{error?.['email']?.join(' ')}</p>
					</div>
					<div className='py-3'>
						<label htmlFor="password">Password</label>
						<input
							id='password'
							className='border outline-0 block px-3 py-2 w-full rounded'
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p className='text-sm text-red-500'>{error?.['password']?.join(' ')}</p>
					</div>
					<div className='py-3'>
						<label htmlFor="confirm_password">Confirm Password</label>
						<input
							id='confirm_password'
							className='border outline-0 block px-3 py-2 w-full rounded'
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<p className='text-sm text-red-500'>{error?.['password_confirmation']?.join(' ')}</p>
					</div>
					<div className='py-3'>
						<button className='py-3 w-full text-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white 
							shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
							focus-visible:outline-indigo-600' type="submit">
							Register
						</button>
					</div>
				</form>
			</div>
			<Loader loading={loading} />
		</section>
	);
};

export default withRedirectIfLoggedIn(RegistrationPageComponent);
