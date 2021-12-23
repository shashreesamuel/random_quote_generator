import { quotes } from "./quotesdata";


export let getRandomQuote = () => {

	return( quotes[ Math.floor( Math.random() * ( quotes.length + 1 ) ) ][ "quote" ] + ' ~ ' + quotes[ Math.floor( Math.random() * ( quotes.length + 1 ) ) ][ "author" ] );
} 
