import { Button, Flex, Text } from '@chakra-ui/react';

const ItemFunctionBtn = () => {
    return (
        <Flex paddingX={1} align={'center'} justify={'space-between'}>
            <Text fontSize={'lg'}>상품 목록 (총 {1}건)</Text>
            <Flex align={'center'} gap={2}>
                <Text fontSize={'lg'}>최근 업데이트 : {'2023-00-00 (금) 00:00:00'}</Text>
                <Button borderRadius={0} backgroundColor={'gray.200'} size={'sm'}>
                    저장
                </Button>
                <Button borderRadius={0} backgroundColor={'gray.200'} size={'sm'}>
                    삭제
                </Button>
                <Button borderRadius={0} backgroundColor={'gray.200'} size={'sm'}>
                    엑셀 업로드
                </Button>
                <Button borderRadius={0} backgroundColor={'gray.200'} size={'sm'}>
                    다운로드
                </Button>
            </Flex>
        </Flex>
    );
};

export default ItemFunctionBtn;
