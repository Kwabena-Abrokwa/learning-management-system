import React from "react";

interface TableComponentProps {
	name: string;
	title: string;
	pdf: string;
}

const TableComponent: React.FC<TableComponentProps> = ({
	name,
	title,
	pdf,
}) => {
	return (
		<tbody className="divide-y divide-gray-200">
			<tr>
				<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
					{name}
				</td>
				<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
					{title}
				</td>
				<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
					<a
						className="text-green-500 hover:text-green-700"
						href={pdf}
						target={"_blank"}
					>
						Start lesson
					</a>
				</td>
			</tr>
		</tbody>
	);
};

export default TableComponent;
