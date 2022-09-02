import React from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import TableComponent from "../../Components/MadeComponent/TableComponent";

interface LessonsDashboardProps {}


const data= [{
    
}]

const LessonsDashboard: React.FC<LessonsDashboardProps> = ({}) => {
	return (
		<DashboardLayout>
			<TableComponent/>
		</DashboardLayout>
	);
};

export default LessonsDashboard;
