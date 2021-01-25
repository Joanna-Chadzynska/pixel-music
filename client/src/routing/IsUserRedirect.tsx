import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export interface IsUserRedirectProps {
	token?: any;
	loggedInPath: string;
	path: string;
	exact?: boolean;
}

const IsUserRedirect: React.SFC<IsUserRedirectProps> = ({
	children,
	loggedInPath,
	token,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={() => {
				if (!token) {
					return children;
				}

				if (token) {
					return (
						<Redirect
							to={{
								pathname: loggedInPath,
							}}
						/>
					);
				}

				return null;
			}}
		/>
	);
};

export default IsUserRedirect;
