import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

const ViewService = () => {
    const { service_id } = useParams()
    const [services, setServices] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        let url = "/services.json";
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            const matchedService = responseData.filter((el) => { return el.id == service_id })
            setServices(matchedService);
            document.title = "View Service For - "+ matchedService[0].title+ " Desgin By Elviano Developer"
            setIsLoading(false);
        } catch (error) {
            console.error("Error : ", error);
        }
    };
    useEffect(() => {
        getData();
        if (isLoading) {
            return;
        }
    }, [service_id]);

    return (
        <main>
            {
                services && (<>
                    <section className="page view-service">
                        <h2>{services[0].title}</h2>
                        <img src={services[0].img_url} />
                    </section>
                    <section className="page">
                    <p className="desc">{services[0].description}</p>
                    </section>
                    </>
                )
            }
        </main>
    )
}

export default ViewService