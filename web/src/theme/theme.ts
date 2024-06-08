import { extendTheme } from '@chakra-ui/react';
import { colors } from './color';
import { table } from './table';
const theme = extendTheme({
	components: {
		Box: {
			variants: {
				'sidebar-box': {
					w: '100%',
					h: '2.5em',
					display: 'flex',
					flexDir: 'row',
					borderRadius: '0.5em',
					transition: 'transform .3s',
					_hover: {
						bgColor: '#F99B2A',
						boxShadow: 'lg',
						transform: 'scale(1.05)',
					},
				},
			},
		},
		Table: table,
	},
	colors,
	border: {},
});

export default theme;
