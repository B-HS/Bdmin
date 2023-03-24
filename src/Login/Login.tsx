import { Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import useInput from '../Hooks/useInput';
import './login.sass';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, emailOnChange] = useInput();
    const [password, passwordOnChange] = useInput();
    const handleClick = () => setShow(!show);

    return (
        <section className="login_popup">
            <Stack p="2rem" textAlign={'center'} width={'20%'} height={'20%'} boxShadow={'md'} border={'1px #EEE solid'}>
                <span className="font-bold text-3xl mb-3">로그인</span>
                <InputGroup>
                    <InputLeftElement>
                        <BsPersonCircle />
                    </InputLeftElement>
                    <Input placeholder="이메일" borderRadius={0} value={email} onChange={emailOnChange} />
                </InputGroup>
                <InputGroup size="md">
                    <InputLeftElement>
                        <BiLockAlt />
                    </InputLeftElement>
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="비밀번호"
                        borderRadius={0}
                        mb="1rem"
                        value={password}
                        onChange={passwordOnChange}
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size="sm"
                            borderRadius={0}
                            backgroundColor={'transparent'}
                            color={'gray.300'}
                            onClick={handleClick}
                        >
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Flex justify={'flex-end'}>
                    <Flex gap={1}>
                        <Button borderRadius={0} borderWidth={1} size={'sm'}>
                            회원가입
                        </Button>
                        <Button borderRadius={0} borderWidth={1} size={'sm'}>
                            로그인
                        </Button>
                    </Flex>
                </Flex>
            </Stack>
        </section>
    );
};

export default Login;
