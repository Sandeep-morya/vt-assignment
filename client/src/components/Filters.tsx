import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Stack,
} from "@chakra-ui/react";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { Topic } from "../types";
import TopicFilterItem from "./TopicFilterItem";

interface Props {
	list: number[];
	setList: Dispatch<SetStateAction<number[]>>;
}

const Filters = ({ setList }: Props) => {
	const [topics, setTopics] = useState<Topic[]>([]);

	const handleFilterList = (id: number, status: boolean) => {
		if (status) {
			setList((prev) => [...prev, id]);
		} else {
			setList((prev) => prev.filter((x) => x !== id));
		}
	};

	useEffect(() => {
		axios
			.get("http://localhost:9000/topics")
			.then(({ data }) => setTopics(data));
	}, []);

	if (setTopics.length < 1 || !setTopics) {
		return <></>;
	}

	return (
		<Stack w="360px" position={"sticky"} top={0}>
			<Accordion defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Topic
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{topics.map((topic) => (
							<TopicFilterItem
								key={topic.ID}
								{...topic}
								handleFilterList={handleFilterList}
							/>
						))}
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Price
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

export default Filters;
