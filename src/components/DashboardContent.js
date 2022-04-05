import React, { useState, useEffect } from "react";
import "./DashboardContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell,
	faCircleDot,
	faAddressBook,
} from "@fortawesome/free-regular-svg-icons";
import Carousel from "react-elastic-carousel";
import axios from "axios";
const DashboardContent = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1, pagination: false },
		{ width: 450, itemsToShow: 3, itemsToScroll: 1, pagination: false },
		{ width: 850, itemsToShow: 4, pagination: false },
		{ width: 1150, itemsToShow: 5, itemsToScroll: 1, pagination: false },
		{ width: 1450, itemsToShow: 6, pagination: false },
		{ width: 1750, itemsToShow: 6, pagination: false },
	];
	const [dashboard, setDashboard] = useState(null);
	useEffect(() => {
		axios
			.get("https://601d848abe5f340017a19c29.mockapi.io/dashboard")
			.then((res) => {
				setDashboard(res.data);
			});
	}, []);

	return (
		<div className="DashContent">
			<div className="walletContainer">
				<div className="myWallet">
					<div className="title_date">
						<h4>{dashboard?.wallet.title}</h4>
						<p>Feb2 2021</p>
					</div>
					<div>
						<p>{dashboard?.wallet.balance.title}</p>
						<h1>
							{dashboard?.wallet.balance.currency}{" "}
							{dashboard?.wallet.balance.value}
						</h1>
					</div>
					<div className="walletIcons">
						<div className="walletIcon">
							<div className="iconCover">
								<FontAwesomeIcon icon={faBell} size="2x" />
							</div>
							<h6>Withdraw</h6>
						</div>
						<div className="walletIcon">
							<div className="iconCover">
								<FontAwesomeIcon icon={faBell} size="2x" />
							</div>

							<h6>Fund Wallet</h6>
						</div>
						<div className="walletIcon">
							<div className="iconCover">
								<FontAwesomeIcon icon={faBell} size="2x" />
							</div>
							<h6>Transactions</h6>
						</div>
					</div>
				</div>
				<div className="loan">
					<p>{dashboard?.loan.title}</p>
					<button
						className="loanBtn"
						onClick={() =>
							window.history.pushState({}, undefined, dashboard?.loan.cta.link)
						}
					>
						{dashboard?.loan.cta.title}
					</button>
				</div>
			</div>
			<div className="paymentsContainer">
				<div className="paymentTitle">
					{dashboard?.billspayment.title}
					<span>i</span>
				</div>
				<div className="paymentItems">
					<Carousel breakPoints={breakPoints}>
						{dashboard ? (
							dashboard.billspayment.items.map((item) => (
								<div className="paymentItem" key={item.id + item.title}>
									<FontAwesomeIcon
										icon={faAddressBook}
										size="3x"
									></FontAwesomeIcon>
									<p>{item?.title}</p>
								</div>
							))
						) : (
							<div>Loading ..</div>
						)}
					</Carousel>
				</div>
			</div>

			<div className="transItems">
				{dashboard?.transactions.items.map((item) => (
					<div className="TransItem" key={item.id + item.title}>
						<div>
							<img
								className="transImage"
								src={
									item.image == ""
										? "http://www.clker.com/cliparts/h/z/Z/5/f/x/100px-coffee-cup-md.png"
										: item.image
								}
								alt="img"
							/>
						</div>
						<div className="transTitle">{item.title}</div>
						<div className="transCatg">{item.category}</div>
						<div className="transDate">{item.date}</div>
						<div className="transStat">{item.status}</div>
						<div className="transPrice">
							<span>{item.currency}</span> {item.price}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardContent;
