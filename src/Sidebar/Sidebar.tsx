import { Box, Flex, Select, Text } from '@chakra-ui/react';
import useInput from '../Hooks/useInput';

const Sidebar = () => {
    const [option, onChangeOption, setOption] = useInput('');
    const tmpOptions = ['테스트1', '테스트2', '테스트3'];
    return (
        <Flex maxW={'225px'} width={'10%'} bgColor={'gray.300'} flexDirection={'column'} height={'100vh'} boxShadow={'xl'}>
            <Text boxShadow={'base'} bgColor={'gray.500'} p="0.7rem" fontSize={'xl'} textAlign="center">
                창고프로그램
            </Text>
            <Box textAlign={'center'}>
                <Select
                    value={option}
                    onChange={onChangeOption}
                    border={0}
                    focusBorderColor={'transperent'}
                    backgroundColor={'white'}
                    borderRadius={0}
                >
                    {tmpOptions.map((v, i) => (
                        <option onClick={() => setOption(v)} key={i}>
                            {v}
                        </option>
                    ))}
                </Select>
                <Text opacity={0.5}>계정코드 : {1234}</Text>
            </Box>
            
        </Flex>
    );
};

export default Sidebar;
