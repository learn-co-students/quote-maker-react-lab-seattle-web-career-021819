export default (state = [], action) => {
  let index;
  let quote;
  let updatedQuote;
  let newVotes;

  switch (action.type) {
    
    case "ADD_QUOTE":
      return [...state, action.quote];
    
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      if (!quote.votes) {
        newVotes = 1;
      } else {
        newVotes = quote.votes + 1;
      }
      updatedQuote = Object.assign({}, quote, { votes: newVotes });
      return [
        ...state.slice(0, index),
        updatedQuote,
        ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      if (!quote.votes) {
        newVotes = 0;
      } else {
        newVotes = quote.votes - 1;
      }
      updatedQuote = Object.assign({}, quote, { votes: newVotes });
      return [
        ...state.slice(0, index),
        updatedQuote,
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}
