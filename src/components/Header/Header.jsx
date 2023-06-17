import React, { useEffect, useState } from 'react';
import { Bars4Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../state/user/login/loginActions';
import Loader from '../Loader/Loader';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isLoggedIn = useSelector((state) => state?.user?.loggedIn);
	const loading = useSelector((state) => state?.user?.loading);
	const [navLinks, setNavLinks] = useState([]);
	const dispatch = useDispatch();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		let links = [
			{
				name: 'Home',
				path: '/',
			}
		]
		if(isLoggedIn){
			links = links.concat([
				{
					name: 'Feed',
					path: '/feed'
				}
			]);
		}else{
			links = links.concat([
				{
					name: 'Login',
					path: '/login'
				},
				{
					name: 'Register',
					path: '/register'
				}
			]);
		}
		setNavLinks(links);
	},[isLoggedIn]);

	const handleLogout = () => {
		dispatch(logout());
	}

	return (
		<header className="py-4 px-6 md:flex md:justify-between md:items-center shadow-xl">
			<div className="flex justify-between items-center">
				<div className="font-bold text-xl md:px-10">News</div>
				<button
					className="md:hidden focus:outline-none"
					onClick={toggleMenu}
				>
					<Bars4Icon className='w-8 h-8' />
				</button>
			</div>
			<nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
				{
					navLinks.map((link) => (
						<Link 
							key={link.path} 						
							to={link.path}
							className="block mt-4 md:inline-block md:mt-0 hover:text-gray-600 px-0 md:px-10"
						>
							{link.name}
						</Link>
					))
				}
				{
					isLoggedIn && 
					<button 
						className="block mt-4 md:inline-block md:mt-0 hover:text-gray-600 px-0 md:px-10"
						onClick={handleLogout}
					>
						Logout
					</button>
				}
			</nav>
			<Loader loading={loading} />
		</header>
	);
};

export default Header