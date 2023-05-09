import React from "react"
import { Container,Row ,Col } from "react-bootstrap"
import { Github, Instagram ,Link } from "react-bootstrap-icons"
const Footer = () => <footer md={1}>
        <h3 className="text-center text-light">Thank you for visiting my website.</h3>
        <div className="text-center text-light">
        <h4>Follow My <a href="https://www.instagram.com/dimasrdika/" className="text-decoration-none text-danger">Social</a><a href="https://github.com/dimasrdika" className="text-decoration-none text-danger">Media</a></h4>
        <Github className="text-danger fs-4 m-2"></Github><Instagram className="text-danger fs-4 m-2"></Instagram>
        </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
    <div className="footer-copyright text-center py-3 text-light">Made with ❤ by
        <a href="https://www.instagram.com/dimasrdika/ " className='text-decoration-none text-danger'> Dimas Rachmadika</a>
    </div>
</footer>

export default Footer