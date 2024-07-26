import React, { useContext } from "react";
import Nav from "./Nav";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { AppContext } from "../../Context/AppContext";

export default function Navs({ isOpen }) {
    const { resetTransactions } = useContext(AppContext);
	const { resetBudget } = useContext(AppContext);

    const handleResetTransactions = () => {
        resetTransactions();
    };
	const handleResetBudget = () => {
		resetBudget();
	};


    return (
        <ul className="navs">
            <Nav icon={<HomeIcon />} link="Home" isOpen={isOpen} />
            <Nav icon={<BarChartIcon />} link="Analytics" isOpen={isOpen} />
            <Nav
                icon={<RotateLeftIcon />} // Use the reset icon
                link="Reset Transactions"
                isOpen={isOpen}
                onClick={handleResetTransactions} // Call handleResetTransactions when clicked
            />
			<Nav
                icon={<RotateLeftIcon />} // Use the reset icon
                link="Reset Budget"
                isOpen={isOpen}
                onClick={handleResetBudget} // Call handleResetTransactions when clicked
            />
        </ul>
    );
}
