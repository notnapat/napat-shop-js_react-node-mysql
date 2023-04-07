import React from "react";
import Navbar from "../navbar/Navbar";
import SidebarInclude from "../sidebar/SidebarInclude";
import { Button, Card } from "react-bootstrap";
import "./pages.style/Cpu.css";

function Cpu() {
    const cpus = [
        {
            id: 1,
            name: "CPU AMD sWRX8 RYZEN THREADRIPPER PRO 5975WX",
            specs: "32 Cores / 64 Threads / 3.6 GHz - 4.5 GHz / No Integrated Graphics",
            price: "130,000",
            image: require("../images/cpu/amd/ryzen-threadripper-pro-5975wx.jpg"),
        },
        {
            id: 2,
            name: "CPU Intel Core i9-11900K",
            specs: "8 Cores / 16 Threads / 3.5 GHz - 5.3 GHz / No Integrated Graphics",
            price: "50,000",
            image: require("../images/cpu/intel/core-i9-11900k.jpg"),
        },
        // Add more CPU objects here
    ].then(console.log('aaaaaaaa'))

    return (
        <>
            <div>
                <div className="container-fulid">
                    <Navbar />
                </div>
                <div className="container bg-danger p-0">
                    <div className="d-flex h-auto p-0 border border-danger bg-sidebar ">
                        <SidebarInclude />
                        <div className="w-75 h-auto">
                            <div>
                                <div className="bg-warning ">
                                    <h1>aaaa</h1>
                                </div>
                                <div className="container">
                                    <div className="h-100 row justify-content-around">
                                        {cpus.map((cpu) => (
                                            <div
                                                key={cpu.id}
                                                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6"
                                            >
                                                <Card
                                                    style={{
                                                        width: "100%",
                                                        height: "25rem",
                                                    }}
                                                >
                                                    <Card.Img
                                                        variant="top"
                                                        src={cpu.image}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {cpu.name}
                                                        </Card.Title>
                                                        <div className="w-100 h-auto d-flex box-sizing ">
                                                            <div className="text-button  align-self-end">
                                                                <Card.Text>
                                                                    {cpu.specs}
                                                                </Card.Text>
                                                                <div className="button1">
                                                                    <Button>
                                                                        {
                                                                            cpu.price
                                                                        }
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cpu;
