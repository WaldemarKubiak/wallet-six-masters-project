import { useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useSelector } from 'react-redux';

import { selectIsRefreshing } from '../../redux/user/userSelectors';

export const LoaderSpinner = () => {
	const isLoading = Loading.pulse({
		svgColor: 'red',
		svgSize: '200px',
	});

	const isRefreshing = useSelector(selectIsRefreshing);

	useEffect(() => {
		isLoading;
		setTimeout(() => {
			Loading.remove();
		}, isRefreshing);
	}, [isLoading, isRefreshing]);

	return <>{isLoading}</>;
};
