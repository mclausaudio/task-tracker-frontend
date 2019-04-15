import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
const Footer = () => {
	return (
		<footer class="pt-4 my-md-5 pt-md-5 border-top">
			<div class="row w-100 d-flex justify-content-center">
				<div class="col-md-6 col-sm-12 text-center">
					<FaProjectDiagram />
					<h5>Task Tracker</h5>
					<h6>Created by Michael Claus</h6>
					<small class="d-block mb-3 text-muted">© 2019</small>
				</div>
				<div class="col-md-6 col-sm-12 text-center">
					<h5>About the developer</h5>
					<ul class="list-unstyled text-small">
						<li>
							<a
								class="text-muted"
								href="https://github.com/mclausaudio"
								target="_blank"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								class="text-muted"
								href="https://www.linkedin.com/in/mclausaudio/"
								target="_blank"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								class="text-muted"
								href="mailto:mclausaudio@gmail.com"
							>
								Email (mclausaudio@gmail.com)
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
