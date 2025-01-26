export default function HistoryPage() {
	// Get all month keys (month0, month1, etc.)
	const monthKeys = Object.keys(data[0])
		.filter(key => key.startsWith('month'))
		.sort((a, b) => parseInt(a.slice(5)) - parseInt(b.slice(5)))

	return (
		<Card className='w-full max-w-4xl'>
			<CardHeader>
				<CardTitle>Sales Data</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse'>
						<thead>
							<tr>
								<th className='p-2 border text-left'>Cohort</th>
								<th className='p-2 border text-left'>Users</th>
								{monthKeys.map(month => (
									<th key={month} className='p-2 border text-center'>
										Month {month.slice(5)}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map(row => (
								<tr key={row.cohort}>
									<td className='p-2 border font-medium'>{row.cohort}</td>
									<td className='p-2 border text-right'>{row.totalUsers.toLocaleString()}</td>
									{monthKeys.map(month => (
										<td key={month} className='p-2 border text-center'>
											{row[month].toFixed(1)}%
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	)
}
