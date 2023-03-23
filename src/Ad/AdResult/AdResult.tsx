import { Flex } from '@chakra-ui/react';
import AdResultCondition from './Component/AdResultCondition';
import AdResultFunctionBtn from './Component/AdResultFunctionBtn';

const AdResult = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <AdResultCondition />
            <AdResultFunctionBtn />
            광고
        </Flex>
    );
};

export default AdResult;
