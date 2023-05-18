import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CarDetails = ({initialData}) => {
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.reset();
        }
    } ,[initialData]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);

        const model = formData.get('model');
        const year = formData.get('year');
        const color = formData.get('color');
    };


    return(
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <label>Model:
                    <input type="text" name="model" defaultValue={initialData.model}/>
                </label>
                <label>Year:
                    <input type="text" name="year" defaultValue={initialData.year}/>
                </label>
                <label>Color:
                    <input type="text" name="color" defaultValue={initialData.color}/>
                </label>
            </form>
        </div>
    );
};

export default CarDetails;