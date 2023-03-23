import { Flex } from '@chakra-ui/react';
import StockCondition from './Component/StockCondition';
import StockFunctionBtn from './Component/StockFunctionBtn';

const Stock = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <StockCondition />
            <StockFunctionBtn />
            재고
        </Flex>
    );
};

export default Stock;
