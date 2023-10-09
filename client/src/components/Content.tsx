import { Flex, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { Course } from "../types";

import Pagination from "./Pagination";
import CourseCard from "./CourseCard";

interface Props {
	courses: Course[];
	topicIds: number[];
	getCourses: (page: number, topicIds: number[]) => void;
}

const Content = ({ courses, getCourses, topicIds }: Props) => {
	const [courseList, setCoursesList] = useState(courses);
	const [page, setPage] = useState(1);
	const [selectValue, setSelectValue] = useState("asc");

	const sortCourses = () => {
		const sortedCourses = [...courses];

		if (selectValue === "asc") {
			sortedCourses.sort((a, b) => a.CourseName.localeCompare(b.CourseName));
		} else if (selectValue === "new") {
			sortedCourses.sort((a, b) => b.CreatedON.localeCompare(a.CreatedON));
		}

		setCoursesList(sortedCourses);
	};

	useEffect(() => {
		getCourses(page, topicIds);
	}, [getCourses, page]);

	useEffect(() => {
		setCoursesList(courses);
	}, [courses]);

	useEffect(() => {
		sortCourses();
	}, [selectValue]);

	return (
		<Stack flex="1">
			<Flex justifyContent={"flex-end"}>
				<Select
					maxW={"max-content"}
					placeholder="Select option"
					value={selectValue}
					onChange={(e) => setSelectValue(e.target.value)}>
					<option value="asc">Ascending</option>
					<option value="new">Newest</option>
				</Select>
			</Flex>
			<Stack>
				{courseList.map((course) => (
					<CourseCard key={course.CourseID} {...course} />
				))}
			</Stack>
			<Pagination currentPage={page} onPageChange={(page) => setPage(page)} />
		</Stack>
	);
};

export default Content;
