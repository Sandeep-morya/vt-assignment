import { Flex } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import Filters from "../components/Filters";
import Content from "../components/Content";
import { Course } from "../types";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9000/" });

const HomePage = () => {
	const [courses, setCourses] = useState<Course[]>([]);
	const [topicIds, setTopicIds] = useState<number[]>([]);
	// const [loading,setLoading] = useState(false)

	const getCourses = useCallback(async (page: number, topics: number[]) => {
		if (!topics) {
			return;
		}
		try {
			const { data } = await API.get("/courses", {
				params: { page, topicIds: topics.toString() },
			});
			setCourses(data);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		getCourses(1, topicIds);
	}, [getCourses, topicIds]);

	console.log(topicIds);

	if (courses.length < 1 || !courses) {
		return <></>;
	}

	return (
		<Flex mt="50px" gap={"2rem"}>
			<Filters list={topicIds} setList={setTopicIds} />
			<Content {...{ courses, getCourses, topicIds }} />
		</Flex>
	);
};

export default HomePage;
