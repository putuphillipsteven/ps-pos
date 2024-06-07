export const table = {
	variants: {
		customStripped: {
			table: {
				width: '100%',
				borderCollapse: 'collapse',
			},
			th: {
				color: 'black',
				padding: '0.5em', // Ensure consistent padding for th elements
				border: '1.5px solid #f3f3f3',
			},
			td: {
				padding: '0.5em', // Apply padding to td elements
				// border: '1.5px solid #f3f3f3', // Add border to td elements
			},
			tbody: {
				tr: {
					border: '1.5px solid #f3f3f3',
					'&:hover': {
						backgroundColor: '#f3f3f3',
						cursor: 'pointer',
					},
				},
			},
		},
	},
};
