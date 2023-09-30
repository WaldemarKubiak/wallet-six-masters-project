import styles from "./NavigationCurrency.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationCurrency({ onClickCurrency }) {
	return (
		<div className={styles.navigation_currency}>
			<NavLink to="/home">
				<div className={styles.navigation_currency__item}>
					<AiFillHome />
				</div>
			</NavLink>
			<NavLink to="/statistics">
				<div className={styles.navigation_currency__item}>
					<BiStats />
				</div>
			</NavLink>
			<NavLink to="/currency" onClick={onClickCurrency}>
				<div className={styles.navigation_currency__item_blue}>
					<PiCurrencyDollarSimpleBold />
				</div>
			</NavLink>
		</div>
	);
}

NavigationCurrency.propTypes = {
	onClickCurrency: PropTypes.any,
};

export default NavigationCurrency;
