import React from "react";
import { Course } from "../types";
import {
	Box,
	Heading,
	Text,
	HStack,
	Badge,
	Avatar,
	Flex,
} from "@chakra-ui/react";

const CourseCard = (props: Course) => {
	const { CourseName, SpeakerName, TopicName, PriceRange, CreatedON } = props;

	return (
		<Flex w="100%" alignItems={"center"}>
			<Avatar size={"2xl"} />
			<Box
				flex="1"
				borderWidth="1px"
				borderRadius="lg"
				p="4"
				m="4"
				boxShadow="md">
				<Heading as="h2" size="md" mb="2">
					{CourseName}
				</Heading>
				<Text fontSize="sm" color="gray.600" mb="2">
					Speaker: {SpeakerName}
				</Text>
				<Text fontSize="sm" mb="2">
					Topic: {TopicName}
				</Text>
				<HStack spacing="1" mb="2">
					<Badge colorScheme="green">{PriceRange} USD</Badge>
					<Badge colorScheme="blue">
						{new Date(CreatedON).toLocaleString()}
					</Badge>
				</HStack>
			</Box>
		</Flex>
	);
};

export default CourseCard;
