
export function formatDate(date: Date){
    const options = {
        year: "numeric" as const,
        month: "short" as const,
        day: "numeric" as const,
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
}