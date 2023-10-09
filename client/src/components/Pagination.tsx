// Pagination.js
import React from "react";
import { Box, ButtonGroup, Button } from "@chakra-ui/react";
interface Props {
	currentPage: number;
	totalPages?: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages = 7, onPageChange }: Props) => {
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	const renderPageButtons = () => {
		const buttons = [];
		for (let page = 1; page <= totalPages; page++) {
			buttons.push(
				<Button
					key={page}
					colorScheme={currentPage === page ? "blue" : "gray"}
					onClick={() => handlePageChange(page)}>
					{page}
				</Button>,
			);
		}
		return buttons;
	};

	return (
		<Box mt="4">
			<ButtonGroup size="sm" isAttached>
				<Button
					isDisabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}>
					Previous
				</Button>
				{renderPageButtons()}
				<Button
					isDisabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}>
					Next
				</Button>
			</ButtonGroup>
		</Box>
	);
};

export default Pagination;
