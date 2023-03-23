import { Button, Checkbox, Flex, Input, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import useInput from '../../../Hooks/useInput';
import { checkboxStatus } from '../../../Types/Condition';
const items: checkboxStatus[] = [
    { value: false, name: '판매 중' },
    { value: false, name: '판매 대기' },
    { value: false, name: '품절' },
    { value: false, name: '판매 중지' },
    { value: false, name: '판매 종료' },
    { value: false, name: '판매 요청 전' }
];
const aprvs: checkboxStatus[] = [
    { value: false, name: '승인 완료' },
    { value: false, name: '부분 승인 완료' },
    { value: false, name: '승인 대기' },
    { value: false, name: '심사 중' },
    { value: false, name: '검수 중' },
    { value: false, name: '임시 반려' },
    { value: false, name: '승인 반려' },
    { value: false, name: '등록 불가' }
];
const ItemCondition = () => {
    const [option, onChangeOption, setOption] = useInput('');
    const [itemStatus, setItemStatus] = useState<checkboxStatus[]>(items);
    const [aprvStatus, setAprvStatus] = useState<checkboxStatus[]>(aprvs);
    const tmpOptions = ['테스트1', '테스트2', '테스트3'];

    const itemCheckUncheck = (bool: boolean) => {
        setItemStatus(() =>
            itemStatus.map((val) => {
                val.value = bool;
                return val;
            })
        );
    };
    const aprvCheckUncheck = (bool: boolean) => {
        setAprvStatus(() =>
            aprvStatus.map((val) => {
                val.value = bool;
                return val;
            })
        );
    };

    const checkboxOnchange = (which: string, target: checkboxStatus[], v: checkboxStatus) => {
        console.log(v);
        const result = target.map((val) => {
            if (val.name === v.name) {
                val.value = !val.value;
                return val;
            }
            return val;
        });
        switch (which) {
            case 'items':
                setItemStatus(() => result);
                break;
            case 'aprvs':
                setAprvStatus(() => result);
                break;
            default:
                break;
        }
    };

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
                        <Button
                            borderRadius={0}
                            bgColor={'gray.300'}
                            onClick={() => {
                                console.log(itemStatus);
                                console.log(aprvStatus);
                            }}
                        >
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
                <Flex justify={'flex-start'} align="center">
                    <Text width={'5%'}>상품 상태 </Text>
                    <Flex gap={5}>
                        <Checkbox
                            isChecked={itemStatus.filter((v) => v.value).length === itemStatus.length ? true : false}
                            onChange={() => {
                                itemStatus.filter((v) => !v.value).length === itemStatus.length
                                    ? itemCheckUncheck(true)
                                    : itemCheckUncheck(false);
                            }}
                        >
                            {itemStatus.filter((v) => v.value).length === itemStatus.length ? '모두 해제' : '모두 선택'}
                        </Checkbox>
                        {itemStatus.map((v, i) => {
                            return (
                                <Checkbox isChecked={v.value} key={i} onChange={() => checkboxOnchange('items', itemStatus, v)}>
                                    {v.name}
                                </Checkbox>
                            );
                        })}
                    </Flex>
                </Flex>
                <Flex justify={'flex-start'} align="center">
                    <Text width={'5%'}> 승인 상태 </Text>
                    <Flex gap={5}>
                        <Checkbox
                            isChecked={aprvStatus.filter((v) => v.value).length === aprvStatus.length ? true : false}
                            onChange={() => {
                                aprvStatus.filter((v) => !v.value).length === aprvStatus.length
                                    ? aprvCheckUncheck(true)
                                    : aprvCheckUncheck(false);
                            }}
                        >
                            {aprvStatus.filter((v) => v.value).length === aprvStatus.length ? '모두 해제' : '모두 선택'}
                        </Checkbox>
                        {aprvStatus.map((v, i) => {
                            return (
                                <Checkbox isChecked={v.value} key={i} onChange={() => checkboxOnchange('aprvs', aprvStatus, v)}>
                                    {v.name}
                                </Checkbox>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ItemCondition;
