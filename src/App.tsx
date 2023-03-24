import { Flex } from '@chakra-ui/react';
import RouteBreadcrumb from './BreadCrumb/RouteBreadcrumb';
import Header from './Header/Header';
import Router from './Routers/Router';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
    return (
        <Flex w="100%" bgColor={'gray.100'}>
            <Sidebar />
            <Flex flexDirection={'column'} w="100%">
                <Header />
                <Flex bgColor={'blackAlpha.100'} height={'100%'} p={5} flexDir={'column'} gap={2}>
                    <RouteBreadcrumb />
                    <Router />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default App;
