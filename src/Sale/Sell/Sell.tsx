import { Flex } from '@chakra-ui/react';
import SellCondition from './Component/SellCondition';
import SellFunctionBtn from './Component/SellFunctionBtn';

const Sell = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <SellCondition />
            <SellFunctionBtn />
            판매
        </Flex>
    );
};

export default Sell;
