import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { BsLaptop } from 'react-icons/bs';
import { TbBoxSeam, TbCategory2, TbReport } from 'react-icons/tb';
import { MdOutlineInventory2 } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { SideNavLink } from './side-nav-link';
interface SideNavProps {
	sideNavDisplay: boolean;
}
export default function SideNav({ sideNavDisplay }: SideNavProps) {
	return (
		<VStack
			top={'0'}
			w={'100%'}
			h={'100%'}
			bgColor={'base-100'}
			overflow={'hidden'}
			display={'flex'}
			p={'1em'}
			spacing={'3.75em'}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			<VStack spacing={'3.75em'}>
				<Flex
					alignItems={'center'}
					flexDir={'column'}
					justifyContent={'center'}
					w={'100%'}
					h={'3em'}
				>
					{/* <Image src={cklogo} w={'9.75em'} h={'auto'} /> */}
					<Heading as={'h1'} fontSize={'2xl'} display={sideNavDisplay ? 'flex' : 'none'}>
						Point of Sales
					</Heading>
					<Text fontSize={'xs'} display={sideNavDisplay ? 'flex' : 'none'}>
						Web App
					</Text>
				</Flex>
				<VStack w={'100%'} spacing={'1em'} align={'center'}>
					<SideNavLink
						sideNavDisplay={sideNavDisplay}
						text={'Dashboard'}
						icon={<BsLaptop />}
						to={'/dashboard'}
					/>
					<SideNavLink
						sideNavDisplay={sideNavDisplay}
						to={'/dashboard/report'}
						text={'Report'}
						icon={<TbReport />}
					/>
					<SideNavLink
						sideNavDisplay={sideNavDisplay}
						text={'Inventory'}
						to={'#'}
						icon={<MdOutlineInventory2 />}
					/>
					<SideNavLink
						sideNavDisplay={sideNavDisplay}
						text={'Product'}
						to={'#'}
						icon={<TbBoxSeam />}
					/>
					<SideNavLink
						sideNavDisplay={sideNavDisplay}
						text={'Category'}
						to={'#'}
						icon={<TbCategory2 />}
					/>
					<SideNavLink
						sideNavDisplay={sideNavDisplay}
						text={'Employee'}
						to={'#'}
						icon={<IoIosPeople />}
					/>
				</VStack>
			</VStack>
		</VStack>
	);
}
