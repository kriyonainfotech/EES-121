import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	Dashboard,
	Layout,
	NftMarketplace,
	Users,
	CreateUser,
	EditUser,
	Profile,
	Register,
	PageNotFound,
	Login,
} from "./pages/index";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/dashboard",
			element: <Layout />,	
			children: [

				{
					path: "/dashboard",
					element: <Dashboard />,
				},
				{
					path: "nft-marketplace",
					element: <NftMarketplace />,
				},
				{
					path: "users",
					element: <Users />,
				},
				{
					path: "createUser",
					element: <CreateUser />,
				},
				{
					path: "editUser",
					element: <EditUser />,
				},
				{
					path: "profile",
					element: <Profile />,
				}
				,{
					path: "register",
					element: <Register/>,
				},
				,{
					path: "login",
					element: <Login/>,
				},
			],
		},
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "*",
			element: <PageNotFound />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
