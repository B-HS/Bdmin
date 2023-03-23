import { Flex } from '@chakra-ui/react';
import TesterCondition from './Component/TesterCondition';
import TesterFunctionBtn from './Component/TesterFunctionBtn';

const Tester = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <TesterCondition />
            <TesterFunctionBtn />
            테스터
        </Flex>
    );
};

export default Tester;
