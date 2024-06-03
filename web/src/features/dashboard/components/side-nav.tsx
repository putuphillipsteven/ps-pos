import { Box, Image, VStack } from '@chakra-ui/react';
import cklogo from '../../../../public/ck-logo.png';
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
			bgColor={'red.400'}
			p={'3em 1em 1em 1em'}
			spacing={'3.75em'}
		>
			<Box>
				<Image src={cklogo} w={'9.75em'} />
			</Box>
			<VStack w={'100%'} spacing={'1.5em'} align={'flex-end'}>
				<SideNavLink text={'Dashboard'} icon={<BsLaptop />} to={'/admin/dashboard'} />
				<SideNavLink to={'/admin/report'} text={'Report'} icon={<TbReport />} />
				<SideNavLink text={'Inventory'} to={'/admin/inventory'} icon={<MdOutlineInventory2 />} />
				<SideNavLink text={'Product'} to={'/admin/product'} icon={<TbBoxSeam />} />
				<SideNavLink text={'Category'} to={'/admin/category'} icon={<TbCategory2 />} />
				<SideNavLink text={'Employee'} to={'/admin/category'} icon={<IoIosPeople />} />
			</VStack>
			<SideNavLink text={'Log Out'} icon={<BiLogOut />} />
		</VStack>
	);
}
