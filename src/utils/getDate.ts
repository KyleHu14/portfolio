const getFormattedDate = (inputDate: string | Date) => {
	const myDatetime = new Date(inputDate)

	const date = myDatetime.toLocaleDateString(["en-EN"], {
		year: "numeric",
		month: "short",
		day: "numeric",
	})

	return date
}

export default getFormattedDate
