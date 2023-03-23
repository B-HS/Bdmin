import { Flex } from '@chakra-ui/react';
import MesureCondition from './Component/MesureCondition';
import MesureFunctionBtn from './Component/MesureFunctionBtn';

const Mesure = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <MesureCondition />
            <MesureFunctionBtn />
            지표
        </Flex>
    );
};

export default Mesure;
