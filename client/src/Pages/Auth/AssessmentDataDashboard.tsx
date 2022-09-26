import React from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import TableComponent from "../../Components/MadeComponent/TableComponent";
import { useParams, useLocation } from "react-router-dom";
import { AssessmentData } from "../../Data/AssessmentData";

interface AssessmentDataDashboardProps {}

const AssessmentDataDashboard: React.FC<AssessmentDataDashboardProps> = () => {
	const { id } = useParams();
	const states = useLocation();
	const datas: any = states.state;

	const books: any = AssessmentData.filter(
		(items: any) => items.course_code === id
	);

	return (
		<DashboardLayout>
			<div>
				<div className="flex justify-between px-5 items-center">
					<h1 className="text-4xl py-5 font-bold">
						{datas.name} assessments
					</h1>
					<div className="w-60"></div>
				</div>
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
												Download file
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
												buttonText={"Download"}
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

export default AssessmentDataDashboard;
