import { Button, Flex, Input, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import useInput from '../../../Hooks/useInput';
import { dateStatus } from '../../../Types/Condition';

const TesterDetailCondition = () => {
    const [option, onChangeOption, setOption] = useInput('');
    const tmpOptions = ['테스트1', '테스트2', '테스트3'];
    const enWeekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const koWeekDay = ['월', '화', '수', '목', '금', '토', '일'];
    const [value, setValue] = useState<dateStatus>({
        startDate: new Date(),
        endDate: new Date()
    });
    const handleValueChange = async (newValue: dateStatus) => {
        setValue(newValue);
    };

    const weekDayChanger = async () => {
        const picker = document.getElementById('datePicker') as HTMLInputElement;
        if (picker) {
            const divider = picker.value.split('(');
            const startDate = divider[0].replace(' ', '');
            const endDate = divider[1].split(')')[1].split(' ~ '[1])[1];
            const start = enWeekDay
                .map((v, i) => {
                    if (v === divider[1].split(')')[0]) {
                        return koWeekDay[i];
                    }
                })
                .toString()
                .replace(/[, ]+/g, ' ')
                .trim();

            const end = enWeekDay
                .map((v, i) => {
                    if (v === divider[2].split(')')[0]) {
                        return koWeekDay[i];
                    }
                })
                .toString()
                .replace(/[, ]+/g, ' ')
                .trim();
            picker.value = `${startDate} (${start}) ~ ${endDate} (${end})`;
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
                <Flex justify={'flex-start'} align="center">
                    <Text width={'5.2%'}>기간 </Text>
                    <Datepicker
                        inputClassName="border rounded-none w-[20%]"
                        inputId="datePicker"
                        i18n="ko"
                        displayFormat="YYYY-MM-DD"
                        value={value as dateStatus}
                        onChange={async (e) => handleValueChange(e as any)}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TesterDetailCondition;
