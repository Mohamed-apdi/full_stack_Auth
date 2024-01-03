// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

  
export default function Register() {
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        console.log(event)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        try {
            const {data} = await axios.post("/api/v1/register-user", formData);
            console.log(data)
            toast.success("Successfully register")
            setLoading(false)
            Navigate("/login")
        } catch (e) {
            setLoading(false)
            toast.error(e.response.data.message)
            console.log(e)
        }
    
    }

  return (
    <div className=' _w-full'>
    <Card>
    <CardHeader>
      <CardTitle>Register With Your Info</CardTitle>
    </CardHeader>
    <CardContent> 
    <form onSubmit={handleSubmit}> 
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Username">Username</Label>
              {/* <Input type="text" onChange={handleChange} id="Username" placeholder="Enter your username" /> */}
              <Input type="text" name="username" onChange={handleChange} id="name" placeholder="Enter your username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className=' _pt-4'>Email</Label>
              {/* <Input  onChange={handleChange} id="email" placeholder="Enter your email" /> */}
              <Input type="email" name="email" onChange={handleChange} id="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className=' _pt-4'>Password</Label>
              {/* <Input type="password" onChange={handleChange} id="password" placeholder="Enter your password" /> */}
              <Input type="password" name="password" onChange={handleChange} id="password" placeholder="Enter your password" />
            </div>
            <div className="flex flex-col space-y-1.5 _pt-3">
              <Button className=" _w-full">{loading ? "Registreing..." : "Register"}</Button>
            </div>
          </div>
        </form>
    </CardContent>
  </Card>
  </div>
  )
}
