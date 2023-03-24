import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { detailMenuList, groupName } from '../Sidebar/Sidebar';

const RouteBreadcrumb = () => {
    const location = useLocation();
    const [breadLocation, setBreadLocation] = useState<string[]>([]);

    useEffect(() => {
        detailMenuList.forEach((v) => {
            if (v.value === location.pathname.split('/')[1]) {
                const group = groupName.filter((val) => {
                    if (val.value === v.group) {
                        return val.name;
                    }
                });

                setBreadLocation(() => [group[0].name, v.text]);
            }
        });
    }, [location.pathname]);
    return (
        <Flex width={'100%'} bgColor={'white'} flexDirection={'column'} p={5}>
            <Breadcrumb border={'0px solid lightgray'} height={'fit-content'} p={0} alignItems={'center'} separator="-">
                {breadLocation.map((val, i) => {
                    return (
                        <BreadcrumbItem key={i}>
                            <BreadcrumbLink key={i * -1} href="#">
                                {val}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </Flex>
    );
};

export default RouteBreadcrumb;
