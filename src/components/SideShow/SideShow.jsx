import React from 'react';

const SideShow = () => {
	return (
		<header className="masthead" style={{ backgroundImage: 'url("assets/img/react.jpg")' }}>
			<div className="overlay" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<div className="site-heading">
							<h1>De4th Zone</h1>
							<span className="subheading">De4th Zone</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default SideShow;
