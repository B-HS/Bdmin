import { Flex } from '@chakra-ui/react';
import SalesCondition from './Component/SalesCondition';
import SalesFunctionBtn from './Component/SalesFunctionBtn';

const Sales = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <SalesCondition />
            <SalesFunctionBtn />
            매출
        </Flex>
    );
};

export default Sales;
