import { Flex } from '@chakra-ui/react';
import ReviewCondition from './Component/ReviewCondition';
import ReviewFunctionBtn from './Component/ReviewFunctionBtn';

const Review = () => {
    return (
        <Flex width={'100%'} height={'100%'} bgColor={'white'} boxShadow={'base'} flexDirection={'column'} p={5} gap={5}>
            <ReviewCondition />
            <ReviewFunctionBtn />
            리뷰
        </Flex>
    );
};

export default Review;
