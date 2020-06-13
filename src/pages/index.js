import React from "react"
import Layout from "../components/layout/layout"
import logo from "../../static/logo.svg"
import mockUp from "../../static/illustration-mockups.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"



export default function Home({data}) {
  return (
    <div className="container">
        <img src={logo} alt="logo"></img>
      <div className="flex">
				<div>
					<img src={mockUp} alt="illustration" />
				</div>

				<div>
					<h1>Build The Community Your Fans Will Love</h1>
					<p>
						Huddle re-imagines the way we build communities. You have a voice,
						but so does your audience. Create connections with your users as you
						engage in genuine discussion.
					</p>
					<button>Register</button>
				</div>
			</div>

      <ul className="social-media">
				<li>
					<a href="#">
						<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					</a>
				</li>
				<li>
					<a href="#">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
					</a>
				</li>
			</ul>
      </div>
  )
}