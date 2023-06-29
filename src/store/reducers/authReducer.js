const initialState = {
	isLoggedIn: true,
	token: 123,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default authReducer;
