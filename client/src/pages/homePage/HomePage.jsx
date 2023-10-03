import HomeScreen from '../../components/HomeScreen/HomeScreen';
import FormSignIn from '../../components/FormSignIn/FormSignIn';
import Header from '../../components/Header/Header';
import { useAuth } from '../../hook/useAuth/useAuth';

const HomePage = () => {
	const { isLoggedIn } = useAuth();

	return (
		<HomeScreen>
			{isLoggedIn && <Header />}
			<FormSignIn />
		</HomeScreen>
	);
};

export default HomePage;
