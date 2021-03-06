import { Button, Heading, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";

const NotificationListItem = (data) => {
  return (
    <Pressable>
      <VStack rounded="8" bgColor="warmGray.100" m="0.5" mx="4" shadow="1">
        <HStack m="2" mx="4" justifyContent="space-between">
          <Text fontSize="lg">{data.data.title}</Text>
          <Text sub color="muted.400">
            Now
          </Text>
        </HStack>
        <HStack mx="4" mb="2">
          <Text color="muted.500">Transaction ID: </Text>
          <Text bold> {data.data.transactionId}</Text>
        </HStack>
        <HStack mx="4" mb="2" justifyContent="flex-end">
          {data.data.expired ? (
            <Button bgColor="primary.800" size="sm" px="4">
              Confirm
            </Button>
          ) : (
            <Text color="muted.400" italic>
              Expired{" "}
            </Text>
          )}
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default NotificationListItem;
