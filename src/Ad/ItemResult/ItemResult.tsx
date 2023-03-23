import { Flex } from '@chakra-ui/react';
import ItemResultCondition from './Component/ItemResultCondition';
import ItemResultFunctionBtn from './Component/ItemResultFunctionBtn';

const ItemResult = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <ItemResultCondition />
            <ItemResultFunctionBtn />
            상품성과
        </Flex>
    );
};

export default ItemResult;
