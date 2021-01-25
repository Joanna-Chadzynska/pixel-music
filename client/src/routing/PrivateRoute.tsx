import React, { Children } from 'react';
import { Redirect, Route } from 'react-router-dom';

export interface PrivateRouteProps {
	component?: any;
	token?: any;
	path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	token,
	children,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (token) {
					return Children;
				}
				if (!token) {
					return (
						<Redirect
							to={{
								pathname: '/signin',
								state: { from: location },
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default PrivateRoute;
