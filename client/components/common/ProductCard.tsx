import React from 'react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
import { Product } from '@services/shop/client'

type Props = {
  product: Product
}

export function ProductCard(props: Props) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${props.product.imageUrl})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={`${props.product.imageUrl}`}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.400'} fontSize={'sm'} textTransform={'uppercase'}>
            {props.product.category}
          </Text>
          <Heading
            color={'gray.300'}
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={500}
          >
            {props.product.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text color={'gray.300'} fontWeight={800} fontSize={'xl'}>
              {`¥ ${props.product.price}`}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
