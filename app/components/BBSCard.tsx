import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in rem sunt laboriosam repellat consequuntur est totam? Dignissimos, ab nesciunt quis a eaque blanditiis nemo itaque. Totam voluptatum tempore maiores?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={'/bbs-posts/1'} className="text-gray-500">Read More</Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard