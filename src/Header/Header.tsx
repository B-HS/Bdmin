import { Avatar, Flex, Text } from '@chakra-ui/react';
import { RiGithubFill } from 'react-icons/ri';
import { Tooltip } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex w="100%" boxShadow={'base'} p="3.5" paddingX={7} bgColor={'white'} align={'center'} justify={'space-between'}>
            <Text>Heaer</Text>
            <Flex align={'center'} gap={3}>
                <RiGithubFill size={'23'} />
                <Tooltip hasArrow label="사용자 메뉴 열기">
                    <Avatar cursor={'pointer'} size={'xs'}></Avatar>
                </Tooltip>
            </Flex>
        </Flex>
    );
};

export default Header;
