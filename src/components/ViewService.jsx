import React from 'react'
import { useParams } from 'react-router-dom'

const ViewService = () => {
    const { service_id } = useParams()
    return (
            <section className="main-page">
                <h2>View Service </h2>
            </section>
    )
}

export default ViewService