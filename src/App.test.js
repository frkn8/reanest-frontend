import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
test("test Side bar render", () => {
	render(<Sidebar />);
	const linkElement = screen.getByText(/View Profile/i);
	expect(linkElement).toBeInTheDocument();
});
test("test Dashboard Content render", () => {
	render(<DashboardContent />);
	const linkElement = screen.getByText(/Withdraw/i);
	expect(linkElement).toBeInTheDocument();
});
