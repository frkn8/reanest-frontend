import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";

import axios from "axios";
const Sidebar = ({ isopen }) => {
	const [menu, setMenu] = useState(null);
	const [userinfo, setUserinfo] = useState({
		name: "",
		id: { title: "", value: "" },
		picture: "",
	});
	useEffect(() => {
		axios
			.get("https://601d848abe5f340017a19c29.mockapi.io/dashboard")
			.then((res) => {
				setUserinfo(res.data.user);
			});
		axios
			.get("https://601d848abe5f340017a19c29.mockapi.io/menu")
			.then((res) => {
				setMenu(res.data);
			});
	}, []);
	return (
		<div className={"Sidebar" + (isopen ? " " : " hide")}>
			<div className="userPart">
				<div className="userContainer">
					<img
						className="userImage"
						src="https://i.ibb.co/swkR93p/bramdejager-600x600.png"
						alt="user"
					/>
					{/*userinfo ? userinfo.picture : ""*/}

					<div className="userInfo">
						<div className="userName">{userinfo ? userinfo.name : ""}</div>
						<div className="userId">
							{userinfo ? userinfo.id.title : " "}:
							{userinfo ? userinfo.id.value : " "}
						</div>
					</div>
				</div>
				<div className="buttonContainer">
					<button className="viewProfile">View Profile</button>
				</div>
			</div>
			<div className="Icons">
				{menu
					? menu.map((item, i) => (
							<div
								className="Icon"
								key={item.name + i}
								onClick={() => {
									window.history.pushState({}, undefined, item.link);
								}}
							>
								<div className="IconPart">
									<FontAwesomeIcon icon={faHospital} size="2x" />
								</div>
								<div className="IconName">{item.name}</div>
							</div>
					  ))
					: " "}
			</div>
		</div>
	);
};

export default Sidebar;
