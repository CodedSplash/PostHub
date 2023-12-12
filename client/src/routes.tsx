import RedirectAuth from './hok/RedirectAuth'
import RequireAuth from './hok/RequireAuth'
import IRoutes from './models/Routes.model'
import CreatePostPage from './pages/CreatePostPage/CreatePostPage'
import EditPostPage from './pages/EditPostPage/EditPostPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PostPage from './pages/PostPage/PostPage'
import PostsPage from './pages/PostsPage/PostsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import UserPage from './pages/UserPage/UserPage'
import UsersPage from './pages/UsersPage/UsersPage'

const routes: IRoutes[] = [
	{
		element: <HomePage />,
		index: true,
	},
	{
		path: 'login',
		element: (
			<RedirectAuth>
				<LoginPage />
			</RedirectAuth>
		),
	},
	{
		path: 'register',
		element: (
			<RedirectAuth>
				<RegisterPage />
			</RedirectAuth>
		),
	},
	{
		path: 'posts',
		element: (
			<RequireAuth>
				<PostsPage />
			</RequireAuth>
		),
	},
	{
		path: 'posts/create',
		element: (
			<RequireAuth>
				<CreatePostPage />
			</RequireAuth>
		),
	},
	{
		path: 'posts/:id',
		element: (
			<RequireAuth>
				<PostPage />
			</RequireAuth>
		),
	},
	{
		path: 'posts/:id/edit',
		element: (
			<RequireAuth>
				<EditPostPage />
			</RequireAuth>
		),
	},
	{
		path: 'users',
		element: (
			<RequireAuth>
				<UsersPage />
			</RequireAuth>
		),
	},
	{
		path: 'users/:id',
		element: (
			<RequireAuth>
				<UserPage />
			</RequireAuth>
		),
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]

export default routes
