import { useState } from "react"
import {  Heading, Input, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid  } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'

export const Notes = () => {
    const [list, setList]  = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        if(e.key === 'Enter' && e.target.value.trim() !== ''){
            setList([...list, e.target.value]);
            e.target.value = '';
        }
    };

    const handleDelete = (e) => {
       let index = list.indexOf(e);
       if(index > -1){
        setList((item) => item.filter(ele => ele !== e));
       }
    }

    return <div style={{backgroundColor:'#33b099', height:'100vh'}}>
        <div className="navbar" style={{backgroundColor:'black', height:'50px', color:'white'}}>
            <strong>
                <h1 style={{fontSize:'30px'}}>Notes</h1>
            </strong>
        </div>
        <Input m={20} htmlSize={40} width='100' height='50' backgroundColor='white' placeholder="Enter Notes" onKeyUp={handleChange}/>
       
            <SimpleGrid spacing={4} mr={20} ml={20} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {list.map((e, i) => (
                <Card mb={10} key={i}>
                    <CardHeader>
                    <Heading size='md'> {e}</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text> summary of all your note</Text>
                    </CardBody>
                    <CardFooter flexDirection='row-reverse'>
                        <DeleteIcon onClick={() => handleDelete(e)}/>
                    </CardFooter>
                </Card>
        ))}
        </SimpleGrid>
    </div>
}
