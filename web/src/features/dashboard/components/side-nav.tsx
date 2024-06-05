import cklogo from '../../../../public/ck-logo.png';
import { Box, Image, VStack } from '@chakra-ui/react';
import { BsLaptop } from 'react-icons/bs';
import { TbBoxSeam, TbCategory2, TbReport } from 'react-icons/tb';
import { MdOutlineInventory2 } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { SideNavLink } from './side-nav-link';
import { BiLogOut } from 'react-icons/bi';
export default function SideNav() {
	return (
		<VStack
			top={'0'}
			w={'100%'}
			h={'100%'}
			bgColor={'base-100'}
			display={'flex'}
			p={'1em'}
			spacing={'3.75em'}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			<Box>
				<Image src={cklogo} w={'9.75em'} />
			</Box>
			<VStack w={'100%'} spacing={'1em'} align={'center'}>
				<SideNavLink text={'Dashboard'} icon={<BsLaptop />} to={'/dashboard'} />
				<SideNavLink to={'/report'} text={'Report'} icon={<TbReport />} />
				<SideNavLink text={'Inventory'} to={'/inventory'} icon={<MdOutlineInventory2 />} />
				<SideNavLink text={'Product'} to={'/product'} icon={<TbBoxSeam />} />
				<SideNavLink text={'Category'} to={'/category'} icon={<TbCategory2 />} />
				<SideNavLink text={'Employee'} to={'/category'} icon={<IoIosPeople />} />
			</VStack>
			<Box mt={'auto'}>
				<SideNavLink text={'Log Out'} icon={<BiLogOut />} to='#' />
			</Box>
		</VStack>
	);
}
