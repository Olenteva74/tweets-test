export const selectFilter = state => state.filter.filter;
export const selectUsers = state => state.users.users;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectShowLoadButton = state => state.users.showLoadButton;
export const selectStatusFilter = state => state.filter.status;
export const selectPage = state => state.users.page;

export const selectVisibleUsers = state => {
    const users = selectUsers(state);
    const statusFilter = selectStatusFilter(state);

    switch (statusFilter) {
        case "follow":
            return users.filter(user => !user.isFollowing);
        case "following":
            return users.filter(user => user.isFollowing);   
        default:
            return users;
    }
}
