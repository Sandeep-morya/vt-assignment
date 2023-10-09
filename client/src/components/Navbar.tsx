import {
	Avatar,
	Divider,
	Flex,
	HStack,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	Text,
} from "@chakra-ui/react";
import { PiMagnifyingGlass } from "react-icons/pi";

const Navbar = () => {
	return (
		<Flex justify={"space-between"} align={"center"}>
			<Heading size="md" display={"flex"} gap="0.5rem" variant={""}>
				<Text color={"royalblue"}>Intelligent</Text>
				<Text as="span" color="orange">
					World
				</Text>
			</Heading>
			<InputGroup maxW={"600px"} borderRadius={"full"} overflow={"hidden"}>
				<InputLeftAddon
					backgroundColor={"orange"}
					color="white"
					children="Catalog"
				/>
				<Input placeholder="search by topic or price" />
				<InputRightAddon>
					<HStack>
						<PiMagnifyingGlass /> <Text>Search</Text>
					</HStack>
				</InputRightAddon>
			</InputGroup>

			<HStack>
				<Text> MY LEARNING</Text>
				<Divider
					orientation="vertical"
					h="20px"
					borderWidth={"1px"}
					borderColor={"black"}
				/>
				<Avatar size="sm" />
			</HStack>
		</Flex>
	);
};

export default Navbar;
