import "@/styles/globals.css";
import { useEffect } from "react";
import store, { setSpecies } from "@/store/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps, species }) {
	return (
		<ReduxStoreProvider>
			<Component {...pageProps} />;
		</ReduxStoreProvider>
	);
}

const ReduxStoreProvider = ({ children }) => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://swapi.dev/api/species");
			const data = await res.json();

			store.dispatch(setSpecies(data.results));
		};

		fetchData();
	}, []);
	return <Provider store={store}>{children}</Provider>;
};

// MyApp.getInitialProps = async (context) => {
// 	const res = await fetch("https://swapi.dev/api/species");
// 	const data = await res.json();

// 	console.log(data.results);
// 	console.log("in side getInitialProps");
// 	// store.dispatch(setSpecies(data));

// 	// const appProps = await App.getInitialProps(context);
// 	return {
// 		species: data.results,
// 	};
// };
