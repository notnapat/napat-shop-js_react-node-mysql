import React from "react";
import Navbar from "../navbar/Navbar";
// import Sidebar from '../sidebar/Sidebar'
import SidebarInclude from "../sidebar/SidebarInclude";
import { Button, Card } from "react-bootstrap";
import "./pages.style/Cpu.css";

function Cpu() {
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
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <Card
                                                style={{
                                                    width: "100%",
                                                    height: "25rem",
                                                }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={require("../images/cpu/amd/ryzen-threadripper-pro-5975wx.jpg")}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        CPU AMD sWRX8 RYZEN
                                                        THREADRIPPER PRO 5975WX
                                                    </Card.Title>
                                                    <div className="w-100 h-auto d-flex box-sizing ">
                                                        <div className="text-button  align-self-end">
                                                            <Card.Text>
                                                                {" "}
                                                                32 Cores / 64
                                                                Threads / 3.6
                                                                GHz - 4.5 GHz /
                                                                No Integrated
                                                                Graphics{" "}
                                                            </Card.Text>
                                                            <div className="button1">
                                                                <Button>
                                                                    130,000
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <Card
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={require("../images/cpu/amd/ryzen-9-7950x.jpg")}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                />
                                                <Card.Body>
                                                    <Card.Title className="">
                                                        <h6>
                                                            CPU AMD AM5 <br />{" "}
                                                            RYZEN 9 7950X
                                                        </h6>
                                                    </Card.Title>
                                                    <br />
                                                    <br />
                                                    <Card.Text>
                                                        {" "}
                                                        16 Cores / 32 Threads /
                                                        4.5 GHz - 5.7 GHz / AMD
                                                        Radeon Graphics{" "}
                                                    </Card.Text>
                                                    <div className="button1">
                                                        <Button>28,000</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <Card
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={require("../images/cpu/amd/ryzen-7-7700x.jpg")}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        CPU AMD AM5 <br /> RYZEN
                                                        7 7700X
                                                    </Card.Title>
                                                    <br />
                                                    <br />
                                                    <Card.Text>
                                                        {" "}
                                                        8 Cores / 16 Threads /
                                                        4.5 GHz - 5.4 GHz / AMD
                                                        Radeon Graphics{" "}
                                                    </Card.Text>
                                                    <div className="button1">
                                                        <Button>16,000</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <Card
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={require("../images/cpu/amd/ryzen-5-7600x.jpg")}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        CPU AMD AM5 <br /> RYZEN
                                                        5 7600X
                                                    </Card.Title>
                                                    <br />
                                                    <br />
                                                    <Card.Text>
                                                        {" "}
                                                        6 Cores / 12 Threads /
                                                        4.7 GHz - 5.3 GHz / AMD
                                                        Radeon Graphics{" "}
                                                    </Card.Text>
                                                    <div className="button1">
                                                        <Button>12,000</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
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
