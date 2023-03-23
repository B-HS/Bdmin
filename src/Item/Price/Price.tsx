import { Flex } from '@chakra-ui/react';
import PriceCondition from './Component/PriceCondition';
import PriceFunctionBtn from './Component/PriceFunctionBtn';

const Price = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <PriceCondition />
            <PriceFunctionBtn />
            가격
        </Flex>
    );
};

export default Price;
