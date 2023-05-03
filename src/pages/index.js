import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
	const species = useSelector((state) => state.species);
	return (
		<>
			<div>
				Hello from Index
				<button>
					<Link href={"/species"}>Species list</Link>
				</button>
				{species && species.map((x) => <li key={x.name}>{x.classification}</li>)}
			</div>
		</>
	);
}
