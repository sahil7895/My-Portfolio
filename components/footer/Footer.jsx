import React from "react";
import styles from "./Footer.module.css";
import Icon from "../icon/Icon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h1 className={styles.tagline}>Based in INDORE, working Worldwide</h1>
				<div className={styles.social}>
					<Icon url="https://www.instagram.com/official_sahil087/?igshid=NTc4MTIwNjQ2YQ%3D%3D" icon="instagram" />
					<Icon
						url="https://www.linkedin.com/in/designer-7x-432509251/"
						icon="linkedin"
					/>
					<Icon url="https://twitter.com/" icon="twitter" />
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Design By Sahil ©{new Date().getFullYear()}  </p>
			</div>
		</footer>
	);
};

export default Footer;
