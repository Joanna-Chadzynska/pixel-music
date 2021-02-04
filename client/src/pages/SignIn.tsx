import React from 'react';

export interface SignInProps {}

const SignIn: React.SFC<SignInProps> = () => {
	return (
		<div>
			<a
				href={`http://www.last.fm/api/auth/?api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&cb=http://localhost:3000/token`}>
				login
			</a>
		</div>
	);
};

export default SignIn;
