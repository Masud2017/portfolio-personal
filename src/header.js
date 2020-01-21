import React from 'react';
import 'logo.svg';
import './header.css';


class Header extends React.Component {

	render() {
		return (
			<div>
				<ul class = "nav" id = "top">
					<a class = "nav nav-brand ml-sm-2" href = "#">
						<img src = {require('./logo.svg')} width = "250px" height = "100px" alt = "sorry something went wrong"/>
					</a>
					<li class ="nav-item mt-sm-4 ml-auto"><a href= "#" class = "nav-link btn btn-outline-secondary mr-sm-2">HOME</a></li>
					<li class ="nav-item mt-sm-4"><a href= "#skills" class = "nav-link btn btn-outline-secondary mr-sm-2">SKILLS</a></li>
					<li class ="nav-item mt-sm-4"><a href= "#portfolio" class = "nav-link btn btn-rounded btn-outline-secondary mr-sm-2">PORTFOLIO</a></li>
				</ul>
				<br></br>
				<div class = "row">
					
					<div class = "col-sm-2">
						<img src = {require('./content/header/profile.jpg')} class = "img-responsive ml-sm-2 rounded-circle mx-auto d-flex" alt = "" width = "150px" height = "150px" />
					</div>
					
					<div class = "col-sm-0">
						<div name = "for-profile" class = "profile-bar"></div>
					</div>
					
					<div class = "col-sm-4 mt-sm-2">
						<strong>Name:</strong> Md.Masud karim<br></br><br></br>
						<strong>Designation:</strong> Full stack developer<br></br><br></br>
						<strong>Email:</strong> <a href = "mailto:msmasud578@gmail.com">msmasud578@gmail.com</a>
					</div>

				</div>

			</div>
			);

	}
}
export default Header
