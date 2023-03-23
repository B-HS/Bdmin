import { Flex } from '@chakra-ui/react';
import TesterDetailCondition from './Component/TesterDetailCondition';
import TesterDetailFunctionBtn from './Component/TesterDetailFunctionBtn';

const TesterDetail = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <TesterDetailCondition />
            <TesterDetailFunctionBtn />
            테스터상세
        </Flex>
    );
};

export default TesterDetail;
