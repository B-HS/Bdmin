import { Flex } from '@chakra-ui/react';
import ItemCondition from './Component/ItemCondition';
import ItemFunctionBtn from './Component/ItemFunctionBtn';

const Item = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <ItemCondition />
            <ItemFunctionBtn />
            상품
        </Flex>
    );
};

export default Item;
