import React,{useState,userEffect} from 'react';
import './body.css';
class Body extends React.Component {
	
	render() {
		return (
			<div>
			<div class = "connect-me z-depth-2" name = "connect-me">
				<div class = "text-center mt-sm-1"><a href = "https://www.facebook.com/forbidden.masud" target = "_blank"><img src = {require('./content/facebook.svg')} width = "35px" height = "35px" /></a></div>
				<div class = "text-center mt-sm-1"><a href = "https://twitter.com/forbiddenmasud" target = "_blank"><img  src = {require('./content/twitter.png')} width = "35px" height = "35px" /></a></div>
				<div class = "text-center mt-sm-1"><a href = "https://www.behance.net/tanvirrahab4f1" target = "_blank"><img  src = {require('./content/behance.png')} width = "35px" height = "35px" /></a></div>
				<div class = "text-center mt-sm-1 mb-sm-1"><a href = "https://www.linkedin.com/in/md-masud-karim-1225b615b/" target = "_blank"><img  src = {require('./content/linkedin.png')} width = "35px" height = "35px" /></a></div>
			</div>
			<h3 class = "text-black-50 text-center" id = "skills">SKILLS</h3>
			<hr></hr>
				<div class = "row">
					<div class = "col-sm-4">
						<ul class = "text-center unordered-list">
							<li><img src = {require('./content/monitor.ico')} width = "90px" height = "90px" alt = ""/><br></br><strong>Front-end</strong></li>
							<li>HTML</li>
							<li>CSS3</li>
							<li>JAVASCRIPT</li>
							<li>BOOSTRAP4</li>
							<li>JQUERY</li>
							<li>REACTJS</li>
						</ul>
					</div>
					<div class = "col-sm-4">
						<ul class = "text-center unordered-list">
							<li><img src = {require('./content/backend.ico')} width = "90px" height = "90px"/><br></br><strong>BACK-END</strong></li>
							<li>PHP</li>
							<li>LARAVEL</li>
							<li>PYTHON3</li>
							<li>DJANGO</li>
							<li>MYSQL</li>
						</ul>
					</div>
					<div class = "col-sm-4">
						<ul class = "text-center unordered-list">
							<li><img src = "http://dev.pmi.co.uk/wp-content/uploads/2019/02/Transform-your-strategy-icon_orange.png" width = "90px" height = "90px"/><br></br><strong>OTHERS</strong></li>
							<li>ILLUSTRATOR</li>
							<li>PHOTOSHOP</li>
							<li>VIDEO SCRIBE (ANIMATION)</li>
						</ul>
					</div>
				</div>
				
				<h3 class = "text-center text-black-50" id = "portfolio">PORTFOLIO</h3>
				<div class = "row">
					<div class = "col-sm-4 z-depth-2">
						<div class = "card">
							<div class = "card-header hover-port fog">
								<img src = "https://images.template.net/wp-content/uploads/2015/07/Blank-HTML5-Template-788x551.jpg" class = "img-thumbnail" width = "350px" height = "250px" alt = ""/></div>
							</div>
							<div class = "card-body">
								<strong>Name: </strong> Invoice-inspector1<br></br>
								<strong>App-type: </strong>Web app<br></br>
								<strong>App-type-seg: </strong>SPA
							</div>
							<div class = "card-footer">
								<div class = "text-center">
									<a href = "#" target = "_blank" class = "btn btn-rounded btn-secondary">VISIT</a>
								</div>
 							</div>
						</div>
					<div class = "col-sm-4 z-depth-2">
						<div class = "card">	
							<div class = "card-header fog hover-port">
								<img src = "https://images.template.net/wp-content/uploads/2015/07/Blank-HTML5-Template-788x551.jpg" class = "img-thumbnail" width = "350px" height = "250px" alt = ""/>
							</div>
							<div class = "card-body">
								<strong>Name: </strong> Invoice-inspector2<br></br>
								<strong>App-type: </strong>Web app<br></br>
								<strong>App-type-seg: </strong>SPA
							</div>
							<div class = "card-footer">
							<div class = "text-center"><a href = "#" class = "btn btn-secondary" target = "_blank">VISIT</a></div>
							</div>
						</div>
					</div>
					<div class = "col-sm-4 z-depth-2">
						<div class = "card">
							<div class = "card-header fog hover-port">
									<img src = "https://images.template.net/wp-content/uploads/2015/07/Blank-HTML5-Template-788x551.jpg" class = "img-thumbnail" width = "350px" height = "250px" alt = ""/>
							</div>
							<div class = "card-body">
								<strong>Name: </strong> Invoice-inspector3<br></br>
								<strong>App-type: </strong>Web app<br></br>
								<strong>App-type-seg: </strong>SPA
							</div>
							<div class = "card-footer">
								<div class = "text-center">
									<a href = "#" target ="_blank" class = "btn btn-secondary">VISIT</a>
								</div>
							</div>
						</div>
					</div>
				<div class = "connect-me-2 z-depth-2 text-center"><a href = "#top"><img src = {require('./content/top.png')} height = "30px" widht = "90px"/><br></br><h6 class = "text-white">Gto top</h6></a></div>
				</div>
			</div>
			);
	}
}
export default Body;
