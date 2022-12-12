export const selectContacts = state => state.contacts.contacts;
export const selectFilterInput = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;