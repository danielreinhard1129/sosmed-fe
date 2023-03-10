import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton
} from '@chakra-ui/react'

export default function NavItem({ icon, title, active, navSize }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#1da1f3"}
                    p={3}
                    borderRadius={8}
                    _hover={{
                        textDecor: 'none',
                        color: "facebook.500"
                    }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "white"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} color={'white'}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}