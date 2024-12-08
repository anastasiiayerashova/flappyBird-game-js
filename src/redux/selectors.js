import { createSelector } from "@reduxjs/toolkit"

export const selectItems = state => state.tasks.items
export const selectFilter = state => state.tasks.filter
export const selectVisibleItems = createSelector([selectItems, selectFilter], (items, filter) => {
    if (!filter) return items
    const filteredData = items.filter(item => item.text.toLowerCase().trim().includes(filter.toLowerCase().trim()))
    return filteredData
})
export const selectStatusFilter = state => state.filters.statusFilter
export const selectVisibilityFilter = createSelector([selectItems, selectStatusFilter], (items, status) => {
    switch (status) {
        case 'active': 
            return items.filter(item => !item.completed)
        case 'completed':
            return items.filter(item => item.completed)
        default:
            return items
    }
})

export const countTasks = createSelector([selectItems], (items) => {
    return items.reduce((count, item) => {
        if (item.completed) {
            count.completed += 1
        }
        else {
            count.active += 1
        }
        return count

    }, {active: 0, completed: 0})
})