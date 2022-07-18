import { Box, Button, Checkbox, Heading, Input, Menu, MenuButton, MenuItem, MenuList, PinInput, PinInputField, Select, Stack, Text } from '@chakra-ui/react'
// import {ChevronDownIcon} from "@chakra-ui/icons"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[select,setSelect]=useState("")
    const[otp,setOtp]=useState("")
    const[type,setType]=useState("password")

    const[form,setForm]=useState({
        email:"",password:"",select:"",otp:""
    })
  
    let handleform=()=>{
        setForm({
            email,password,select,otp
        })

    }
    let handleToggle=()=>{
        if(type==="password"){
            setType("text")
        }
        else{
            setType("password")
        }
    }
  return (
    <Box>
        <Heading>Form</Heading>
        <Stack direction="column" gap="0.5rem"  >
        <Box>
            <label><Input type="text" placeholder='email' onChange={(e)=>{
                // console.log(e.target.value)
                setEmail(e.target.value)}}/></label>
        </Box>
        <Box>
            <Input type={type} placeholder='password' onChange={(e)=>{
                // console.log(e.target.value)
                setPassword(e.target.value)}}/>
                <Checkbox onChange={handleToggle} >{type=="text" ?"Hide Password" :"Show Password"}</Checkbox>
            
        </Box>
        <Box>
            <PinInput otp onChange={(value)=>setOtp(value)}>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
            </PinInput>
        </Box>
        <Box>
            <Select onChange={(e)=>{
                // console.log(e.target.value)
                setSelect(e.target.value)
                // console.log(select)
            
            }
                }>
                <option value="">-----</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                
            </Select>
        </Box>
        <Box>
        <Menu >
        <MenuButton 
        as={Button} 
        // rightIcon={<ChevronUpIcon/>}
        >
            Action
        </MenuButton>
        <MenuList >
            <MenuItem onClick={()=>{alert("Form has Downloaded")}}>Download</MenuItem>
            <MenuItem onClick={()=>{alert(" Form has Copyed")}}>Create a Copy</MenuItem>
            <MenuItem onClick={()=>{alert("Form has been saveed in Draft")}}>Mark as Draft</MenuItem>
            <MenuItem onClick={()=>{alert("Form will be Delete")}}>Delete</MenuItem>
            <MenuItem onClick={()=>{alert("Workshop will be Attend")}}>Attend a Workshop</MenuItem>
        </MenuList>
        </Menu>
        </Box>
        <Box>
            <Button onClick={handleform}>{" "}SIGN UP{" "}</Button>
        </Box>
        </Stack>
        <Box >
            <Text fontSize='4xl' >Form Output</Text>
            <Text >{form.email}</Text>
            <Text>{form.password}</Text>
            <Text>{form.otp}</Text>
            <Text>{form.select}</Text>
        </Box>
      
    </Box>
  )
}

export default Form
