import React from "react";
import { NextPage } from "next";

const MainPage: NextPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
			<div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 space-y-6">
				<h1 className="text-2xl font-bold text-center text-gray-800">
					NextAuth.js Authentication
				</h1>
				<p className="text-gray-600 text-center">
					Please log in to access your account.
				</p>
				<form className="space-y-4">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="any"
							id="email"
							className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="any"
							id="password"
							className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your password"
							required
						/>
					</div>
					<div>
						<button
							type="any"
							className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
						>
							Login
						</button>
					</div>
				</form>
				<p className="text-center text-gray-600">
					Don't have an account?{' '}
					<a href="#" className="text-blue-600 hover:underline">
						Sign up
					</a>
				</p>
				<div className="space-y-2">
					<h2 className="text-lg font-semibold text-gray-800">Server Side Rendering</h2>
					<p className="text-gray-700 leading-relaxed">
						This site explicitly uses the <strong>getServerSession()</strong>{" "}
						method in combination with a Prisma client extension which allows us to
						create a custom query to retrieve the current user from the session:{" "}
						<strong>db.client.current()</strong>.
					</p>
					<p className="text-gray-700 leading-relaxed">
						Using <strong>getServerSession()</strong> is the recommended approach if
						you need to support Server Side Rendering with authentication. The
						advantage of Server Side Rendering is this page does not require client
						side JavaScript. This means it will work with JavaScript disabled and
						will also be compatible with web crawlers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainPage;




