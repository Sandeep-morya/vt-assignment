import { useState, useEffect } from "react";
import { Topic } from "../types";
import { Checkbox, HStack, Text } from "@chakra-ui/react";

interface Props extends Topic {
	handleFilterList: (id: number, status: boolean) => void;
}

const TopicFilterItem = ({ ID, Name, handleFilterList }: Props) => {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		handleFilterList(ID, checked);
	}, [checked, ID]);
	return (
		<HStack>
			<Checkbox
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
			<Text>{Name}</Text>
		</HStack>
	);
};

export default TopicFilterItem;
