const initialState = {
  candidates: [
    { name: "Jacob", voteCount: 0 },
    { name: "Adrian", voteCount: 0 },
    { name: "Hexx", voteCount: 0 },
  ],
  totalVotes: 0,
};

function candidateReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_VOTE":
      const totalVotes = state.totalVotes + 1;
      const candidates = state.candidates.map((candidate) => {
        if (candidate.name === payload) {
          return { ...candidate, voteCount: candidate.voteCount + 1 };
        } else {
          return candidate;
        }
      });

      return { candidates, totalVotes };
    case "RESET_VOTES":
      return initialState;
    default:
      return state;
  }
}

export default candidateReducer;
