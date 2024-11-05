const getFormattedTime = (inputDate: string | Date) => {
	const myDatetime = new Date(inputDate)

	const time = myDatetime.toLocaleTimeString(["en-EN"], {
		hour: "2-digit",
		minute: "2-digit",
	})

	return time
}

export default getFormattedTime
