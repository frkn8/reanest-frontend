import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

const Dashboard = () => {
	const [isopen, setIsopen] = useState(true);
	return (
		<div className="Dashboard">
			<div className="sideIcon">
				<div onClick={(e) => setIsopen(!isopen)}>
					<FontAwesomeIcon icon={faBars} size="2x" />
				</div>

				<div
					className={"close" + (isopen ? " " : " hidden")}
					onClick={(e) => setIsopen(false)}
				>
					X
				</div>
			</div>
			<div className="pageContainer">
				<Sidebar isopen={isopen}></Sidebar>
				<DashboardContent></DashboardContent>
			</div>
		</div>
	);
};

export default Dashboard;
