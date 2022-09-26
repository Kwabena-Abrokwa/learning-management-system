import React from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import TableComponent from "../../Components/MadeComponent/TableComponent";
import { useParams, useLocation } from "react-router-dom";

interface LessonsDashboardProps {}

const data = [
	{
		id: 1,
		course_code: "1004",
		name: "Your Best Life Book 1",
		title: "This is the first book slide of JavaScript Mastery",
		pdf: require("../../Assets/multimedia/LESSION_1.pdf"),
	},
	{
		id: 2,
		course_code: "1004",
		name: "Your Best Life Book 2",
		title: "This is the second book slide of JavaScript Mastery",
		pdf: require("../../Assets/multimedia/LESSION_1.pdf"),
	},
	{
		id: 3,
		course_code: "1004",
		name: "Your Best Life Book 3",
		title: "This is the third book slide of JavaScript Mastery",
		pdf: require("../../Assets/multimedia/LESSION_1.pdf"),
	},
];

const LessonsDashboard: React.FC<LessonsDashboardProps> = () => {
	const { id } = useParams();
	const states = useLocation();
	const datas: any = states.state;

	const books: any = data.filter((items) => items.course_code === id);

	return (
		<DashboardLayout>
			<div>
				<h1 className="text-center text-4xl py-5 font-bold">{datas.name}</h1>
				<div className="flex flex-col">
					<div className="overflow-x-auto">
						<div className="p-1.5 w-full inline-block align-middle">
							<div className="overflow-hidden border rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
											>
												Name
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
											>
												Description
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
											>
												Start lessons
											</th>
										</tr>
									</thead>
									{books &&
										books.map((item: any, n: number) => (
											<TableComponent
												name={item.name}
												title={item.title}
												pdf={item.pdf}
												key={n}
											/>
										))}
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default LessonsDashboard;
