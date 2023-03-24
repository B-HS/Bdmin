import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    List,
    ListItem,
    Select,
    Text
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useInput from '../Hooks/useInput';

export const groupName = [
    {
        name: '상품 관리',
        value: 0
    },
    {
        name: '물류 관리',
        value: 1
    },
    {
        name: '판매 관리',
        value: 2
    },
    {
        name: '광고 관리',
        value: 3
    },
    {
        name: '체험단 관리',
        value: 4
    }
];

export const detailMenuList = [
    { text: '상품 조회', value: 'item', group: 0 },
    { text: '가격 관리', value: 'price', group: 0 },
    { text: '리뷰 관리', value: 'review', group: 0 },
    { text: '지표 관리', value: 'mesure', group: 0 },
    { text: '재고 현황', value: 'stock', group: 1 },
    { text: '입고 관리', value: 'inbound', group: 1 },
    { text: '매출 통계', value: 'sales', group: 2 },
    { text: '판매 통계', value: 'sell', group: 2 },
    { text: '광고 성과', value: 'adresult', group: 3 },
    { text: '상품 성과', value: 'itemresult', group: 3 },
    { text: '체험단 개요', value: 'tester', group: 4 },
    { text: '체험단 상세내', value: 'testerdetail', group: 4 },
    { text: '게시판 관리', value: 'board', group: 5 },
    { text: '사용자 관리', value: 'user', group: 6 },
    { text: '계정 관리', value: 'account', group: 6 },
    { text: '자산 관리', value: 'etc', group: 7 }
];

const Sidebar = () => {
    const location = useLocation();
    const [option, onChangeOption, setOption] = useInput('');
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [accordionIndex, setAccordionIndex] = useState<number[]>([-1]);
    const tmpOptions = ['테스트1', '테스트2', '테스트3'];

    useEffect(() => {
        detailMenuList.forEach((v) => {
            if ('/' + v.value === location.pathname) {
                setCurrentMenu(v.text);
            }
        });
    }, [location.pathname]);

    useEffect(() => {
        detailMenuList.forEach((v) => {
            if ('/' + v.value === location.pathname) {
                setCurrentMenu(v.text);
                setAccordionIndex(() => [v.group]);
            }
        });
    }, []);

    return (
        <Flex maxW={'225px'} width={'10%'} bgColor={'gray.300'} flexDirection={'column'} height={'100vh'} boxShadow={'xl'}>
            <Link to={'/'}>
                <Text
                    boxShadow={'base'}
                    bgColor={'gray.500'}
                    p="0.7rem"
                    fontSize={'xl'}
                    textAlign="center"
                    color={'white'}
                    fontWeight={'extrabold'}
                >
                    창고프로그램
                </Text>
            </Link>
            <Box textAlign={'center'}>
                <Select
                    value={option}
                    onChange={onChangeOption}
                    border={0}
                    focusBorderColor={'transperent'}
                    backgroundColor={'white'}
                    borderRadius={0}
                    textAlign={'center'}
                >
                    {tmpOptions.map((v, i) => (
                        <option onClick={() => setOption(v)} key={i}>
                            {v}
                        </option>
                    ))}
                </Select>
                <Text opacity={0.5} marginTop={2}>
                    계정코드 : {1234}
                </Text>
            </Box>

            <Accordion
                index={accordionIndex}
                allowMultiple
                marginTop={2}
                onChange={(e: number[]) => {
                    e ? setAccordionIndex([e[1]]) : -1;
                }}
            >
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            상품 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <Link to={'/item'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '상품 조회' ? 'extrabold' : 'medium'}
                                >
                                    상품 조회
                                </ListItem>
                            </Link>
                            <Link to={'/price'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '가격 관리' ? 'extrabold' : 'medium'}
                                >
                                    가격 관리
                                </ListItem>
                            </Link>
                            <Link to={'/review'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '리뷰 관리' ? 'extrabold' : 'medium'}
                                >
                                    리뷰 관리
                                </ListItem>
                            </Link>
                            <Link to={'/mesure'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '지표 관리' ? 'extrabold' : 'medium'}
                                >
                                    지표 관리
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            물류 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <Link to={'/stock'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '재고 현황' ? 'extrabold' : 'medium'}
                                >
                                    재고 현황
                                </ListItem>
                            </Link>
                            <Link to={'/inbound'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '입고 관리' ? 'extrabold' : 'medium'}
                                >
                                    입고 관리
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            판매 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <Link to={'/sales'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '매출 통계' ? 'extrabold' : 'medium'}
                                >
                                    매출 통계
                                </ListItem>
                            </Link>
                            <Link to={'/sell'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '판매 통계' ? 'extrabold' : 'medium'}
                                >
                                    판매 통계
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            광고 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <Link to={'/adresult'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '광고 성과' ? 'extrabold' : 'medium'}
                                >
                                    광고 성과
                                </ListItem>
                            </Link>
                            <Link to={'/itemresult'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '상품 성과' ? 'extrabold' : 'medium'}
                                >
                                    상품 성과
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            체험단 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <Link to={'/tester'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '체험단 개요' ? 'extrabold' : 'medium'}
                                >
                                    체험단 개요
                                </ListItem>
                            </Link>
                            <Link to={'/testerdetail'}>
                                <ListItem
                                    onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                    fontWeight={currentMenu === '체험단 상세내역' ? 'extrabold' : 'medium'}
                                >
                                    체험단 상세내역
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                {/* <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            게시판 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <ListItem
                                onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                fontWeight={currentMenu === '게시판 관리' ? 'extrabold' : 'medium'}
                            >
                                게시판 관리
                            </ListItem>
                        </List>
                    </AccordionPanel>
                </AccordionItem> */}

                {/* <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            비지니스 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={3} backgroundColor={'gray.500'} pl={6} color={'white'} opacity={0.8}>
                        <List opacity={0.7}>
                            <ListItem
                                onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                fontWeight={currentMenu === '사용자 관리' ? 'extrabold' : 'medium'}
                            >
                                사용자 관리
                            </ListItem>
                            <ListItem
                                onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                fontWeight={currentMenu === '계정 관리' ? 'extrabold' : 'medium'}
                            >
                                계정 관리
                            </ListItem>
                            <ListItem
                                onClick={(e) => setCurrentMenu(e.currentTarget.textContent!)}
                                fontWeight={currentMenu === '자산 관리' ? 'extrabold' : 'medium'}
                            >
                                자산 관리
                            </ListItem>
                        </List>
                    </AccordionPanel>
                </AccordionItem> */}
            </Accordion>
        </Flex>
    );
};

export default Sidebar;
