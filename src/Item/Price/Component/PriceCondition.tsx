import { Button, Flex, Input, Select, Text } from '@chakra-ui/react';
import useInput from '../../../Hooks/useInput';

const PriceCondition = () => {
    const [option, onChangeOption, setOption] = useInput('');
    const tmpOptions = ['테스트1', '테스트2', '테스트3'];

    return (
        <Flex w={'100%'} height={'fit-content'}>
            <Flex
                w={'100%'}
                border={'1px solid lightgray'}
                paddingX={10}
                paddingY={5}
                justify={'space-between'}
                flexDirection={'column'}
                gap={3}
            >
                <Flex w={'100%'} justify={'space-between'} gap={2}>
                    <Flex width={'30%'} gap={2} w={'100%'} align={'center'} height="fit-content">
                        <Text width={'16.55%'}>그룹</Text>
                        <Select
                            value={option}
                            onChange={onChangeOption}
                            border={'1px'}
                            borderColor={'lightgray'}
                            focusBorderColor={'transperent'}
                            backgroundColor={'white'}
                            borderRadius={0}
                            w={'90%'}
                        >
                            {tmpOptions.map((v, i) => (
                                <option onClick={() => setOption(v)} key={i}>
                                    {v}
                                </option>
                            ))}
                        </Select>
                    </Flex>
                    <Flex width={'30%'} gap={2} w={'100%'} align={'center'} height="fit-content">
                        <Text textAlign={'center'} width={'16.55%'}>
                            브랜드
                        </Text>
                        <Select
                            value={option}
                            onChange={onChangeOption}
                            border={'1px'}
                            borderColor={'lightgray'}
                            focusBorderColor={'transperent'}
                            backgroundColor={'white'}
                            borderRadius={0}
                            w={'90%'}
                        >
                            {tmpOptions.map((v, i) => (
                                <option onClick={() => setOption(v)} key={i}>
                                    {v}
                                </option>
                            ))}
                        </Select>
                    </Flex>
                    <Flex width={'30%'} gap={2} w={'100%'} align={'center'} height="fit-content">
                        <Text textAlign={'center'} width={'16.55%'}>
                            상품명
                        </Text>
                        <Select
                            value={option}
                            onChange={onChangeOption}
                            border={'1px'}
                            borderColor={'lightgray'}
                            focusBorderColor={'transperent'}
                            backgroundColor={'white'}
                            borderRadius={0}
                            w={'90%'}
                        >
                            {tmpOptions.map((v, i) => (
                                <option onClick={() => setOption(v)} key={i}>
                                    {v}
                                </option>
                            ))}
                        </Select>
                    </Flex>
                    <Flex gap={2}>
                        <Button borderRadius={0} bgColor={'gray.300'} onClick={() => {}}>
                            조회
                        </Button>
                        <Button borderRadius={0}>초기화</Button>
                    </Flex>
                </Flex>
                <Flex justify={'flex-start'} align="center">
                    <Text width={'5%'}>옵션ID </Text>
                    <Input
                        width={'95%'}
                        borderColor={'lightgray'}
                        borderRadius={0}
                        placeholder='옵션 ID( "," 로 구분하며 최대 100개)'
                    ></Input>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default PriceCondition;
