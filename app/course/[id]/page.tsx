'use client'
import React from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";


const Page = ({params}:any) => {
    console.log(params.id);
    return (
        <div>
            <CourseDetailsPage id={params.id} />
        </div>
    )
}

export default Page;
 