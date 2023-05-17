import { Button, Flex } from '@chakra-ui/react';
import { Suspense, useState } from 'react';
import RouteBreadcrumb from './BreadCrumb/RouteBreadcrumb';
import Header from './Header/Header';
import Router from './Routers/Router';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
    const [currentStatus, setCurrentStatus] = useState<'Login' | 'Application'>('Login');
    const tmpMenus = [
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/',
            route: 'Home/Home'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/item',
            route: 'Item/Item/Item'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/mesure',
            route: 'Item/Mesure/Mesure'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/price',
            route: 'Item/Price/Price'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/review',
            route: 'Item/Review/Review'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/stock',
            route: 'Stock/Stock/Stock'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/sales',
            route: 'Sale/Sales/Sales'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/sell',
            route: 'Sale/Sell/Sell'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/adresult',
            route: 'Ad/AdResult/AdResult'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/itemresult',
            route: 'Ad/ItemResult/ItemResult'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/login',
            route: 'Login/Login'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/tester',
            route: 'Tester/Tester/Tester'
        },
        {
            props: {
                aram1: 'param1',
                param2: 'parma2'
            },
            path: '/testerdetail',
            route: 'Tester/TesterDetail/TesterDetail'
        }
    ];
    // 진입점을 한단계 더 뒤로 놔서 login이랑 분기처리도 가능해보임
    // 이 파일(App.tsx에서 store값 기준 (status, 지금은 임시로 위에있는 useState값)으로 분기 렌더링으로
    // 로그인 컴포넌트 => 로그인에 성공하여 user값이 들어오면 Routes를 렌더하는 형식으로 가능해보이기는 함, 테스트해보기)
    // 이하 정리하면
    // 초기 currentState(현재는 store가 아닌 useState로 구현)값은 Login 
    // 또한 초기 Store의 Menu값 = Login단독 라우팅 + path를 "/"로 > 이렇게 App에서 currentStatus에 따라 분기처리가 가능해짐
    // 로그인 성공 => Menu값 Ajax => store의 Menu로 넘김
    // Menu의 Ajax성공시 currentStatus값도 Application으로 설정 > 하단의 currentStatus값이 변경됨에 따라 AJAX완료된 Menu기준으로 메뉴라우팅
    
    const Routes = Router(tmpMenus);

    return (
        <Suspense fallback={<div>on Loading ...</div>}>
            {currentStatus === 'Application' && (
                <Flex w="100%" bgColor={'gray.100'}>
                    <Sidebar />
                    <Flex flexDirection={'column'} w="100%">
                        <Header />
                        <Flex bgColor={'blackAlpha.100'} height={'100%'} p={5} flexDir={'column'} gap={2}>
                            <RouteBreadcrumb />
                            {Routes}
                        </Flex>
                    </Flex>
                </Flex>
            )}
            <Button
                onClick={() => (currentStatus !== 'Application' ? setCurrentStatus('Application') : setCurrentStatus('Login'))}
            >
                BUTTON
            </Button>
        </Suspense>
    );
};

export default App;
