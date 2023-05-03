import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function Species() {
	const species = useSelector((state) => state.species);
	console.log("Species: ", species);
	return (
		<div>
			<button>
				<Link href={"/"}>Back to Home</Link>
			</button>
			<ul>{species && species.map((x) => <li key={x.name}>{x.name}</li>)}</ul>
			<div>Species</div>
		</div>
	);
}

export default Species;
